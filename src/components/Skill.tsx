import { motion } from 'framer-motion';
import type { SkillProps } from '@/types';

function Skill({ icon, name, description }: SkillProps) {
  return (
    <motion.article
      className="flex flex-row items-center gap-4 w-full max-w-[21.875rem] max-lg:max-w-96 max-md:max-w-72 max-md:gap-3 max-md:py-2 max-sm:max-w-64 max-sm:gap-2.5 max-sm:py-1.5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ amount: 0.3 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3, type: 'spring', stiffness: 300 },
      }}
    >
      <motion.div
        className="flex flex-col items-center justify-center shrink-0 min-w-[4.375rem] max-lg:min-w-[4.5rem] max-md:min-w-14 max-sm:min-w-12"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        <motion.img
          className="w-11 h-11 object-cover mb-1.5 max-lg:w-10 max-lg:h-10 max-lg:mb-0 max-md:w-8 max-md:h-8 max-md:mb-1 max-sm:w-7 max-sm:h-7 max-sm:mb-1"
          src={icon}
          alt={`${name} icon`}
          whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
        />
        <p className="whitespace-pre-line text-center text-white text-sm font-medium m-0 leading-tight max-lg:text-xs max-md:text-[0.7rem] max-sm:text-[0.65rem]">
          {name}
        </p>
      </motion.div>
      <motion.div
        className="bg-white rounded-2xl p-3.5 flex-1 min-w-44 max-lg:p-3 max-lg:min-w-[10.5rem] max-lg:rounded-2xl max-md:p-2.5 max-md:min-w-36 max-md:rounded-xl max-sm:p-2 max-sm:min-w-32 max-sm:rounded-lg"
        whileHover={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          transition: { duration: 0.3 },
        }}
      >
        <p className="text-black m-0 text-xs leading-snug whitespace-pre-line text-center max-lg:text-[0.75rem] max-md:text-[0.65rem] max-sm:text-[0.6rem]">
          {description}
        </p>
      </motion.div>
    </motion.article>
  );
}

export default Skill;
