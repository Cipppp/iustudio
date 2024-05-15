import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    },
});

async function listImagesFromS3(folderPrefix = '', imageName = '') {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Prefix: folderPrefix,
    };
    const command = new ListObjectsV2Command(params);
    const response = await s3Client.send(command);

    // Filter to include only image files
    const validImageExtensions = /\.(jpg|jpeg|png)$/i;
    const contents = response.Contents.filter(file => {
        // Filter by specific image name if provided and check valid image extensions
        if (imageName) {
            return file.Key.endsWith(imageName) && validImageExtensions.test(file.Key);
        }
        return validImageExtensions.test(file.Key);
    });

    return contents.map(file => ({
        key: file.Key,
        url: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${file.Key}`
    }));
}

export async function GET(request) {
    const url = new URL(request.url);
    const folderPrefix = url.searchParams.get('folderPrefix') || '';
    const imageName = url.searchParams.get('imageName') || '';  // New parameter for image name

    try {
        const images = await listImagesFromS3(folderPrefix, imageName);
        return NextResponse.json(images);
    } catch (error) {
        return NextResponse.error({
            status: 500,
            body: "Internal Server Error",
        });
    }
}
