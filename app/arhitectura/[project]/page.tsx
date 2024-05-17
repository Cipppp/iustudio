'use client';
import ProjectComponent from '@/app/components/ProjectComponent';

const projectDescriptions = {

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