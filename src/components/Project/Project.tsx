import './Project.css';
import Stack from './Stack';
import github from '@/assets/skills/github.png';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal/Modal';
import useHover from '@/hooks/useHover';
import type { ProjectProps } from '@/types';

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
  topcolor,
}: ProjectProps) => {
  const { isOpen, toggle } = useModal();
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();

  const handleGithubClick = () => {
    window.open(githubLink, '_blank');
  };

  return (
    <article className="projectContainer">
      <div
        className="projectImageWrapper"
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img className="projectImage" src={titleImg} alt={`${title} project`} />
        {isHovered && (
          <button onClick={toggle} className="detail">
            상세 보기
          </button>
        )}
      </div>
      <div className="projectDescWrapper">
        <div className="project1">
          <div className="project1Wrapper">
            <p>{title}</p>
            <p>{description}</p>
          </div>
          <div className="projectGithubWrapper">
            <img
              className="projectGithub"
              src={github}
              alt="github"
              onClick={handleGithubClick}
            />
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
            {stacks.map((stack) => (
              <Stack key={stack} stack={stack} />
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          onClose={toggle}
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
