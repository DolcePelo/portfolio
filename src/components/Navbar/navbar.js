import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo-rbg.png";
import "./Navbar.css";

function Navbar() {
    const navbarRef = useRef(null);
    const [ isSticky, setSticky ] = useState(false);

    const handleScroll = () => {
        if (navbarRef.current) {
            setSticky(navbarRef.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav ref={navbarRef} className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="navbar-logo"><img src={Logo}></img></div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-logotipo">
                <p>Dolce Pelozatto</p>
            </div>
        </nav>
    );
}

export default Navbar