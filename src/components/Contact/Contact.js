import "./Contact.css";
import contactImg1 from "../../assets/email-icon.png";
import contactImg2 from "../../assets/github-icon.png";
import contactImg3 from "../../assets/linkedin-icon.png";

const contactData = [
    {
        contact: contactImg1,
        alt: "Email Icon",
        href: "mailto:alejandrojpelozatto@gmail.com"
    },
    {
        contact: contactImg2,
        alt: "Github Icon",
        href: "https://github.com/DolcePelo"
    },
    {
        contact: contactImg3,
        alt: "Linkedin Icon",
        href: "https://www.linkedin.com/in/alejandro-pelozatto-70191060/"
    }
]

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-divider"></div>
            <div className="contact-title_container">
                <div className="contact-title_items">
                    <span className="line"></span>
                    <span className="contact-title">Contact</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="contact-info_container">
                {
                    contactData.map((contact, index) => (
                        <div className="contact-info" key={index}>
                            <a href={contact.href} target="_blank" rel="noopener noreferrer">
                                <img src={contact.contact} alt={contact.alt} />
                            </a>
                        </div>
                    )
                    )}
            </div>
        </div>
    )
}


export default Contact;