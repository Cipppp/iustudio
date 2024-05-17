import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Sidebar from './Sidebar';

export default function MenuWrapper() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 980);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize the check on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? <HamburgerMenu /> : <Sidebar />;
}
