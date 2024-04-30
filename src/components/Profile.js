import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Profile() {
  return (
    <div className="profile">
      {/* <img src="/pavan.png" alt="Profile Picture" height={150} width={150} /> */}
      {/* <div> */}
      <h1>
        Hi, I am <span>Pavankumar Reddy</span>
      </h1>
      <p>Full Stack Developer</p>
      {/* </div> */}
      <div className="profile-contact">
        <a
          href="https://drive.google.com/file/d/1dQQtavdd6ucUKpM7YDmjanxGGcN3wKU2/view?usp=drivesdk"
          target="_blank"
        >
          <button>Resume</button>
        </a>
        <div>
          <a href="https://github.com/pavanreddy09" target="_blank">
            <GitHubIcon sx={{ marginRight: "15px", fontSize: "2.5rem" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/pavankumar-reddy-382905209"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: "2.5rem", cursor: "pointer" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
