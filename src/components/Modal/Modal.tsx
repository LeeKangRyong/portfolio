import './Modal.css';
import { useState } from 'react';
import useAssets from '../../hooks/useAssets';
import FAQ from '../FAQ/FAQ';
import Zoom from '../Zoom/Zoom';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQType {
    question: string;
    answer: string;
}

interface ZoomImageType {
    src: string;
    alt: string;
}

interface ModalProps {
    setModal: () => void;
    title: string;
    duration: string;
    resultImg: string[];
    arcImg: string;
    faqData: FAQType[];
    topcolor: string;
}

const Modal = ({ setModal, title, duration, resultImg, arcImg, faqData, topcolor }: ModalProps) => {
    const { assets: projects } = useAssets('projects');
    const [zoomImage, setZoomImage] = useState<ZoomImageType | null>(null);

    const handleImageClick = (imageSrc: string, altText: string) => {
        setZoomImage({ src: imageSrc, alt: altText });
    };

    const closeZoom = () => {
        setZoomImage(null);
    };

    return (
        <AnimatePresence>
            <motion.article 
                className="modalContaner" 
                onClick={setModal}
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.3 }}
            >
                <motion.div 
                    className="modalContentWrapper" 
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.3, rotate: -15, y: 100, opacity: 0, originX: 0.5, originY: 0.5 }}
                    animate={{ scale: 1, rotate: 0, y: 0, opacity: 1 }}
                    exit={{ scale: 0.3, rotate: 15, y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.6 }}
                >
                    <motion.div 
                        className="modalTop" 
                        style={{ backgroundColor: topcolor }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <motion.h2 
                            className="modalTopContentTitle"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        >
                            {title}
                        </motion.h2>
                        <motion.p 
                            className="modalTopContentDuration"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            {duration}
                        </motion.p>
                    </motion.div>
                    
                    <motion.div 
                        className="modalContent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <motion.h3 
                            className="modalContentResultTitle"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            프로젝트 결과물
                        </motion.h3>
                        
                        <motion.div 
                            className="modalContentResult"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            {resultImg && resultImg.map((imgKey, index) => (
                                <motion.img 
                                    key={index} 
                                    src={projects[imgKey]} 
                                    alt={`project result ${index + 1}`}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } }}
                                    onClick={() => handleImageClick(projects[imgKey], `project result ${index + 1}`)}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </motion.div>
                        
                        <motion.h3 
                            className="modalContentArcTitle"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                        >
                            Architecture
                        </motion.h3>
                        
                        <motion.div 
                            className="modalContentArc"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                        >
                            {arcImg && (
                                <motion.img 
                                    src={projects[arcImg]} 
                                    alt="project architecture"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.4 }}
                                    whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } }}
                                    onClick={() => handleImageClick(projects[arcImg], "project architecture")}
                                    style={{ cursor: 'pointer' }}
                                />
                            )}
                        </motion.div>
                        
                        <motion.h3 
                            className="modalContentFAQTitle"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.4 }}
                        >
                            FAQ
                        </motion.h3>
                        
                        <motion.div 
                            className="modalContentFAQ"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            {faqData && faqData.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
                                >
                                    <FAQ question={faq.question} answer={faq.answer} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
                {zoomImage && (
                    <Zoom imageSrc={zoomImage.src} altText={zoomImage.alt} onClose={closeZoom} />
                )}
            </motion.article>
        </AnimatePresence>
    );
};

export default Modal;