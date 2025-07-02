import './skills.css';
import { useState, useEffect } from 'react';
import SkillDetail from '../components/SkillDetail';
import larrow from '../assets/skills/larrow.png';
import rarrow from '../assets/skills/rarrow.png';

function Skills() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [skillIcons, setSkillIcons] = useState({});

    useEffect(() => {
        const loadIcons = async () => {
            const iconModules = import.meta.glob('../assets/skills/*.png', { eager: true });
            
            const icons = {};
            Object.entries(iconModules).forEach(([path, module]) => {
                const iconName = path.split('/').pop().replace('.png', '');
                icons[iconName] = module.default;
            });
            
            setSkillIcons(icons);
        };

        loadIcons();
    }, []);

    const skills = [
        {
            title: 'FE',
            names: [
                'React', `React\nNative`, 'Flutter', 'Zustand',
                `Java\nScript`, 'HTML', 'CSS'
            ],
            descriptions: [
                'UI 라이브러리로 컴포넌트 기반 개발',
                '모바일 앱 개발 프레임워크',
                '크로스 플랫폼 모바일 앱 개발',
                'React 상태 관리 라이브러리',
                '웹 개발의 핵심 프로그래밍 언어',
                '웹 페이지 구조를 만드는 마크업 언어',
                '웹 페이지 스타일링 언어'
            ],
            icons: [
                'react', 'react', 'flutter', 'zustand',
                'js', 'html', 'css'
            ]
        },
        {
            title: 'BE',
            names: [
                'Node.js', 'MySQL', 'Prisma'
            ],
            descriptions: [
                'JavaScript 기반 서버 사이드 런타임',
                '관계형 데이터베이스 관리 시스템',
                'TypeScript 기반 ORM 도구'
            ],
            icons: [
                'nodejs', 'mysql', 'prisma'
            ]
        },
        {
            title: 'ETC',
            names: [
                'Python', 'AI', 'Notion', 'Figma', 'Git\nGithub',
                'AWS', 'Docker', `Github\nActions`
            ],
            descriptions: [
                '데이터 분석 및 AI 개발 언어',
                '머신러닝 및 딥러닝 기술',
                '협업 및 문서화 도구',
                'UI/UX 디자인 도구',
                '버전 관리 시스템',
                '클라우드 서비스 플랫폼',
                '컨테이너화 플랫폼',
                'CI/CD 자동화 도구'
            ],
            icons: [
                'python', 'ai', 'notion', 'figma', 'github',
                'aws', 'docker', 'github'
            ]
        }
    ];

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
                    
                    <div className='skillsSlider' style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}>
                        {skills.map((skill, index) => (
                            <div key={index} className='skillCategory'>
                                <h2 className='categoryTitle'>{skill.title}</h2>
                                <div className='skillsGrid'>
                                    {skill.names.map((name, skillIndex) => (
                                        <SkillDetail 
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
}

export default Skills;