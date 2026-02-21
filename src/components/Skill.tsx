import { motion } from 'framer-motion';
import type { SkillProps } from '@/types';

function Skill({ icon, name }: SkillProps) {
  const textSizeClass = name.includes('\n') ? 'text-xs' : 'text-sm';

  return (
    <motion.article
      className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 w-24 h-24 cursor-default"
      initial={{ opacity: 0, y: 20, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -8,
        scale: 1.1,
        boxShadow: '0 8px 30px rgba(255,255,255,0.15)',
        transition: { type: 'spring', stiffness: 350, damping: 20 },
      }}
    >
      <motion.img
        className="w-14 h-14 object-contain"
        src={icon}
        alt={`${name} icon`}
        animate={{ rotate: 0 }}
        whileHover={{ rotate: [0, -12, 12, 0], transition: { duration: 0.5 } }}
      />
      <p className={`whitespace-pre-line text-center text-white ${textSizeClass} font-semibold mt-2 leading-tight m-0`}>
        {name}
      </p>
    </motion.article>
  );
}

export default Skill;
