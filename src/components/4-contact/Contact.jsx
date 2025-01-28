import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact
      </h1>
      <p className="subtitle">
        For any collaboration opportunities or inquiries, please reach out!
      </p>
      <div className="flex">
        <form className="">
          <p className="email ">
            Email :{" "}
            <a href="mailto:mchafikdev@gmail.com">mchafikdev@gmail.com</a>
          </p>
          <a
            className="cv-link"
            href="file:///C:/Users/dell/Desktop/S3_info/UML/Stage/atteststage.pdf"
            target="_blank"
          >
            Download resume
          </a>
        </form>
        <div className="animation">animation</div>
      </div>
    </section>
  );
};

export default Contact;
