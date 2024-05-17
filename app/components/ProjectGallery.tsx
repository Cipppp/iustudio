import React, { useEffect, useState } from 'react';
import Card from './Card';
import Layout from './Layout';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectGallery.module.scss';

interface ImageData {
    url: string;
    key: string;
}

interface ProjectGalleryProps {
    folderNames: string[];
    baseFolder: string;
    basePath: string;
}

const formatName = (folderName: string) => {
    const parts = folderName.split(/[-_]/);
    return parts.slice(0, 2).join(' ');
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ folderNames, baseFolder, basePath }) => {
    const [images, setImages] = useState<{ url: string, displayName: string, originalName: string }[]>([]);

    const fetchImages = async () => {
        try {
            const imageData = await Promise.all(
                folderNames.map(async (folder) => {
                    const encodedFolderName = encodeURIComponent(`${baseFolder}/${folder}/`);
                    const response = await fetch(`/api/s3-list?folderPrefix=${encodedFolderName}&imageName=Principala.jpg`);
                    const data: ImageData[] = await response.json();
                    return {
                        url: data[0]?.url || '',
                        displayName: formatName(folder),
                        originalName: folder
                    };
                })
            );
            setImages(imageData);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, [folderNames, baseFolder]);

    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={styles.galleryContainer}>
                <div className={styles.galleryGrid}>
                    <AnimatePresence>
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                >
                                <Card
                                    imageSrc={image.url}
                                    displayName={image.displayName}
                                    originalName={image.originalName}
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