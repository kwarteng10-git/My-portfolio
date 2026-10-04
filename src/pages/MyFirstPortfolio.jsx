import { Link } from "react-router-dom";
import portfolioWebsite from "../assets/images/portfolio-website.png";

function MyFirstPortfolio() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Project</p>

          <h2>My First Portfolio</h2>

          <p>
            My first personal portfolio website built to showcase my
            engineering background, programming skills, and projects.
          </p>

          <img
            src={portfolioWebsite}
            alt="My First Portfolio"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
            }}
          />

          <h3>What it does</h3>
          <p>
            This portfolio introduces who I am, my engineering background,
            programming skills, and the projects I have been working on.
          </p>

          <h3>What I used</h3>
          <p>React, JavaScript, and CSS.</p>

          <h3>What was hard</h3>
          <p>
            Learning how to structure a React application, create reusable
            components, and style the website was one of the challenging
            parts of building this project.
          </p>

          <Link className="button button-secondary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MyFirstPortfolio;