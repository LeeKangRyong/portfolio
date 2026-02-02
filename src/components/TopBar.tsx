import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const TopBar = () => {
  const [showNavBar, setShowNavbar] = useState<boolean>(true);
  const hideNavBarTimeoutRef = useRef<number | null>(null);
  const { scrollY }: { scrollY: MotionValue<number> } = useScroll();

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
          scaleX: useTransform(
            scrollY,
            [0, document.documentElement.scrollHeight - window.innerHeight],
            [0, 1]
          ),
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #0c9e21, #dcdc1d, #dcdc1d)',
          transformOrigin: '0%',
          zIndex: 1002,
        }}
      />

      <motion.header
        className={`fixed top-0 left-0 w-full z-[1000] before:content-[''] before:fixed before:top-0 before:left-0 before:w-full before:h-5 before:bg-transparent before:z-[999] max-lg:before:h-4 max-md:before:h-4 max-sm:before:h-3`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.nav
          className={`fixed w-full h-20 flex z-[1000] justify-end items-center backdrop-blur-lg px-8 box-border transition-all duration-300 ease-in-out max-lg:px-6 max-lg:h-[4.6875rem] max-md:h-[4.375rem] max-md:px-4 max-md:justify-center max-sm:h-15 max-sm:px-2 ${
            showNavBar
              ? 'top-0 opacity-100 visible'
              : '-top-20 opacity-0 invisible hover:top-0 hover:opacity-100 hover:visible max-lg:hover:-top-[4.6875rem] max-md:hover:-top-[4.375rem] max-sm:hover:-top-15'
          }`}
          style={{ backgroundColor }}
        >
          <Link to="A" smooth={true} duration={500}>
            <motion.span
              className="mx-3 py-2 px-3 rounded-lg transition-all duration-200 text-white font-semibold text-2xl cursor-pointer max-lg:text-xl max-lg:mx-2 max-md:text-sm max-md:mx-1 max-md:py-1 max-md:px-1.5 max-sm:text-xs max-sm:mx-0.5 max-sm:py-0.5 max-sm:px-1"
              whileHover={{ scale: 1.1, color: '#adff2f', transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              About me
            </motion.span>
          </Link>
          <Link to="B" smooth={true} duration={500}>
            <motion.span
              className="mx-3 py-2 px-3 rounded-lg transition-all duration-200 text-white font-semibold text-2xl cursor-pointer max-lg:text-xl max-lg:mx-2 max-md:text-sm max-md:mx-1 max-md:py-1 max-md:px-1.5 max-sm:text-xs max-sm:mx-0.5 max-sm:py-0.5 max-sm:px-1"
              whileHover={{ scale: 1.1, color: '#adff2f', transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              History
            </motion.span>
          </Link>
          <Link to="C" smooth={true} duration={500}>
            <motion.span
              className="mx-3 py-2 px-3 rounded-lg transition-all duration-200 text-white font-semibold text-2xl cursor-pointer max-lg:text-xl max-lg:mx-2 max-md:text-sm max-md:mx-1 max-md:py-1 max-md:px-1.5 max-sm:text-xs max-sm:mx-0.5 max-sm:py-0.5 max-sm:px-1"
              whileHover={{ scale: 1.1, color: '#adff2f', transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              Skills & Tools
            </motion.span>
          </Link>
          <Link to="D" smooth={true} duration={500}>
            <motion.span
              className="mx-3 py-2 px-3 rounded-lg transition-all duration-200 text-white font-semibold text-2xl cursor-pointer max-lg:text-xl max-lg:mx-2 max-md:text-sm max-md:mx-1 max-md:py-1 max-md:px-1.5 max-sm:text-xs max-sm:mx-0.5 max-sm:py-0.5 max-sm:px-1"
              whileHover={{ scale: 1.1, color: '#adff2f', transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.span>
          </Link>
        </motion.nav>
      </motion.header>
    </>
  );
};

export default TopBar;
