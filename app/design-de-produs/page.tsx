'use client';
import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

export default function InteriorArhitecture() {
    return (
        <ProjectGallery
            folderNames={[
                'Easychair-IU20',
                'Scara-NIU_an-2018-2019',
                'Scaun-Cu20_an-2020',
            ]}
            baseFolder="optimized/Easychair"
            basePath="design-de-produs" // Pass a different basePath for interior architecture
        />
    );
}
