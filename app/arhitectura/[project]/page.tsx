'use client';
import ProjectComponent from '@/app/components/ProjectComponent';

const projectDescriptions = {
    'Casa-CC22': {
        name: "Casa CC22",
        location: "București, România",
        year: "2022"
    },
    'Casa-NIU': {
        name: "Casa NIU",
        location: "București, România",
        year: ""
    },
    'Casa-PRM22': {
        name: "Casa PRM22",
        location: "București, România",
        year: "2022"
    },
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
