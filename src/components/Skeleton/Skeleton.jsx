import './Skeleton.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function Skeleton({ onComplete }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [showLoading, setShowLoading] = useState(false);
    
    const fullText = '프론트엔드 개발자\n이강룡입니다.';
    
    useEffect(() => {
        if (currentStep === 0) {
            let index = 0;
            const typingTimer = setInterval(() => {
                if (index <= fullText.length) {
                    setTypedText(fullText.slice(0, index));
                    index++;
                } else {
                    clearInterval(typingTimer);
                    setTimeout(() => {
                        setCurrentStep(1);
                        setShowLoading(true);
                    }, 500);
                }
            }, 100); 
            
            return () => clearInterval(typingTimer);
        }
    }, [currentStep]);
    
    useEffect(() => {
        if (currentStep === 1) {
            let progress = 0;
            const loadingTimer = setInterval(() => {
                if (progress <= 100) {
                    setLoadingProgress(progress);
                    progress += 2; 
                } else {
                    clearInterval(loadingTimer);
                    setCurrentStep(2);
                    setTimeout(() => onComplete && onComplete(), 800);
                }
            }, 50);
            
            return () => clearInterval(loadingTimer);
        }
    }, [currentStep, onComplete]);

    return (
        <AnimatePresence>
            <motion.div 
                className="skeletonContainer"
                initial={{ opacity: 1 }}
                exit={{ 
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.8, ease: "easeInOut" }
                }}
            >
                <motion.div
                    className="skeletonContentWrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1 
                        className="skeletonMainText"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {typedText.split('\n').map((line, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.3 }}
                            >
                                {line}
                                {currentStep === 0 && index === typedText.split('\n').length - 1 && (
                                    <motion.span
                                        className="cursor"
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                                    >
                                        |
                                    </motion.span>
                                )}
                            </motion.div>
                        ))}
                    </motion.h1>
                    
                    {showLoading && (
                        <motion.div
                            className="skeletonProgressWrapper"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div 
                                className="skeletonProgress"
                                key={loadingProgress}
                                initial={{ scale: 1.2, opacity: 0.7 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                {loadingProgress}%
                            </motion.div>
                            
                            <div className="skeletonProgressBarWrapper">
                                <motion.div
                                    className="skeletonProgressBar"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${loadingProgress}%` }}
                                    transition={{ duration: 0.1, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Skeleton;