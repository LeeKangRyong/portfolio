import History from '@/components/History';
import { motion } from 'framer-motion';
import histories from '@/data/historyData';

const Histories = () => {
  return (
    <motion.article
      className="w-full max-w-[75rem] mx-auto px-8 box-border max-lg:px-6 max-md:px-4 max-sm:px-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
    >
      <motion.h1
        className="text-7xl font-bold mb-12 text-center text-white mt-0 ml-0 max-lg:text-5xl max-md:text-4xl max-md:mb-8 max-sm:text-3xl max-sm:mb-6"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.2 }}
      >
        History
      </motion.h1>

      <div className="w-full flex flex-col gap-0">
        {histories.map((history) => (
          <motion.div
            key={history.title}
            initial={{
              x: history.direction === 'left' ? -100 : 100,
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: history.delay,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 100,
            }}
            viewport={{ amount: 0.3 }}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
          >
            <History
              title={history.title}
              duration={history.duration}
              description={history.description}
            />
          </motion.div>
        ))}
      </div>
    </motion.article>
  );
};

export default Histories;
