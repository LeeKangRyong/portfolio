import face from '../assets/face.jpg';
import { motion } from 'framer-motion';

function AboutMe() {
  const textContent =
    '서비스를 만드는 프론트엔드 개발자, 이강룡 입니다. (2002.02.03, 24살)';

  return (
    <motion.article
      className="w-full max-w-[87.5rem] mx-auto px-8 box-border max-lg:px-6 max-md:px-4 max-sm:px-2"
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
          className="flex-1 min-w-0 bg-gray-400/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-500/50 max-lg:w-full max-lg:max-w-[37.5rem] max-lg:p-7 max-md:w-[21.875rem] max-md:p-5 max-sm:w-[18.75rem] max-sm:p-4"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="text-xl text-white text-center leading-relaxed max-lg:text-lg max-md:text-base max-sm:text-base">
            <motion.p
              className="my-5 break-keep max-md:my-4 max-sm:my-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              {textContent.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.02, duration: 0.1 }}
                  viewport={{ amount: 0.3 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>

            <motion.p
              className="my-5 break-keep max-md:my-4 max-sm:my-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              단순 개발이 아닌, 서비스 개발 전체 흐름에 맞추어 개발하는 것을
              좋아합니다.
            </motion.p>

            <motion.p
              className="my-5 break-keep max-md:my-4 max-sm:my-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              다양한 사람들과 소통하며 사용자에게 가장 가까이 다가가 서비스를
              제공한다는 점에서
            </motion.p>

            <motion.p
              className="my-5 break-keep max-md:my-4 max-sm:my-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              프론트엔드를 깊이 파고들기로 결정하였습니다.
            </motion.p>

            <motion.p
              className="my-5 break-keep max-md:my-4 max-sm:my-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              서비스의 도메인, 사용자 등을 고려하여 어울리는 기술스택을 탐구하고
              사용하는 것을 지향합니다.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="shrink-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          <motion.img
            className="w-64 h-72 object-cover rounded-3xl bg-white p-4 box-border shadow-xl max-lg:w-56 max-lg:h-64 max-md:w-44 max-md:h-56 max-md:p-2.5 max-sm:w-40 max-sm:h-52 max-sm:p-2"
            src={face}
            alt="증명사진"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
            viewport={{ amount: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.article>
  );
}

export default AboutMe;
