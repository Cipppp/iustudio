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
            
            // Display the images if the response is successful
            if (response.ok) {
                const data: ImageData[] = await response.json();
                const imageUrls = data.map((image) => image.url);
                setImages(imageUrls);
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