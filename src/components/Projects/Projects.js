import "./Projects.css";
import ProjectCard from "./ProjectCard.js";
import backgroundImage1 from "../../assets/project1-img1.png";
import backgroundImage2 from "../../assets/project2-img1.png";
import backgroundImage3 from "../../assets/project3-img1.png";
import backgroundImage4 from "../../assets/project4-img1.png";
import backgroundImage5 from "../../assets/project4-img2.png";
import backgroundImage6 from "../../assets/project3-img2.png";
import backgroundImage7 from "../../assets/project5-img1.png";
import backgroundImage8 from "../../assets/project5-img2.png";
import backgroundImage9 from "../../assets/project6-img1.png";
import backgroundImage10 from "../../assets/project6-img2.png";

const projectData = [
    {
        title: "Cool Ecommerce",
        description: "E-commerce for women's clothing from end to end, with user login via Passport and a payment gateway connected to the database.",
        technologies: ["Javascript", "Handlebars", "NodeJS", "MongoDB"],
        imageUrl: backgroundImage1,
    },
    {
        title: "Cool E-commerce",
        description: "",
        technologies: ["Javascript", "Handlebars", "NodeJS", "MongoDB"],
        imageUrl: backgroundImage2,
    },
    {
        title: "Cool E-commerce Admin Page",
        description: "Website for managing the e-commerce, applying the CRUD method to create, read, update, and delete various types of collections. Administrative user login is handled via Passport.",
        technologies: ["Javascript", "Websocket", "NodeJS", "MongoDB", "Handlebars"],
        imageUrl: backgroundImage4
    },
    {
        title: "Cool E-commerce Admin Page",
        description: "",
        technologies: ["Javascript", "Websocket", "NodeJS", "MongoDB", "Handlebars"],
        imageUrl: backgroundImage5
    },
    {
        title: "Business Consultant Website",
        description: "Business Consultant Services and Contact WebsiteBusiness Consultant Contact Website with Form Submission, Service Presentation, and Quotation",
        technologies: ["Javascript", "SCSS", "HTML"],
        imageUrl: backgroundImage3,
    },
    {
        title: "Business Consultant Website",
        description: "",
        technologies: ["Javascript", "SCSS", "HTML"],
        imageUrl: backgroundImage6,
    },
    {
        title: "Book-shop E-commerce",
        description: "",
        technologies: ["ReactJS", "CSS"],
        imageUrl: backgroundImage7,
    },
    {
        title: "Book-shop E-commerce",
        description: "",
        technologies: ["ReactJS", "CSS"],
        imageUrl: backgroundImage8,
    },
    {
        title: "Finalissima Football Bar Website",
        description: "A Football bar website featuring a menu of food and drinks",
        technologies: ["HTML", "SCSS", "Javascript"],
        imageUrl: backgroundImage9,
    },
    {
        title: "Finalissima Football Bar Website",
        description: "A Football bar website featuring a menu of food and drinks",
        technologies: ["HTML", "SCSS", "Javascript"],
        imageUrl: backgroundImage10,
    },
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