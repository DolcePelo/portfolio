import "./Projects.css";
import ProjectCard from "./ProjectCard.js";
import backgroundImage1 from "../../assets/project1-img1.png";
import backgroundImage2 from "../../assets/project2-img1.png";
import backgroundImage3 from "../../assets/project3-img1.png";

const projectData = [
    {
        title: "Coffee Shop",
        description: "A weekend project using OpenAi's image and text generation tools to create a completely prompted coffee shop website.",
        technologies: ["Typescript", "Next.js", "SCSS"],
        imageUrl: backgroundImage1,
    },
    {
        title: "Another Project",
        description: "Description of another project goes here.",
        technologies: ["React", "Node.js", "CSS"],
        imageUrl: backgroundImage2,
    },
    {
        title: "Another Project",
        description: "Description of another project goes here.",
        technologies: ["React", "Node.js", "CSS"],
        imageUrl: backgroundImage3,
    }
];

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
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;