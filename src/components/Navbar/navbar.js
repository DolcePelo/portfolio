import { useState } from "react";
import Logo from "../../assets/logo-rbg.png";
import "./Navbar.css";

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
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

export default Navbar;
