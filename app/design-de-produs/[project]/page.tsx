'use client';
import ProjectComponent from '@/app/components/ProjectComponent';

const projectDescriptions = {
    'Easychair-IU20': {
        name: "Easychair IU",
        year: "2020"
    },
    'Scara-NIU_an-2018-2019': {
        name: "Scara NIU",
        year: "2018-2019"
    },
    'Scaun-Cu20_an-2020': {
        name: "Scaun Cu20",
        year: "2019"
    },
};


export default function ProjectPage({
    params,
}: {
    params: { project: string };
}) {
    return (
        <ProjectComponent
            baseFolder="optimized/Easychair"
            projectDescriptions={projectDescriptions}
            project={params.project}
        />
    );
}