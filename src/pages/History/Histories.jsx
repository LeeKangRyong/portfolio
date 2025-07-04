import './Histories.css';
import History from '../../components/History/History';
import { motion } from 'framer-motion';

function Histories() {
    const historyData = [
        {
            title: "숭실대학교",
            duration: "2020.03 ~ 현재",
            description: "숭실대학교 IT대학 AI융합학부 (20, 4학년)",
            direction: 'left',
            delay: 0
        },
        {
            title: "LG AIMERS 4기",
            duration: "2024.01 ~ 2024.02", 
            description: "ML 교육 및 MQL 고객 기반 B2B 영업 예측 해커톤 수료\n데이터 EDA 및 전처리 담당",
            direction: 'right',
            delay: 0.2
        },
        {
            title: "프로메테우스 6기",
            duration: "2024.09 ~ 현재",
            description: "인공지능 기반 서비스 개발 동아리 6기 부원",
            direction: 'left', 
            delay: 0.4
        },
        {
            title: "SKT FLY AI CHALLENGERS 6기",
            duration: "2024.12 ~ 2025.02",
            description: "AI(ML/DL/LLM/OpenCV 등) 부트캠프 수료\nESG 및 창업 기반 Flutter를 통한 AI 어플리케이션 제작",
            direction: 'right',
            delay: 0.6
        }
    ];

    return (
        <motion.article 
            className="historyContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1 
                className="historyTitle"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                History
            </motion.h1>
            
            <div className="historyWrapper">
                {historyData.map((history, index) => (
                    <motion.div
                        key={index}
                        initial={{ 
                            x: history.direction === 'left' ? -100 : 100, 
                            opacity: 0,
                            scale: 0.8 
                        }}
                        whileInView={{ 
                            x: 0, 
                            opacity: 1,
                            scale: 1 
                        }}
                        transition={{ 
                            duration: 0.8, 
                            delay: history.delay,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 100
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.3 }
                        }}
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
}

export default Histories;