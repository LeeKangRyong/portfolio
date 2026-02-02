import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { SkeletonProps } from '@/types';

const Skeleton = ({ onComplete }: SkeletonProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>('');
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const fullText = '서비스를 만드는\n 프론트엔드 개발자\n 이강룡 입니다.';

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
    return;
  }, [currentStep, fullText]);

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
          setTimeout(() => onComplete(), 800);
        }
      }, 50);

      return () => clearInterval(loadingTimer);
    }
    return;
  }, [currentStep, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] flex flex-col justify-center items-center z-[9999] font-['BMJUA',system-ui,sans-serif]"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.95,
          transition: { duration: 0.8, ease: 'easeInOut' },
        }}
      >
        <motion.div
          className="flex flex-col justify-center items-center text-center gap-12 max-lg:gap-10 max-md:gap-8 max-md:px-4 max-sm:gap-6 max-sm:px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-7xl font-bold text-white m-0 leading-tight whitespace-pre-line drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] max-lg:text-6xl max-md:text-4xl max-md:leading-snug max-sm:text-3xl max-sm:leading-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {typedText.split('\n').map((line, index) => (
              <motion.div
                key={line || index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                {line}
                {currentStep === 0 && index === typedText.split('\n').length - 1 && (
                  <motion.span
                    className="text-[#adff2f] font-normal ml-0.5 max-sm:ml-0"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    |
                  </motion.span>
                )}
              </motion.div>
            ))}
          </motion.h1>

          {showLoading && (
            <motion.div
              className="flex flex-col items-center gap-8 min-w-80 max-lg:gap-7 max-lg:min-w-72 max-md:gap-6 max-md:min-w-60 max-sm:gap-5 max-sm:min-w-48"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-5xl font-bold text-[#adff2f] drop-shadow-[0_0_15px_rgba(173,255,47,0.5)] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl"
                key={loadingProgress}
                initial={{ scale: 1.2, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                {loadingProgress}%
              </motion.div>

              <div className="w-full h-2 bg-white/10 rounded-2xl overflow-hidden shadow-inner max-lg:h-1.5 max-md:h-1 max-sm:h-1">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#adff2f] via-[#7ed321] to-[#adff2f] rounded-2xl shadow-[0_0_10px_rgba(173,255,47,0.6)] relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:animate-[shimmer_1.5s_infinite]"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Skeleton;
