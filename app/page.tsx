// app/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/logo_iu_white.png';
import backgroundImage from '../public/assets/poza-fatada-1.jpg';

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const handleImageClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push('/arhitectura');
    }, 1000);
  };

  const stopPropagation = (event: any) => {
    event.stopPropagation();
  };

  return (
    <motion.main
      className="main-background relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      initial={isTransitioning ? { opacity: 1 } : {}}
      animate={isTransitioning ? { opacity: 0 } : {}}
      transition={isTransitioning ? { duration: 1 } : {}}
      onClick={handleImageClick}
    >
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 md:p-6 lg:p-8">
        <div className="pl-4 md:pl-6 lg:pl-8">
          <Image src={logo} alt="Logo" width={250} height={250} />
        </div>
        <nav className="hidden md:flex space-x-4 md:space-x-6 lg:space-x-8 pr-4 md:pr-6 lg:pr-8 xl:pr-16 2xl:pr-24">
          <Link href="/arhitectura"><span className="text-white text-sm md:text-md lg:text-lg font-medium hover:text-gray-300" onClick={stopPropagation}>Arhitectura</span></Link>
          <Link href="/arhitectura-de-interior"><span className="text-white text-sm md:text-md lg:text-lg font-medium hover:text-gray-300" onClick={stopPropagation}>Arhitectura de interior</span></Link>
          <Link href="/design-de-produs"><span className="text-white text-sm md:text-md lg:text-lg font-medium hover:text-gray-300" onClick={stopPropagation}>Design de produs</span></Link>
          <Link href="/contact"><span className="text-white text-sm md:text-md lg:text-lg font-medium hover:text-gray-300" onClick={stopPropagation}>Contact</span></Link>
        </nav>

      </header>
      <div className="flex justify-center items-center h-full md:hidden">
        <button 
          className="mobile-button bg-white text-black p-4 rounded-lg text-sm"
          onClick={handleImageClick}
        >
          Vezi proiectele
        </button>
      </div>
    </motion.main>
  );
}
