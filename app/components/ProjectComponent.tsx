import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from './Layout';
import Carousel from './Carousel';
import styles from './ProjectComponent.module.scss'; // Import SCSS module

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
                    <div className="flex-shrink-0 w-full h-full relative">
                        <Carousel images={images} />
                    </div>
                ) : (
                    <div className="text-gray-500 text-lg">
                        Project not found.
                    </div>
                )}
                <div className={styles.textContainer}>
                    <div className={styles.leftText}>
                        <p>JN&QUOI Beach Club<br />Comporta, Portugal</p>
                    </div>
                    <div className={styles.rightText}>
                        <p>2022—2023</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
