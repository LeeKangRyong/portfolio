import face from '../assets/face.jpg';
import { motion } from 'framer-motion';
import aboutTexts from '../data/aboutData';

function AboutMe() {
  return (
    <motion.article
      className="w-full max-w-350 mx-auto px-8 box-border max-lg:px-6 max-md:px-4 max-sm:px-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.3 }}
    >
      <motion.h1
        className="text-7xl font-bold mb-12 text-center text-white ml-0 max-lg:text-5xl max-md:text-4xl max-md:mb-8 max-sm:text-3xl max-sm:mb-6"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-row justify-between items-start gap-12 w-full mb-16 max-lg:flex-col max-lg:items-center max-lg:gap-8 max-lg:mb-12 max-md:gap-6 max-md:mb-8 max-sm:gap-4 max-sm:mb-6">
        <motion.div
          className="flex-1 min-w-0 bg-gray-400/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-500/50 max-lg:w-full max-lg:max-w-150 max-lg:p-7 max-md:w-87.5 max-md:p-5 max-sm:w-75 max-sm:p-4"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="text-xl text-white text-center leading-relaxed max-lg:text-lg max-md:text-base max-sm:text-base">
            {aboutTexts.map((text, index) => (
              <motion.p
                key={index}
                className="my-5 break-keep max-md:my-4 max-sm:my-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.3 }}
                viewport={{ amount: 0.3 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="shrink-0 flex flex-col items-center gap-2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          <img
            className="w-64 h-72 object-cover rounded-3xl bg-white p-4 box-border shadow-xl max-lg:w-56 max-lg:h-64 max-md:w-44 max-md:h-56 max-md:p-2.5 max-sm:w-40 max-sm:h-52 max-sm:p-2"
            src={face}
            alt="증명사진"
          />
          <motion.p
            className="text-white/70 text-m text-center tracking-widest max-md:text-xs"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ amount: 0.3 }}
          >
            2002.02.03 년생
          </motion.p>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default AboutMe;
