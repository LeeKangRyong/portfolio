import './Contact.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
    const [emailCopied, setEmailCopied] = useState(false);

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
            className="contactContainer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
        >
            <motion.h1 
                className="contactTitle"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
            >
                Contact
            </motion.h1>
            
            <motion.p 
                className="contactIndex"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ amount: 0.3 }}
            >
                Email) {' '}
                <motion.span 
                    className="contact"
                    onClick={handleEmailClick}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                    style={{ position: 'relative' }}
                >
                    gaiogo2@naver.com
                    {emailCopied && (
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: -25 }}
                            exit={{ opacity: 0, y: -10 }}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#adff2f',
                                color: 'black',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '0.25rem',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                                zIndex: 1000
                            }}
                        >
                            복사됨!
                        </motion.span>
                    )}
                </motion.span>
            </motion.p>
            
            <motion.p 
                className="contactIndex"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ amount: 0.3 }}
            >
                Github) {' '}
                <motion.span 
                    className="contact"
                    onClick={handleGithubClick}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                >
                    https://github.com/LeeKangRyong
                </motion.span>
            </motion.p>
            
            <motion.p 
                className="contactIndex"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ amount: 0.3 }}
            >
                Notion) {' '}
                <motion.span 
                    className="contact"
                    onClick={handleNotionClick}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                >
                    Portfolio & Documents
                </motion.span>
            </motion.p>
        </motion.article>
    );
}

export default Contact;