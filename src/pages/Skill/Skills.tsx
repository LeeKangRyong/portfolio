import './Skills.css';
import { useState } from 'react';
import Skill from '../../components/Skill/Skill';
import larrow from '../../assets/skills/larrow.png';
import rarrow from '../../assets/skills/rarrow.png';
import useAssets from '../../hooks/useAssets';
import skills from '../../data/skillData';

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { assets: skillIcons } = useAssets('skills');

    const goToPrevious = () => {
        setCurrentIndex(prev => prev - 1);
    };

    const goToNext = () => {
        setCurrentIndex(prev => prev + 1);
    };

    const isFirstPage = currentIndex === 0;
    const isLastPage = currentIndex === skills.length - 1;

    return (
        <article className='skillsContainer'>
            <h1 className='skillsTitle'>Skills & Tools</h1>
            <p className="skillsTitleDesc">마우스를 올려서 나머지 기술들도 확인해보세요!</p>
            
            <div className='skillsWrapper'>
                <div className='skillsContent'>
                    {!isFirstPage && (
                        <img
                            src={larrow}
                            alt="leftArrow"
                            className="leftArrow" 
                            onClick={goToPrevious}
                            aria-label="Previous skill category"
                        />
                    )}
                    
                    {!isLastPage && (
                        <img
                            src={rarrow}
                            alt="rightArrow"
                            className="rightArrow" 
                            onClick={goToNext}
                            aria-label="Next skill category"
                        />
                    )}
                    
                    <div className='skillsSlider' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {skills.map((skill, index) => (
                            <div key={index} className='skillCategory'>
                                <h2 className='categoryTitle'>{skill.title}</h2>
                                <div className='skillsGrid'>
                                    {skill.names.map((name, skillIndex) => (
                                        <Skill 
                                            key={skillIndex}
                                            name={name}
                                            description={skill.descriptions[skillIndex]}
                                            icon={skillIcons[skill.icons[skillIndex]]}
                                        />
                                    ))}
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