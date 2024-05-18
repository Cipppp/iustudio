'use client';
import ProjectComponent from '@/app/components/ProjectComponent';

const projectDescriptions = {
    'ICABU-M': {
        name: "ICABU M",
        location: "Poiana Mărului, România",
        year: "În desfășurare"
    },
    'Casa-NIU19': {
        name: "Casa NIU",
        location: "București, România",
        year: "2017-2019"
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