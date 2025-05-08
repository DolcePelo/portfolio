import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, technologies, github }) {
    return (
        <div className="project-card">
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech">{tech}</span>
                    ))}
                </div>
                {github && (
                    <div className="project-links">
                        <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
                            <FaGithub /> View on GitHub
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
