import { Link } from "react-router-dom";
import cppProject from "../assets/images/cpp-project.png";

function CppProgrammingProjects() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Project</p>

          <h2>C++ Programming Projects</h2>

          <p>
            A collection of beginner C++ projects focused on programming
            fundamentals, problem solving, and object-oriented programming.
          </p>

          <img
            src={cppProject}
            alt="C++ Programming Projects"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
            }}
          />

          <h3>What it does</h3>
          <p>
            This project collection demonstrates my understanding of C++
            programming fundamentals and problem solving through practical
            exercises and small programs.
          </p>

          <h3>What I used</h3>
          <p>C++, Object-Oriented Programming, and Problem Solving.</p>

          <h3>What was hard</h3>
          <p>
            Understanding programming logic and applying object-oriented
            programming concepts in practical projects was one of the
            challenging parts.
          </p>

          <Link className="button button-secondary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default CppProgrammingProjects;