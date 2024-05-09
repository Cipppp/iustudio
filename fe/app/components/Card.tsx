import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    imageSrc: string;
    name: string;
    basePath: string; // Additional prop for customizing the link base path
}

function generateSlug(name: string): string {
    return name
        .replace(/&/g, 'and') // Replace '&' with 'and'
        .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}

export default function Card({ imageSrc, name, basePath }: CardProps) {
    const slug = generateSlug(name);

    return (
        <Link href={`/${basePath}/${slug}`}>
            <div className="w-[24rem] h-[30rem] bg-white overflow-hidden flex flex-col justify-between">
                <div className="flex-shrink-0 h-[90%] relative">
                    <Image
                        src={imageSrc}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-4 text-center flex-shrink-0 h-[10%]">
                    <h3 className="text-lg text-black">{name}</h3>
                </div>
            </div>
        </Link>
    );
}
