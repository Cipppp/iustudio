'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Layout from './Layout';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageData {
    url: string;
    key: string;
}

interface ProjectGalleryProps {
    folderNames: string[];
    baseFolder: string;
    basePath: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
    folderNames,
    baseFolder,
    basePath,
}) => {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const imageData: ImageData[] = await Promise.all(
                folderNames.map(async (folder) => {
                    const encodedFolderName = encodeURIComponent(
                        `${baseFolder}/${folder}/`
                    );
                    const response = await fetch(
                        `/api/s3-list?folderPrefix=${encodedFolderName}&imageName=Principala.jpg`
                    );
                    const data: ImageData[] = await response.json();
                    return data[0] || {}; // Assuming only one image per folder, default to empty object if none found
                })
            );

            setImages(imageData);
        };

        fetchImages();
    }, [folderNames, baseFolder]); // Add dependencies to useEffect

    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[6rem] pr-10 pb-10 pt-[8rem]">
                    <AnimatePresence>
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}>
                                <Card
                                    imageSrc={image.url}
                                    name={image.key.split('/')[1]} // Use the folder name or modify as needed
                                    basePath={basePath}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>
        </Layout>
    );
};

export default ProjectGallery;
