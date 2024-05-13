import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './Sidebar.module.scss';

const mainLinks = ['Arhitectura', 'Arhitectură de interior', 'Design de produs'];
const mediumLinks = ['Despre', 'Contact'];
const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/iu.studio/' },
    { name: 'Facebook', url: 'https://www.facebook.com/IUstudio.irinaursu/' },
];

function normalizeString(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false); // Start closed on mobile
    const pathname = usePathname();
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <button onClick={toggleSidebar} className={styles.button}>
                <FontAwesomeIcon icon={faBars} className={styles.textIcon} />
            </button>
            
            {isOpen && (
                <motion.nav
                    className={styles.menu}
                    initial={{ x: -250 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/">
                        <div className={styles.linkText}>IU Studio</div>
                    </Link>
                    {mainLinks.map((link, index) => (
                        <Link key={index} href={`/${normalizeString(link).toLowerCase().replace(/\s+/g, '-')}`}>
                            <div className={styles.linkText}>{link}</div>
                        </Link>
                    ))}
                    {mediumLinks.map((link, index) => (
                        <Link key={index} href={`/${normalizeString(link).toLowerCase().replace(/\s+/g, '-')}`}>
                            <div className={styles.linkText}>{link}</div>
                        </Link>
                    ))}
                    {socialLinks.map((link, index) => (
                        <Link key={index} href={link.url}>
                            <div className={styles.linkText}>{link.name}</div>
                        </Link>
                    ))}
                </motion.nav>
            )}
        </>
    );
}
