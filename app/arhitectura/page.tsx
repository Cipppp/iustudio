'use client';
import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

export default function Arhitecture() {
    return (
        <ProjectGallery
            folderNames={['Casa-CC22', 'Casa-NIU', 'Casa-PRM22']}
            baseFolder="Case"
            basePath="arhitectura" // Pass the basePath for architectural projects
        />
    );
}
