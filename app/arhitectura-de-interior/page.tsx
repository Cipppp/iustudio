'use client';
import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

export default function InteriorArhitecture() {
    return (
        <ProjectGallery
            folderNames={[
                'Casa-CC22', 
                'Casa-PRM22',
                'Casa-NIU', 
                'Magazin-ROCA_an-2020',
                'Birou-BGA_an-2019',
                'Birou-IU_an-2019_2020'
            ]}
            baseFolder="optimized/Magazin_incaltaminte"
            basePath="arhitectura-de-interior" // Pass a different basePath for interior architecture
        />
    );
}
