import "./AboutMe.css";
import profileImage from "../../assets/profile-image.jpg";

function AboutMe() {
    const languages = [
        { name: "Spanish", level: 5 },
        { name: "English", level: 4 },
        { name: "Italian", level: 4 },
        { name: "Portuguese", level: 1 },
    ];

    const generateLevelPoints = (level) => {
        let points = [];
        const maxLevel = 5;
        for (let i = 0; i < level; i++) {
            if (i < level) {
                points.push(<span key={i} className="language-level-point filled"></span>)
            } else {
                points.push(<span key={i} className="language-level-point"></span>)
            }
        }

        for (let i = level; i < maxLevel; i++) {
            points.push(<span key={i} className="language-level-point"></span>);
        }
        return points;
    };

    return (
        <div className="about-me-container">
            <div className="about-me-divider"></div>
            <div className="about-me-title_container">
                <div className="about-me-title_items">
                    <span className="line"></span>
                    <span className="about-me-title">About Me</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="about-me-card">
                <h1>Marketing Graduate & Full Stack Web Developer
                </h1>
                <p>I'm Alejandro Pelozatto, a marketing graduate with a passion for web development. I specialize in front-end development, using HTML, CSS, JavaScript, and React.js to create dynamic web experiences. Additionally, I have strong backend development skills with Node.js, Express, and MongoDB. <br />
                    I am seeking opportunities to leverage my skills in both frontend and backend development to contribute to innovative projects, combining marketing insight with technical expertise to create impactful web applications.</p>
                <div className="about-me-languages-container">
                    <div className="about-me-languages">
                        <h2>Languages:</h2>
                        <ul className="languages-list">
                            {languages.map((language, index) => (
                                <li key={index}>
                                    <span className="language-name">{language.name}</span>
                                    <div className="language-level">
                                        {generateLevelPoints(language.level)}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="profile-image-container">
                        <img src={profileImage} alt="Profile" className="profile-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;