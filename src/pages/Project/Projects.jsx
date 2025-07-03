import './Projects.css';
import ProjectDetail from '../../components/Project/ProjectDetail';
import project2 from '../../assets/projects/encap.png';

function Projects() {
    const projects = [
        {
            "id": 1,
            "imgUrl": project2,
            "title": "Renew Wear",
            "description": "asd",
            "member": "BE(2명), FE(2명)",
            "role": "FE, 기획 (팀원)",
            "duration": "2024.03 ~ 2024.06",
            "stacks": [
                "React", "Java\nScript", "HTML", "CSS"
            ],
            "githubLink": "https://github.com/RenewWear/Front_Final",
            "notionLink": "https://quirky-streetcar-a17.notion.site/ReNew-Wear-225523184d3c807bb8a8c41f0b73cac6"
        },
        {
            "id": 2,
            "imgUrl": project2,
            "title": "Encap Moments",
            "description": "asd",
            "member": "BE(2명), FE(1명)",
            "role": "FE, 디자인, 기획 (조장)",
            "duration": "2025.03~2025.05",
            "stacks": [
                "React\nNative", "Java\nScript", "HTML", "CSS", "AWS", "NGINX", "pm2"
            ],
            "githubLink": "https://github.com/encapmoments",
            "notionLink": "https://quirky-streetcar-a17.notion.site/EncapMoments-225523184d3c80cf8432f944f9bf054f"
        },
        {
            "id": 3,
            "imgUrl": project2,
            "title": "포트폴리오",
            "description": "asd",
            "member": "개발(1명)",
            "role": "전체",
            "duration": "2025.06 ~ 2025.07 (2주)",
            "stacks": [
                "React", "Java\nScript", "HTML", "CSS", "Netlify"
            ],
            "githubLink": "https://github.com/LeeKangRyong/portfolio",
            "notionLink": "https://quirky-streetcar-a17.notion.site/225523184d3c809eb7f8ee2b26bc89b8?pvs=74"
        },
        {
            "id": 4,
            "imgUrl": project2,
            "title": "의료 AI agent",
            "description": "asd",
            "member": "AI(3명), 개발(1명), 디자인 및 기획(1명)",
            "role": "FE, BE (팀원)",
            "duration": "2025.05 ~ 2025.07",
            "stacks": [
                "React\nNative", "Java\nScript", "HTML", "CSS",
                "Node.js", "MySQL", "Prisma", "AWS", "NGINX", "pm2",
                "Github\nActions", "Ngrok", "Python", "FastAPI"
            ],
            "githubLink": "https://github.com/prome-individual",
            "notionLink": "https://quirky-streetcar-a17.notion.site/AI-Agent-225523184d3c804ba0c7e469c599803c"
        }
    ];
    console.log(projects);

    return (
        <article className="projectsContainer">
            <h1 className="projectsTitle">Projects</h1>
            <div className="projectsList">
                {projects.map((project) => (
                    <ProjectDetail 
                        key={project.id}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        description={project.description}
                        member={project.member}
                        role={project.role}
                        duration={project.duration}
                        stacks={project.stacks}
                        githubLink={project.githubLink}
                        notionLink={project.notionLink}
                    />
                ))}
            </div>
        </article>
    );
};

export default Projects;