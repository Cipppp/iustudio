import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    imageSrc: string;
    name: string;
}

export default function Card({ imageSrc, name }: CardProps) {
    return (
        <Link href={`/arhitectura/${name.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="w-[24rem] h-[30rem] bg-white overflow-hidden flex flex-col justify-between">
                <div className="flex-shrink-0 h-[90%] relative">
                    <Image src={imageSrc} alt={name} layout='fill' objectFit="cover"/>
                </div>
                <div className="p-4 text-center flex-shrink-0 h-[10%]">
                    <h3 className="text-lg text-black">
                        {name}
                    </h3>
                </div>
            </div>
        </Link>
    )
}