import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Skill from '@/components/Skill';
import larrow from '@/assets/skills/larrow.png';
import rarrow from '@/assets/skills/rarrow.png';
import useAssets from '@/hooks/useAssets';
import skills from '@/data/skillData';

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 as const } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: { opacity: 0, y: -16, scale: 0.9, transition: { duration: 0.2 } },
};

const Skills = () => {
  const [activeTitle, setActiveTitle] = useState<string>(skills[0]?.title ?? '');
  const { assets: skillIcons } = useAssets('skills');
  const isMobile = useMediaQuery({ maxWidth: 639 });

  const activeIndex = skills.findIndex((cat) => cat.title === activeTitle);
  const activeCategory = skills[activeIndex];

  const goToPrevious = () => {
    const prev = skills[activeIndex - 1];
    if (prev) setActiveTitle(prev.title);
  };

  const goToNext = () => {
    const next = skills[activeIndex + 1];
    if (next) setActiveTitle(next.title);
  };

  return (
    <motion.article
      className="w-full max-w-[75rem] mx-auto px-8 box-border max-lg:px-6 max-md:px-4 max-sm:px-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-7xl font-bold mb-12 text-center text-white mt-0 max-lg:text-5xl max-md:text-4xl max-md:mb-8 max-sm:text-3xl max-sm:mb-6"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        Skills & Tools
      </motion.h1>

      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
        {isMobile ? (
          <div className="flex items-center gap-4">
            <button
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              className="p-1 disabled:opacity-20 transition-opacity"
              aria-label="Previous category"
            >
              <img src={larrow} alt="previous" className="w-6 h-6 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </button>
            <span className="text-white font-bold text-lg w-10 text-center">{activeTitle}</span>
            <button
              onClick={goToNext}
              disabled={activeIndex === skills.length - 1}
              className="p-1 disabled:opacity-20 transition-opacity"
              aria-label="Next category"
            >
              <img src={rarrow} alt="next" className="w-6 h-6 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </button>
          </div>
        ) : (
          <div className="flex bg-white/10 rounded-full p-1 gap-1">
            {skills.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveTitle(cat.title)}
                className="relative px-6 py-2 rounded-full cursor-pointer"
                aria-pressed={activeTitle === cat.title}
              >
                {activeTitle === cat.title && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 font-bold text-sm transition-colors ${
                    activeTitle === cat.title ? 'text-black' : 'text-white/60'
                  }`}
                >
                  {cat.title}
                </span>
              </button>
            ))}
          </div>
        )}
        </motion.div>

        <motion.div
          className="bg-white/5 rounded-3xl p-8 w-full max-w-3xl min-h-64 flex items-center justify-center max-sm:p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTitle}
              className="flex flex-wrap justify-center gap-4"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {(activeCategory?.items ?? []).map((item) => {
                const iconSrc = skillIcons[item.icon];
                if (!iconSrc) return null;
                return (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Skill name={item.name} icon={iconSrc} />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default Skills;
