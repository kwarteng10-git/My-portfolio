import cppProject from "../assets/images/cpp-project.png";
import electronicsProject from "../assets/images/electronics-project.png";
import portfolioWebsite from "../assets/images/portfolio-website.png";

function Projects() {
  const projects = [
    {
      title: "C++ Programming Projects",
      description:
        "A collection of beginner C++ projects focused on programming fundamentals, problem solving, and object-oriented programming.",
      technologies: ["C++", "OOP", "Problem Solving"],
      image: cppProject,
    },
    {
      title: "My First Portfolio",
      description:
        "My first personal portfolio website built to showcase my engineering background, programming skills, and projects.",
      technologies: ["React", "JavaScript", "CSS"],
      image: portfolioWebsite,
    },
    {
      title: "Engineering Projects",
      description:
        "Practical engineering projects combining electronics, programming, and problem solving to explore real-world applications.",
      technologies: ["MATLAB", "Electronics", "Engineering"],
      image: electronicsProject,
    },
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p>What I've been building</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-number">
              0{index + 1}
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a href="#" className="project-link">
              View Project <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;