import { useState } from 'react';
import Skill from '@/components/Skill';
import larrow from '@/assets/skills/larrow.png';
import rarrow from '@/assets/skills/rarrow.png';
import useAssets from '@/hooks/useAssets';
import skills from '@/data/skillData';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { assets: skillIcons } = useAssets('skills');

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex === skills.length - 1;

  return (
    <article className="w-full max-w-[75rem] mx-auto px-8 box-border max-lg:px-6 max-md:px-4 max-sm:px-2">
      <h1 className="text-7xl font-bold mb-12 text-center text-white mt-0 max-lg:text-5xl max-md:text-4xl max-md:mb-8 max-sm:text-3xl max-sm:mb-6">
        Skills & Tools
      </h1>
      <p className="text-base text-center mb-5">
        마우스를 올려서 나머지 기술들도 확인해보세요!
      </p>

      <div className="flex items-center justify-center w-full mb-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-400/50 border border-white/20 min-h-[28.125rem] w-[70%] h-[40vh] group hover:scale-105 transition-all duration-300 max-lg:min-h-[32rem] max-lg:w-[85%] max-md:min-h-[42rem] max-md:w-[95%] max-md:h-auto max-sm:min-h-[31.25rem] max-sm:w-[95%]">
          {!isFirstPage && (
            <img
              src={larrow}
              alt="leftArrow"
              className="absolute top-1/2 left-5 -translate-y-1/2 cursor-pointer transition-all duration-400 z-10 opacity-0 invisible w-10 h-10 object-contain group-hover:opacity-100 group-hover:visible hover:scale-110 max-lg:w-9 max-lg:h-9 max-lg:left-4 max-md:w-8 max-md:h-8 max-md:left-2.5 max-sm:w-6 max-sm:h-6 max-sm:left-2"
              onClick={goToPrevious}
              aria-label="Previous skill category"
            />
          )}

          {!isLastPage && (
            <img
              src={rarrow}
              alt="rightArrow"
              className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer transition-all duration-400 z-10 opacity-0 invisible w-10 h-10 object-contain group-hover:opacity-100 group-hover:visible hover:scale-110 max-lg:w-9 max-lg:h-9 max-lg:right-4 max-md:w-8 max-md:h-8 max-md:right-2.5 max-sm:w-6 max-sm:h-6 max-sm:right-2"
              onClick={goToNext}
              aria-label="Next skill category"
            />
          )}

          <div
            className="flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] h-full w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {skills.map((category) => (
              <div
                key={category.title}
                className="w-full h-full flex flex-col items-center justify-start shrink-0 py-2 px-6 pb-6 box-border max-lg:px-4 max-md:py-2 max-md:px-2 max-md:pb-6 max-sm:p-4"
              >
                <h2 className="text-4xl font-bold text-white mb-1.5 text-center max-lg:text-3xl max-lg:mb-2 max-md:text-3xl max-md:mb-2">
                  {category.title}
                </h2>
                <div className="grid grid-cols-2 grid-rows-4 gap-x-6 gap-y-4 w-full max-w-[37.5rem] mx-auto justify-items-center items-center flex-1 content-center auto-cols-auto [grid-auto-flow:column] max-lg:gap-x-7 max-lg:gap-y-5 max-lg:max-w-[35rem] max-md:grid-cols-1 max-md:grid-rows-[repeat(8,auto)] max-md:[grid-auto-flow:row] max-md:gap-4 max-md:max-w-80 max-sm:gap-3 max-sm:max-w-[17.5rem]">
                  {category.items.map((item) => {
                    const iconSrc = skillIcons[item.icon];
                    if (!iconSrc) return null;
                    return (
                      <Skill
                        key={item.name}
                        name={item.name}
                        description={item.description}
                        icon={iconSrc}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;
