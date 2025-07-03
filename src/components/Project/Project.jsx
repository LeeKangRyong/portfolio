import './Project.css';
import Stack from './Stack';
import github from '../../assets/skills/github.png';
import useModal from '../../hooks/useModal';
import Modal from './Modal';


function Project({ imgUrl, title, description, member, role, duration, stacks, githubLink }) {

    const [modal, setModal] = useModal();

    const linkToProject = () => {
        setModal();
    };

    const linkToGithub = () => {
        window.open(githubLink, '_blank');
    };


    return (
        <article className="projectContainer">
            <img className="projectImage" src={imgUrl} alt="image" onClick={linkToProject} />
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
            {modal && <Modal setModal={setModal} />}
        </article>
    );
};

export default Project;