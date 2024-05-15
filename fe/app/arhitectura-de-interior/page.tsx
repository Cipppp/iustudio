'use client';
import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

export default function Arhitecture() {
    return (
        <ProjectGallery
            folderNames={['Birou-BGA_an-2019', 'Birou-IU_an-2019_2020/', 'Magazin-ROCA_an-2020']}
            baseFolder="Magazin_incaltaminte"
            basePath="arhitectura-de-interior" // Pass the basePath for architectural projects
        />
    );
}
