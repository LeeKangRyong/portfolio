import './TopBar.css';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function TopBar() {
    const [showNavBar, setShowNavbar] = useState(true);
    const hideNavBarTimeoutRef = useRef(null);
    const { scrollY } = useScroll();
    
    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ['rgba(128, 128, 128, 0.6)', 'rgba(128, 128, 128, 0.9)']
    );

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
        <>
            <motion.div
                style={{ 
                    scaleX: useTransform(scrollY, [0, document.documentElement.scrollHeight - window.innerHeight], [0, 1]),
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #0c9e21, #dcdc1d, #dcdc1d)',
                    transformOrigin: '0%',
                    zIndex: 1002
                }}
            />
            
            <motion.header 
                className={showNavBar ? 'visible' : 'hidden'}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.nav 
                    className='navBar'
                    style={{ backgroundColor }}
                >
                    <Link to='A' smooth={true} duration={500}>
                        <motion.span 
                            className='navText'
                            whileHover={{ scale: 1.1, color: "#adff2f", transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.95 }}
                        >
                            About me
                        </motion.span>
                    </Link>
                    <Link to='B' smooth={true} duration={500}>
                        <motion.span 
                            className='navText'
                            whileHover={{  scale: 1.1, color: "#adff2f", transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.95 }}
                        >
                            History
                        </motion.span>
                    </Link>
                    <Link to='C' smooth={true} duration={500}>
                        <motion.span 
                            className='navText'
                            whileHover={{ scale: 1.1, color: "#adff2f", transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Skills & Tools
                        </motion.span>
                    </Link>
                    <Link to='D' smooth={true} duration={500}>
                        <motion.span 
                            className='navText'
                            whileHover={{ scale: 1.1, color: "#adff2f", transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Projects
                        </motion.span>
                    </Link>
                </motion.nav>
            </motion.header>
        </>
    );
}

export default TopBar;