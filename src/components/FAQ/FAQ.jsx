import './FAQ.css';
import { useState } from 'react';
import arrowIcon from '../../assets/toggle.png';

function FAQ({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faqBox">
            <div className="faqQuestion" onClick={toggleFAQ}>
                <img s
                    className={`faqArrow ${isOpen ? 'open' : ''}`}
                    src={arrowIcon} 
                    alt="toggle arrow"
                />
                <h4>{question}</h4>
            </div>
            <div className={`faqAnswer ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default FAQ;