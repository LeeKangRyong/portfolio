import './topBar.css';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';

function TopBar() {
    const [showNavBar, setShowNavbar] = useState(true);
    const hideNavBarTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(true);

            if (hideNavBarTimeoutRef.current) {
            clearTimeout(hideNavBarTimeoutRef.current);
            }

            const timeoutId = setTimeout(() => {
            setShowNavbar(false);
            }, 2000); 

            hideNavBarTimeoutRef.current = timeoutId;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (hideNavBarTimeoutRef.current) {
            clearTimeout(hideNavBarTimeoutRef.current);
        }
    };
    }, []);

    return (
        <header className={showNavBar ? 'visible' : 'hidden'}>
            <nav className='navBar'>
                <Link to='A' smooth={true} duration={500}>
                    <span className='navText'>About me</span>
                </Link>
                <Link to='B' smooth={true} duration={500}>
                    <span className='navText'>History</span>
                </Link>
                <Link to='C' smooth={true} duration={500}>
                    <span className='navText'>Skills & Tools</span>
                </Link>
                <Link to='D' smooth={true} duration={500}>
                    <span className='navText'>Projects</span>
                </Link>
            </nav>
    </header>
    );
}

export default TopBar;