import './Skill.css';
import { motion } from 'framer-motion';

function Skill({ icon, name, description }) {
    return (
        <motion.article 
            className="skillDetailContainer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
                duration: 0.6,
                ease: "easeOut"
            }}
            viewport={{ amount: 0.3 }}
            whileHover={{
                scale: 1.05,
                y: -8,
                transition: { 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300
                }
            }}
        >
            <motion.div 
                className="skillWrapper"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                }}
            >
                <motion.img 
                    className="skillIcon" 
                    src={icon} 
                    alt="icon"
                    whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.4 }
                    }}
                />
                <p className="skillName">{name}</p>
            </motion.div>
            <motion.div 
                className="skillDescWrapper"
                whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                }}
            >
                <p className="skillDescription">{description}</p>
            </motion.div>
        </motion.article>
    );
}

export default Skill;