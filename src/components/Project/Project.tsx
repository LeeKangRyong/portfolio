import './Project.css';
import Stack from './Stack';
import github from '../../assets/skills/github.png';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import useHover from '../../hooks/useHover';

interface ProjectProps {
    titleImg: string;
    title: string;
    description: string;
    member: string;
    role: string;
    duration: string;
    stacks: string[];
    githubLink: string;
    resultImg: string[];
    arcImg: string;
    faqData: Array<{ question: string; answer: string }>;
    topcolor: string;
}

const Project = ({ 
    titleImg, 
    title, 
    description, 
    member, 
    role, 
    duration, 
    stacks, 
    githubLink,
    resultImg,
    arcImg,
    faqData,
    topcolor
}: ProjectProps) => {
    const { modal, handleModal } = useModal();
    const { hover, onHover, notOnHover } = useHover();

    const linkToProject = () => {
        handleModal();
    };

    const linkToGithub = () => {
        window.open(githubLink, '_blank');
    };

    const Detail = () => {
        return (
            <button onClick={linkToProject} className="detail">상세 보기</button>
        );
    };

    return (
        <article className="projectContainer">
            <div className="projectImageWrapper" onMouseOver={onHover} onMouseLeave={notOnHover}>
                <img className="projectImage" src={titleImg} alt="image" />
                {hover && <Detail />}
            </div>
            <div className="projectDescWrapper">
                <div className="project1">
                    <div className="project1Wrapper">
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                    <div className="projectGithubWrapper">
                        <img className="projectGithub" src={github} alt="github" onClick={linkToGithub} />
                    </div>
                </div>
                <div className="project2">
                    <p>팀원 : {member}</p>
                    <p>역할 : {role}</p>
                </div>
                <div className="project3">
                    <p>개발 기간</p>
                    <p>{duration}</p>
                </div>
                <div className="project4">
                    <p>Stack</p>
                    <div className="stacksContainer">
                        {stacks.map((stack, index) => (
                            <Stack key={index} stack={stack} />
                        ))}
                    </div>
                </div>
            </div>
            {modal && (
                <Modal 
                    setModal={handleModal}
                    title={title} 
                    duration={duration}
                    resultImg={resultImg}
                    arcImg={arcImg}
                    faqData={faqData}
                    topcolor={topcolor}
                />
            )}
        </article>
    );
};

export default Project;