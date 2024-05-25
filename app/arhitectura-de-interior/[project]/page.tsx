'use client';
import ProjectComponent from '@/app/components/ProjectComponent';

const projectDescriptions = {
    'Casa-CC22': {
        name: "Casa CC22",
        location: "Galați, România",
        year: "2019 - 2022",
    },
    'Casa-NIU': {
        name: "Casa NIU",
        location: "București, România",
        year: "2017 - 2019",
        mentions: [
            "Nominalizare Anuala de Arhitectura Bucuresti 2019",
            "Winner BIG SEE Interior Design Award 2019"
        ]
    },
    'Casa-PRM22': {
        name: "Casa PRM22",
        location: "București, România",
        year: "2019 - 2022"
    },
    'Birou-BGA_an-2019': {
        name: "Birou BGA",
        location: "București, România",
        year: "2019"
    },
    'Birou-IU_an-2019_2020': {
        name: "Birou IU",
        location: "București, România",
        year: "2017 - 2019",
        mentions: [
            "Winner BIG SEE Interior Design Award 2019"
        ]
    },
    'Magazin-ROCA_an-2020': {
        name: "Magazin ROCA",
        location: "București, România",
        year: "2022"
    }
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