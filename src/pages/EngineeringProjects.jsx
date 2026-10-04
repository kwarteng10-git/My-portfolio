import { Link } from "react-router-dom";

import electronicsProject from "../assets/images/electronics-project.png";

function EngineeringProjects() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Project</p>

          <h2>Engineering Projects</h2>

          <p>
            Practical engineering projects combining electronics, programming,
            and problem solving to explore real-world applications.
          </p>

          <img
            src={electronicsProject}
            alt="Engineering Projects"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
            }}
          />

          <h3>What it does</h3>
          <p>
            These projects explore practical engineering problems by combining
            electronics, programming, and problem solving.
          </p>

          <h3>What I used</h3>
          <p>MATLAB, Electronics, and Engineering.</p>

          <h3>What was hard</h3>
          <p>
            Combining engineering concepts with programming and applying them
            to practical problems.
          </p>

          <Link className="button button-secondary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default EngineeringProjects;