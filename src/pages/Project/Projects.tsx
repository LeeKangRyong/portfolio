import './Projects.css';
import ProjectDetail from '@/components/Project/Project';
import useAssets from '@/hooks/useAssets';
import { motion } from 'framer-motion';
import projects from '@/data/projectData';

const Projects = () => {
  const { assets: projectImages } = useAssets('projects');

  return (
    <article className="projectsContainer">
      <motion.h1
        className="projectsTitle"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      >
        Projects
      </motion.h1>

      <div className="projectsList">
        {projects.map((project) => {
          const titleImg = projectImages[project.titleImg];
          if (!titleImg) return null;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ amount: 0.2 }}
            >
              <ProjectDetail
                titleImg={titleImg}
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
            </motion.div>
          );
        })}
      </div>
    </article>
  );
};

export default Projects;
