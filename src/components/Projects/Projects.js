import "./Projects.css";
import ProjectCard from "./ProjectCard.js";
import projectData from "./ProjectData.js";

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-divider"></div>
            <div className="projects-title_container">
                <div className="projects-title_items">
                    <span className="line"></span>
                    <span className="projects-title">Projects</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="projects-cards-container">
                {projectData.map((project, index) => (
                    <div key={index} className={`project-img-card-container ${index % 2 === 0 ? "left" : "right"}`}>
                        <img src={project.imageUrl} className="backgroundImage" alt={`Project ${index + 1}`} />
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            github={project.github}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;