import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from './Layout';
import Carousel from './Carousel';

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
    const [images, setImages] = useState<string[]>([]); // Assuming images are just URLs
    const projectDescription = projectDescriptions[project] || (
        <div>No description available.</div>
    );

    useEffect(() => {
        const fetchImages = async () => {
            const encodedProjectName = encodeURIComponent(project);
            const response = await fetch(
                `/api/s3-list?folderPrefix=${baseFolder}/${encodedProjectName}/`
            );
            if (response.ok) {
                const data: ImageData[] = await response.json(); // Ensure correct typing from the response
                setImages(data.map((img) => img.url));
            } else {
                console.error('Failed to fetch images');
            }
        };

        if (project) fetchImages();
    }, [project, baseFolder]);

    return (
        <Layout>
            <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
                {images.length > 0 ? (
                    <div className="flex-shrink-0 w-3/4 pl-[10rem]">
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
