function Skills() {
  const skills = [
    "C++",
    "JavaScript",
    "MATLAB",
    "HTML",
    "CSS",
    "React",
    "Git & GitHub",
    "LabVIEW",
  ];

  return (
    <section className="section" id="skills">

      <div className="section-heading">
        <p>What I work with</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-container">

        <div className="skills-group">

          <h3>Languages</h3>

          <div className="skills-grid">
            {skills.slice(0, 3).map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>

        </div>

        <div className="skills-group">

          <h3>Tools & Technologies</h3>

          <div className="skills-grid">
            {skills.slice(3).map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;