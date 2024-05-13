import Image from 'next/image';
import Link from 'next/link';


function generateSlug(name: string): string {
    return name
        .replace(/&/g, 'and') // Replace '&' with 'and'
        .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}

interface CardProps {
    imageSrc: string;
    displayName: string; // For displaying
    originalName: string; // For linking
    basePath: string;
}

export default function Card({ imageSrc, displayName, originalName, basePath }: CardProps) {
    const slug = generateSlug(originalName); // Use original name for the URL

    return (
        <Link href={`/${basePath}/${slug}`}>
            <div className="w-[24rem] h-[30rem] bg-white overflow-hidden flex flex-col justify-between">
                <div className="flex-shrink-0 h-[90%] relative">
                    <Image
                        src={imageSrc}
                        alt={displayName}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-4 text-center flex-shrink-0 h-[10%]">
                    <h3 className="text-lg text-black">{displayName}</h3>
                </div>
            </div>
        </Link>
    );
}