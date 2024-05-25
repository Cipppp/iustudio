'use client';
import ProjectComponent from '@/app/components/ProjectComponent';

const projectDescriptions = {
    
    'Casa-NIU19': {
        name: "Casa NIU",
        location: "București, România",
        year: "2017-2019",
        mentions: [
            "Proiect în colaborare cu AWstudio",
            "Premiu Anuala de Arhitectura Bucuresti 2019"
        ]
    },
    'ICABU-M': {
        name: "ICABU M",
        location: "Poiana Mărului, România",
        year: "În construcție",
    }
};

export default function ProjectPage({
    params,
}: {
    params: { project: string };
}) {
    return (
        <ProjectComponent
            baseFolder="optimized/Case"
            projectDescriptions={projectDescriptions}
            project={params.project}
        />
    );
}