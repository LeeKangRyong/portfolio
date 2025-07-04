import './Projects.css';
import ProjectDetail from '../../components/Project/Project'; 
import useAssets from '../../hooks/useAssets';

import projects from './projectData';

function Projects() {
    const { assets: projectImages } = useAssets('projects');

    return (
        <article className="projectsContainer">
            <h1 className="projectsTitle">Projects</h1>
            <div className="projectsList">
                {projects.map((project) => (
                    <ProjectDetail 
                        key={project.id}
                        titleImg={projectImages[project.titleImg]}
                        title={project.title}
                        description={project.description}
                        member={project.member}
                        role={project.role}
                        duration={project.duration}
                        stacks={project.stacks}
                        githubLink={project.githubLink}
                        resultImg={project.resultImg}
                        arcImg={project.arcImg}
                        faqData={project.faqData}
                        topcolor={project.topcolor}
                    />
                ))}
            </div>
        </article>
    );
};

export default Projects;