import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('gaiogo2@naver.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleGithubClick = () => {
    window.open('https://github.com/LeeKangRyong', '_blank');
  };

  const handleNotionClick = () => {
    window.open('https://www.notion.so/your-notion-link', '_blank');
  };

  return (
    <motion.article
      className="w-full max-w-[75rem] mx-auto py-12 px-8 box-border text-center bg-[#1a1a1a] border-t border-white/20 max-lg:py-10 max-lg:px-6 max-md:py-8 max-md:px-4 max-sm:py-6 max-sm:px-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-8 text-center text-white mt-0 ml-0 max-lg:text-4xl max-lg:mb-7 max-md:text-3xl max-md:mb-6 max-sm:text-2xl max-sm:mb-5"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      >
        Contact
      </motion.h1>

      <motion.p
        className="text-xl text-white/80 my-4 leading-relaxed break-keep max-lg:text-lg max-lg:my-3.5 max-md:text-base max-md:my-3 max-sm:text-sm max-sm:my-2.5"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ amount: 0.3 }}
      >
        Email){' '}
        <motion.span
          className="text-[#dcdc1d] font-semibold transition-colors duration-200 cursor-pointer hover:text-[#adff2f] hover:underline relative max-sm:break-all"
          onClick={handleEmailClick}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          gaiogo2@naver.com
          {emailCopied && (
            <motion.span
              className="absolute top-full left-1/2 -translate-x-1/2 bg-[#adff2f] text-black py-0.5 px-2 rounded text-xs font-bold whitespace-nowrap z-[1000]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: -25 }}
              exit={{ opacity: 0, y: -10 }}
            >
              복사됨!
            </motion.span>
          )}
        </motion.span>
      </motion.p>

      <motion.p
        className="text-xl text-white/80 my-4 leading-relaxed break-keep max-lg:text-lg max-lg:my-3.5 max-md:text-base max-md:my-3 max-sm:text-sm max-sm:my-2.5"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ amount: 0.3 }}
      >
        Github){' '}
        <motion.span
          className="text-[#dcdc1d] font-semibold transition-colors duration-200 cursor-pointer hover:text-[#adff2f] hover:underline max-sm:break-all"
          onClick={handleGithubClick}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          https://github.com/LeeKangRyong
        </motion.span>
      </motion.p>

      <motion.p
        className="text-xl text-white/80 my-4 leading-relaxed break-keep max-lg:text-lg max-lg:my-3.5 max-md:text-base max-md:my-3 max-sm:text-sm max-sm:my-2.5"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        Notion){' '}
        <motion.span
          className="text-[#dcdc1d] font-semibold transition-colors duration-200 cursor-pointer hover:text-[#adff2f] hover:underline max-sm:break-all"
          onClick={handleNotionClick}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio & Documents
        </motion.span>
      </motion.p>
    </motion.article>
  );
};

export default Contact;
