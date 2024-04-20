'use client'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo-iu.png';
import { usePathname } from 'next/navigation';

const mainLinks =['Arhitectura', 'Design de produs', 'Arhitectura de interior', 'Servicii', 'Contact'];
const socialLinks = [{name: 'Instagram', url: 'https://www.instagram.com/iu.studio/'}, {name: 'Facebook', url: 'https://www.facebook.com/iu.studio/'}];

export default function Sidebar() { 
    const pathname = usePathname();

    return <div className="h-full w-64 bg-white py-5 pl-12 pr-5 pt-5 fixed mt-6">
        <Link href="/">
            <div className="flex items-center space-x-2 mb-6">
                <Image src={logo} alt="logo" width={50} height={50} />
                <span className="text-lg text-black pl-4">iu studio</span>
            </div>
        </Link>
        <nav className="pl-4">
            {
                mainLinks.map((link, index) => (
                    <Link key={index} href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className={`block py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors ${pathname === `/${link.toLowerCase().replace(/\s+/g, '-')}` && 'underline'}`}>{link}</span>
                    </Link>
                ))
            }
            <div className="mt-10">
                {socialLinks.map((link, index) => (
                    <Link key={index} href={link.url}>
                        <span className="block py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">{link.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    </div>
}