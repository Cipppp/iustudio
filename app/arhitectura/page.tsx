'use client';
import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

export default function Arhitecture() {
    return (
        <ProjectGallery
            folderNames=""
            baseFolder="optimized/Case"
            basePath="arhitectura" // Pass the basePath for architectural projects
        />
    );
}
