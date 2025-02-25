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
                <p>I'm Alejandro Pelozatto, Italo-Argentinian, marketing graduate with a passion for full-stack web development. I specialize in building dynamic and engaging web applications, working across both frontend and backend technologies. <br />

                    On the frontend, I craft interactive user experiences with HTML, CSS, JavaScript, and React.js. On the backend, I develop robust solutions using Node.js, Express, and MongoDB, ensuring seamless integration between the interface and the server. <br />
                    I am seeking opportunities to leverage my full-stack skills to contribute to innovative projects, blending marketing insight with technical expertise to create impactful web applications.</p>
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