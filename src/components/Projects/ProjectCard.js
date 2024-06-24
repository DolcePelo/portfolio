import "./ProjectCard.css";

function ProjectCard({ title, description, technologies }) {
    return (
        <div className={"project-card"}>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;