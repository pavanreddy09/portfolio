import React from "react";

function Skills({ skills }) {
  return (
    <div className="skills" id="skills">
      <div className="skills-container">
        <h2>SKILLS</h2>
        <div className="skills-cards">
          {skills.map((skill) => {
            return (
              <div className="card" key={skill.name}>
                <img src={skill.logo} height={40} width={40} />
                <h4 style={{ marginLeft: "10px" }}>{skill.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
