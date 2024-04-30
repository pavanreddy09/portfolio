import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>CONTACT</h2>
      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:ppavankumarreddy20@gmail.com" className="email">
            ppavankumarreddy20@gmail.com
          </a>
        </p>
        <div>
          <a href="https://github.com/pavanreddy09" target="_blank">
            <GitHubIcon sx={{ marginRight: "15px", fontSize: "2rem" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/pavankumar-reddy-382905209"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
