import lottie from "lottie-react";
import animationContact from "../../../public/animationContact.json";
import "./contact.css";
import Lottie from "lottie-react";
const Contact = () => {
  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact
      </h1>
      <p className="subtitle">
        For any collaboration opportunities or inquiries, please reach out!
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form className="">
          <p className="email">
            Email :{" "}
            <a href="mailto:mchafikdev@gmail.com">mchafikdev@gmail.com</a>
          </p>
          <a
            className="cv-link"
            href="/Meryem_Chafik.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download resume
          </a>
        </form>
        <div className="contact-animation">
          <Lottie
            loop={true}
            style={{ height: 500 }}
            animationData={animationContact}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
