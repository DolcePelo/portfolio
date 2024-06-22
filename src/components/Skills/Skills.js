import "./Skills.css";
import htmlLogo from "../../assets/logo-html.png";
import cssLogo from "../../assets/logo-css.png";
import gitLogo from "../../assets/logo-git.png";
import sassLogo from "../../assets/logo-sass.png";
import githubLogo from "../../assets/logo-github.png";
import javascriptLogo from "../../assets/logo-javascript.png";
import bootstrapLogo from "../../assets/logo-bootstrap.png";
import tailwindLogo from "../../assets/logo-tailwind.png";
import reactLogo from "../../assets/logo-react.png";
import firebaseLogo from "../../assets/logo-firebase.png";
import nodejsLogo from "../../assets/logo-nodejs.png";
import websocketLogo from "../../assets/logo-websocket.png";
import handlebarsLogo from "../../assets/logo-handlebars.png";
import mongodbLogo from "../../assets/logo-mongodb.png";
import swaggerLogo from "../../assets/logo-swagger.png";
import mochaLogo from "../../assets/logo-mocha.png";

function Skills() {
    const skills = [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'Git', logo: gitLogo },
        { name: 'Sass', logo: sassLogo },
        { name: 'GitHub', logo: githubLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'Bootstrap', logo: bootstrapLogo },
        { name: 'Tailwind', logo: tailwindLogo },
        { name: 'React', logo: reactLogo },
        { name: 'Firebase', logo: firebaseLogo },
        { name: 'Node.js', logo: nodejsLogo },
        { name: 'WebSocket', logo: websocketLogo },
        { name: 'Handlebars', logo: handlebarsLogo },
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'Swagger', logo: swaggerLogo },
        { name: 'Mocha', logo: mochaLogo },
    ]

    const extendedSkills = [...skills, ...skills];
    return (
        <div className="skills-container">
            <div className="skills-divider"></div>
            <div className="skills-title_container">
                <div className="skills-title_items">
                    <span className="line"></span>
                    <span className="skills-title">Skills</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="marquee-container">
                <div className="marquee">
                    {extendedSkills.map((skill, index) => (
                        <div className="marquee-item" key={index}>
                            <div className="skill-card">
                                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;