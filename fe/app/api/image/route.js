// pages/api/image.js
import { S3Client, GetObjectCommand, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import sharp from 'sharp';

const s3Client = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    },
});

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const imageUrl = searchParams.get("imageUrl");

    try {
        const url = new URL(imageUrl);
        const key = url.pathname.substring(1); // Assuming the URL includes the leading '/'
        const optimizedImageKey = `optimized/${key}`;

        // Check  if the optimized image already exists
        try {
            await s3Client.send(new HeadObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: optimizedImageKey
            }));
            // If exists, return the URL directly
            const optimizedImageUrl = `https://iustudio-storage.s3.eu-north-1.amazonaws.com/${optimizedImageKey}`;
            return new Response(JSON.stringify({ url: optimizedImageUrl }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch {
            // If does not exist, proceed with optimization
            const { Body } = await s3Client.send(new GetObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: key,
            }));
            const image = sharp();
            Body.pipe(image);

            const optimizedBuffer = await image.resize(800).jpeg({ quality: 80 }).toBuffer();
            await s3Client.send(new PutObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: optimizedImageKey,
                Body: optimizedBuffer,
                ContentType: 'image/jpeg',
                CacheControl: 'max-age=31536000, public'  // Cache for 1 year
            }));

            const optimizedImageUrl = `https://iustudio-storage.s3.eu-north-1.amazonaws.com/${optimizedImageKey}`;
            return new Response(JSON.stringify({ url: optimizedImageUrl }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        console.error('Failed to retrieve or transform image:', error);
        return new Response(JSON.stringify({ error: 'Failed to process image' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
