'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import ProjectComponent from '@/app/components/ProjectComponent';

const projectDescriptions = {
    'Casa-CC22': (
        <>
            <div className="font-bold text-lg">Casa CC22</div>
            <div>Bucharest, Romania</div>
            <div>2022</div>
        </>
    ),
    'CASA-NIU': (
        <>
            <div className="font-bold text-lg">Casa NIU</div>
            <div>Bucharest, Romania</div>
            <div></div>
        </>
    ),
    'CASA-PRM22': (
        <>
            <div className="font-bold text-lg">Casa PRM22</div>
            <div>Bucharest, Romania</div>
            <div>2022</div>
        </>
    ),
};

export default function ProjectPage({
    params,
}: {
    params: { project: string };
}) {
    return (
        <ProjectComponent
            baseFolder="Case"
            projectDescriptions={projectDescriptions}
            project={params.project}
        />
    );
}
