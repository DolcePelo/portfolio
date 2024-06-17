import Logo from "../../assets/logo-rbg.png";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo"><img src={Logo}></img></div>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="navbar-logotipo">
                <p>Dolce Pelozatto</p>
            </div>
        </nav>
    );
}

export default Navbar