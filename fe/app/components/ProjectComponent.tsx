import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from './Layout';
import Carousel from './Carousel';
import Head from 'next/head';  // Import Head for managing the document head

interface ProjectProps {
    baseFolder: string;
    projectDescriptions: { [key: string]: JSX.Element };
    project: string;
}

interface ImageData {
    url: string;
}

export default function ProjectComponent({
    baseFolder,
    projectDescriptions,
    project,
}: ProjectProps) {
    const router = useRouter();
    const projectDescription = projectDescriptions[project] || (
        <div>No description available.</div>
    );

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchOptimizedImages = async () => {
            const encodedProjectName = encodeURIComponent(project);
            const response = await fetch(`/api/s3-list?folderPrefix=${baseFolder}/${encodedProjectName}/`);
            if (response.ok) {
                const imageData: ImageData[] = await response.json();
                const optimizedImages = await Promise.all(imageData.map(img => fetchOptimizedImage(img.url)));
                setImages(optimizedImages);
            } else {
                console.error('Failed to fetch images');
            }
        };

        const fetchOptimizedImage = async (imageUrl: string): Promise<string> => {
            const response = await fetch(`/api/image?imageUrl=${encodeURIComponent(imageUrl)}`);
            if (response.ok) {
                const data = await response.json();
                return data.url;
            } else {
                console.error('Failed to fetch optimized image');
                return imageUrl;  // Fallback to original image if optimization fails
            }
        };

        if (project) fetchOptimizedImages();
    }, [project, baseFolder]);
    


    return (
        <Layout>

            <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
                {images.length > 0 ? (
                    <div className="flex-shrink-0 w-full">
                        <Carousel images={images} />
                    </div>
                ) : (
                    <div className="text-gray-500 text-lg">
                        Project not found.
                    </div>
                )}

                <div className="absolute bottom-80 right-100 ml-[40rem] text-left text-black z-10">
                    {projectDescription}
                </div>
            </div>
        </Layout>
    );
}