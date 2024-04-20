import Image from "next/image";
import logo from '../public/assets/logo-studio.png';
import backgroundImage from '../public/assets/poza-fatada-1.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <Link href="/arhitectura">
      <main className="relative min-h-screen bg-cover bg-center cursor-pointer" style={{backgroundImage: `url(${backgroundImage.src})`}}>
          <div className="absolute top-0 left-0 pl-[4rem] pt-[4rem]">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </div>
      </main>
    </Link>
  );
}
