'use client'
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Carousel from './Carousel';
import Head from 'next/head';

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

    const projectDescription = projectDescriptions[project] || (
        <div>No description available.</div>
    );

    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOptimizedImages = async () => {
            try {
                const encodedProjectName = encodeURIComponent(project);
                const response = await fetch(`/api/s3-list?folderPrefix=${baseFolder}/${encodedProjectName}/`);
                if (response.ok) {
                    const imageData: ImageData[] = await response.json();
                    const optimizedImages = await Promise.all(imageData.map(img => fetchOptimizedImage(img.url)));
                    setImages(optimizedImages);
                } else {
                    throw new Error('Failed to fetch images');
                }
            } catch (error) {
                console.error(error);
                setError('Failed to fetch images');
            } finally {
                setLoading(false);
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
            <Head>
                <title>{projectDescriptions[project]?.props?.children[0]?.props?.children || 'Project'}</title>
                <meta name="description" content={`Details about the project ${project}`} />
            </Head>
            <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
                {loading ? (
                    <div className="text-gray-500 text-lg">Loading...</div>
                ) : error ? (
                    <div className="text-red-500 text-lg">{error}</div>
                ) : images.length > 0 ? (
                    <div className="flex-shrink-0 w-full">
                        <Carousel images={images} />
                    </div>
                ) : (
                    <div className="text-gray-500 text-lg">Project not found.</div>
                )}

                <div className="absolute bottom-80 right-100 ml-[40rem] text-left text-black z-10">
                    {projectDescription}
                </div>
            </div>
        </Layout>
    );
}
