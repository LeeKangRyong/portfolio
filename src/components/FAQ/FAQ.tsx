import './FAQ.css';
import { useState } from 'react';
import arrowIcon from '@/assets/toggle.png';
import type { FAQProps } from '@/types';

const FAQ = ({ question, answer }: FAQProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faqBox">
      <div className="faqQuestion" onClick={toggleFAQ}>
        <img
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
};

export default FAQ;
