import './Projects.css';
import ProjectDetail from '../../components/Project/Project'; 
import useAssets from '../../hooks/useAssets';
import { motion } from 'framer-motion';
import projects from '../../data/projectData';

function Projects() {
    const { assets: projectImages } = useAssets('projects');

    return (
        <motion.article 
            className="projectsContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1 
                className="projectsTitle"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Projects
            </motion.h1>
            
            <motion.div 
                className="projectsList"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: index * 0.2,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <ProjectDetail 
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
                    </motion.div>
                ))}
            </motion.div>
        </motion.article>
    );
}

export default Projects;