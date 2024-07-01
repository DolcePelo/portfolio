import "./Contact.css";
import contactImg1 from "../../assets/email-icon.png";
import contactImg2 from "../../assets/github-icon.png";
import contactImg3 from "../../assets/linkedin-icon.png";

const contactData = [
    {
        contact: contactImg1,
        alt: "Email Icon"
    },
    {
        contact: contactImg2,
        alt: "Github Icon"
    },
    {
        contact: contactImg3,
        alt: "Linkedin Icon"
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
                            <img src={contact.contact} alt={contact.alt}/>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}


export default Contact;