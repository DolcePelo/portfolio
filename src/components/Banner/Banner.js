import "./Banner.css";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-text">
                <h1>Hi, I'm Dolce</h1>
                <p>a <span>
                        <Typewriter
                            words={['full stavl','full stack web developer', 'creator', 'marketing degree', 'problem solver']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </p>
            </div>
            <div className="banner-image">

            </div>
        </div>
    )
}

export default Banner;