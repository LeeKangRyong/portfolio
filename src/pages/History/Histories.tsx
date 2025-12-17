import './Histories.css';
import History from '../../components/History/History';
import { motion } from 'framer-motion';
import histories from '../../data/historyData';

const Histories = () => {
    return (
        <motion.article 
            className="historyContainer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
        >
            <motion.h1 
                className="historyTitle"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ amount: 0.2 }}
            >
                History
            </motion.h1>
            
            <div className="historyWrapper">
                {histories.map((history, index) => (
                    <motion.div
                        key={index}
                        initial={{ 
                            x: history.direction === 'left' ? -100 : 100, 
                            opacity: 0,
                            scale: 0.8 
                        }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.6, 
                            delay: history.delay,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 100
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