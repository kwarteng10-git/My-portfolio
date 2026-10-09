function Hero() {
  return (
    <section className="hero" id="home">

      {/* Coding background */}
      <div className="coding-background">

        <div className="code-window main-window">
          <div className="window-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-content">
            <p>
              <span className="purple">import</span> React{" "}
              <span className="purple">from</span> "react";
            </p>

            <p></p>

            <p>
              <span className="blue">function</span>{" "}
              <span className="green">Portfolio</span>() {"{"}
            </p>

            <p>
              &nbsp;&nbsp;<span className="purple">return</span> (
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;
              <span className="orange">div</span>&gt;
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, world!
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
              <span className="orange">div</span>&gt;
            </p>

            <p>&nbsp;&nbsp;);</p>

            <p>{"}"}</p>
          </div>
        </div>

        <div className="code-window side-window">
          <div className="window-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-content">
            <p>
              <span className="purple">.hero</span> {"{"}
            </p>

            <p>&nbsp;&nbsp;min-height: 100vh;</p>
            <p>&nbsp;&nbsp;display: flex;</p>
            <p>&nbsp;&nbsp;align-items: center;</p>
            <p>&nbsp;&nbsp;color: #fff;</p>

            <p>{"}"}</p>
          </div>
        </div>

        <div className="keyboard"></div>
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Main hero content */}
      <div className="hero-content">

        <p className="intro">
          Hello, I'm
        </p>

        <h1>
          Yeboah Prince <span>Kwarteng</span>
        </h1>

        <h2>
          Electrical & Electronic Engineering Student
          <span> | </span>
          Front-End Developer
        </h2>

        <p className="hero-description">
          I combine engineering thinking with modern web development to
          build practical, responsive, and user-focused digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            Explore My Projects →
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <span className="scroll-arrow">↓</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;