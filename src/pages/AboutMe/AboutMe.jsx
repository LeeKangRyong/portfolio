import './AboutMe.css';
import face from '../../assets/face.jpg';
import gamja from '../../assets/gamza_gif.gif';
import { motion } from 'framer-motion';

function AboutMe() {
    const textContent = "서비스를 만드는 프론트엔드 개발자, 이강룡 입니다. (2002.02.03, 24살)";
    
    return (
        <motion.article 
            className="aboutMeContainer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
        >
            <motion.h1 
                className="aboutTitle"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
            >
                About Me
            </motion.h1>
            
            <div className="aboutMe">
                <motion.div 
                    className="aboutMeTextWrapper"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ amount: 0.3 }}
                >
                    <div className="aboutMeText">
                        <motion.p
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.6 }}
                            viewport={{ amount: 0.3 }}
                        >
                            단순 개발이 아닌, 서비스 개발 전체 흐름에 맞추어 개발하는 것을 좋아합니다.
                        </motion.p>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.3, duration: 0.6 }}
                            viewport={{ amount: 0.3 }}
                        >
                            다양한 사람들과 소통하며 사용자에게 가장 가까이 다가가 서비스를 제공한다는 점에서
                        </motion.p>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.6, duration: 0.6 }}
                            viewport={{ amount: 0.3 }}
                        >
                            프론트엔드를 깊이 파고들기로 결정하였습니다.
                        </motion.p>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.9, duration: 0.6 }}
                            viewport={{ amount: 0.3 }}
                        >
                            서비스의 도메인, 사용자 등을 고려하여 어울리는 기술스택을 탐구하고 사용하는 것을 지향합니다.
                        </motion.p>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="profileImageContainer"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ amount: 0.3 }}
                >
                    <motion.img 
                        className="face" 
                        src={face} 
                        alt="증명사진"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                        whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
                        viewport={{ amount: 0.3 }}
                    />
                </motion.div>
            </div>

            <motion.div 
                className="contactAndGamja"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ amount: 0.3 }}
            >
                <motion.div 
                    className="contact"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ amount: 0.3 }}
                >
                    <motion.div 
                        className="contactText"
                        whileHover={{ scale: 1.05, x: 10 }}
                        transition={{ duration: 0.1 }}
                    >
                        <span className="contactLabel">Contact)</span> gaiogo2@naver.com
                    </motion.div>
                    <motion.div 
                        className="contactText"
                        whileHover={{ scale: 1.05, x: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="contactLabel">Github)</span> gaiogo2@naver.com
                    </motion.div>
                    <motion.div 
                        className="contactText"
                        whileHover={{ scale: 1.05, x: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="contactLabel">Notion)</span> gaiogo2@naver.com
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="gamjaWrapper"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ amount: 0.3 }}
                >
                    <motion.div 
                        className="gamjaContainer"
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                    >
                        <motion.img 
                            className="gamja" 
                            src={gamja} 
                            alt="감자"
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        />
                    </motion.div>
                    <motion.p 
                        className="gamjaText"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.4 }}
                        viewport={{ amount: 0.3 }}
                    >
                        집에서 키우는 거북이, 감자 입니다
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.article>
    );
}

export default AboutMe;