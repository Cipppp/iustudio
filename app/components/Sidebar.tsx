'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo-iu.png'; // Ensure the path is correct
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const mainLinks = [
    'Arhitectură',
    'Arhitectură de interior',
    'Design de produs',
];
// const mediumLinks = ['Publicații', 'Despre', 'Contact'];
const mediumLinks = ['Despre', 'Contact'];
const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/iu.studio/' },
    { name: 'Facebook', url: 'https://www.facebook.com/IUstudio.irinaursu/' },
];

function normalizeString(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove diacritics
}

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <>
            <motion.div
                className="h-full w-64 bg-transparent py-5 pl-12 pr-5 fixed mt-6 left-0 top-0 z-20"
                initial={{ x: -170 }} // Start off-screen to the left
                animate={{ x: 0 }} // Slide in from the left
                transition={{ duration: 1 }} // Half-second transition
            >
                <Link href="/">
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="text-2xl text-black pl-4">IU studio</span>
                    </div>
                </Link>
                <nav className="pl-4">
                    {mainLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={`/${normalizeString(link)
                                .toLowerCase()
                                .replace(/\s+/g, '-')}`}>
                            <span
                                className={`block py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors ${
                                    pathname ===
                                        `/${normalizeString(link)
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')}` && 'underline'
                                }`}>
                                {link}
                            </span>
                        </Link>
                    ))}
                    <div className="mt-6"></div>
                    {mediumLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={`/${normalizeString(link)
                                .toLowerCase()
                                .replace(/\s+/g, '-')}`}>
                            <span
                                className={`block py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors ${
                                    pathname ===
                                        `/${normalizeString(link)
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')}` && 'underline'
                                }`}>
                                {link}
                            </span>
                        </Link>
                    ))}

                    <div className="mt-10">
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.url}>
                                <span className="block py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </motion.div>

        </>
    );
}
