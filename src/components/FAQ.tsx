import { useState } from 'react';
import arrowIcon from '@/assets/toggle.png';
import type { FAQProps } from '@/types';

const FAQ = ({ question, answer }: FAQProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:shadow-md last:mb-0 max-md:mb-3 max-md:rounded-md max-sm:mb-2.5 max-sm:rounded">
      <div
        className="flex justify-start items-center py-4 px-5 cursor-pointer bg-gray-100 transition-colors duration-200 gap-3 hover:bg-gray-200 max-md:py-3 max-md:px-4 max-md:gap-2 max-sm:py-2.5 max-sm:px-3.5 max-sm:gap-1.5"
        onClick={toggleFAQ}
      >
        <img
          className={`w-3 h-3 transition-transform duration-300 select-none shrink-0 opacity-70 max-md:w-2.5 max-md:h-2.5 max-sm:w-2 max-sm:h-2 ${isOpen ? 'rotate-90' : ''}`}
          src={arrowIcon}
          alt="toggle arrow"
        />
        <h4 className="text-gray-800 text-lg font-semibold m-0 flex-1 max-md:text-base max-sm:text-sm">
          {question}
        </h4>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 bg-white ${isOpen ? 'max-h-52 py-4 px-5 max-md:max-h-44 max-md:py-3 max-md:px-4 max-sm:max-h-36 max-sm:py-2.5 max-sm:px-3.5' : 'max-h-0'}`}
      >
        <p className="text-gray-600 text-base leading-relaxed m-0 max-md:text-sm max-sm:text-xs">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQ;
