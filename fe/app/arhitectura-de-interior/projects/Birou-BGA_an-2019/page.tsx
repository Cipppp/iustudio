
'use client';
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

export default function ProjectPage() {
    return (
        <ProjectComponent
            baseFolder="Magazin_incaltaminte"
            projectDescriptions={projectDescriptions}
            project="Birou-BGA_an-2019"
        />
    );
}
