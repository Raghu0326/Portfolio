import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:omhirpara301@gmail.com" data-cursor="disable">
                omhirpara301@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>407-383-8453</p>
            <h4>Education</h4>
            <p>B.S. in Computer Animation — Full Sail University</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/om-hirpara-b5aa75215/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.artstation.com/omhirpara0326"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              ArtStation <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Om Hirpara</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
