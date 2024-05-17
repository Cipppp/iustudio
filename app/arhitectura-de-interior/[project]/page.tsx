'use client';
import ProjectComponent from '@/app/components/ProjectComponent';

const projectDescriptions = {
    'Birou-BGA_an-2019': {
        name: "Birou BGA",
        location: "București, România",
        year: "2019"
    },
    'Birou-IU_an-2019_2020': {
        name: "Birou IU",
        location: "București, România",
        year: "2019- 2020"
    },
    'Magazin-ROCA_an-2020': {
        name: "Magazin ROCA",
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
            baseFolder="optimized/Magazin_incaltaminte"
            projectDescriptions={projectDescriptions}
            project={params.project}
        />
    );
}
