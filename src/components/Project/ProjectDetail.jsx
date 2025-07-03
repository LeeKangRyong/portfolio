import './ProjectDetail.css';
import Stack from './Stack';
import github from '../../assets/skills/github.png';

function ProjectDetail({ imgUrl, title, description, member, role, duration, stacks, notionLink, githubLink }) {
    const linkToProject = () => {
        // 노션 페이지 조그맣게 띄우기 (width: 70%의 모달 형태로)
        console.log(notionLink);
    };

    const linkToGithub = () => {
        // 깃허브 페이지 새로 띄워주기
        console.log(githubLink);
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
        </article>
    );
};

export default ProjectDetail;