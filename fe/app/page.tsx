'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/logo-studio.png';
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

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <motion.main
      className="relative min-h-screen bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      initial={isTransitioning ? { opacity: 1 } : {}}
      animate={isTransitioning ? { opacity: 0 } : {}}
      transition={isTransitioning ? { duration: 1 } : {}}
      onClick={handleImageClick}
    >
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
        <div className="pl-4">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </div>
        <nav className="flex space-x-[4rem] pr-[10rem]">
          <Link href="/arhitectura"><span className="text-white text-md font-medium hover:text-gray-300" onClick={stopPropagation}>Arhitectura</span></Link>
          <Link href="/arhitectura-de-interior"><span className="text-white text-md font-medium hover:text-gray-300" onClick={stopPropagation}>Arhitectura de interior</span></Link>
          <Link href="/design-de-produs"><span className="text-white text-md font-medium hover:text-gray-300" onClick={stopPropagation}>Design de produs</span></Link>
        </nav>
      </header>
    </motion.main>
  );
}
