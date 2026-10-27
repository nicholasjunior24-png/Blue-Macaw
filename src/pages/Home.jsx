
import { Link } from "react-router-dom";
import "./Home.css";

const services = [
  {
    icon: "</>",
    title: "Django Development",
    description:
      "Build and extend database-backed web applications with Python and Django.",
  },
  {
    icon: "↗",
    title: "REST API Development",
    description:
      "Create API endpoints, serializers, CRUD operations, and input validation.",
  },
  {
    icon: "🔐",
    title: "Authentication & Permissions",
    description:
      "Implement user login, registration, and access control for your application.",
  },
  {
    icon: "▤",
    title: "Database Integration",
    description:
      "Connect applications to relational databases using the Django ORM.",
  },
  {
    icon: "⚙",
    title: "Bug Fixes & Troubleshooting",
    description:
      "Investigate errors and fix clearly defined problems in existing applications.",
  },
  {
    icon: "✓",
    title: "Testing & Documentation",
    description:
      "Improve maintainability with tests, API documentation, and setup instructions.",
  },
];

const technologies = [
  "Python",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Git & GitHub",
  "Docker",
];

function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <div className="hero-stripe hero-stripe-left" />
        <div className="hero-stripe hero-stripe-right" />

        <div className="hero-content">
          <span className="home-eyebrow">
            <span className="orange-line" />
            WELCOME TO BLUE MACAW
          </span>

          <h1>
            Blue Macaw
            <span>Technologies</span>
          </h1>

          <h2>Reliable software solutions for your business.</h2>

          <p>
            From Django web applications to REST APIs and
            database-backed systems, I help turn software
            requirements into practical, maintainable solutions.
          </p>

          <div className="hero-actions">
            <Link to="/Contacts" className="home-btn home-btn-orange">
              Get a Quote <span>→</span>
            </Link>

            <Link to="/Services" className="home-btn home-btn-outline">
              Explore Services
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-dot" />
            Django Development · APIs · Database Integration
          </div>
        </div>

        <div className="hero-visual" aria-label="Code editor illustration">
          <div className="code-window">
            <div className="code-window-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>views.py</span>
            </div>

            <div className="code-body">
              <div className="code-line">
                <span className="code-number">1</span>
                <span className="code-purple">from</span>
                {" django.http "}
                <span className="code-purple">import</span>
                {" JsonResponse"}
              </div>

              <div className="code-line">
                <span className="code-number">2</span>
              </div>

              <div className="code-line">
                <span className="code-number">3</span>
                <span className="code-purple">def</span>
                <span className="code-yellow"> api_home</span>
                (request):
              </div>

              <div className="code-line">
                <span className="code-number">4</span>
                {"    "}
                <span className="code-purple">return</span>
                {" JsonResponse("}
              </div>

              <div className="code-line">
                <span className="code-number">5</span>
                {"        "}
                {"{"}
                <span className="code-green">'status'</span>
                {": "}
                <span className="code-green">'success'</span>
                {"}"}
              </div>

              <div className="code-line">
                <span className="code-number">6</span>
                {"    "}
                {")"}
              </div>
            </div>

            <div className="code-window-footer">
              <span className="status-dot" />
              Python · Django · REST API
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="floating-card-icon">{"{ }"}</span>
            <div>
              <strong>Backend Development</strong>
              <span>Built around your requirements</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home-section home-services">
        <div className="section-intro">
          <span className="home-eyebrow">
            <span className="orange-line" />
            WHAT I DO
          </span>

          <h2>
            Our Core <span className="cyan-text">Services</span>
          </h2>

          <p>
            Practical development services to help you build,
            improve, and maintain your software applications.
          </p>

          <Link to="/Services" className="text-link">
            View All Services →
          </Link>
        </div>

        <div className="home-services-grid">
          {services.map((service) => (
            <article className="home-service-item" key={service.title}>
              <div className="service-icon-box">{service.icon}</div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="home-why">
        <div className="why-intro">
          <span className="home-eyebrow">
            <span className="orange-line" />
            WHY CHOOSE BLUE MACAW
          </span>

          <h2>
            Practical. <span>Reliable.</span>
            <br />
            Built with care.
          </h2>

          <p>
            My focus is on understanding the problem, writing
            maintainable code, and communicating clearly throughout
            a project.
          </p>

          <Link to="/About" className="home-btn home-btn-outline">
            More About Me →
          </Link>
        </div>

        <div className="why-grid">
          <article className="why-item">
            <span className="why-icon">{"</>"}</span>
            <div>
              <h3>Maintainable Code</h3>
              <p>Clear structure and readable implementation.</p>
            </div>
          </article>

          <article className="why-item">
            <span className="why-icon">◷</span>
            <div>
              <h3>Clear Communication</h3>
              <p>Agreed scope, progress updates, and expectations.</p>
            </div>
          </article>

          <article className="why-item">
            <span className="why-icon">✓</span>
            <div>
              <h3>Practical Solutions</h3>
              <p>Features designed around the actual requirements.</p>
            </div>
          </article>

          <article className="why-item">
            <span className="why-icon">↗</span>
            <div>
              <h3>Continuous Improvement</h3>
              <p>Testing, troubleshooting, and iterative development.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Technology stack */}
      <section className="home-section home-tech">
        <div className="tech-intro">
          <span className="home-eyebrow">
            <span className="orange-line" />
            TECHNOLOGIES
          </span>

          <h2>
            The Tools Behind
            <span className="cyan-text"> Your Solution</span>
          </h2>

          <p>
            I work with Python-based backend technologies and
            relational databases to build web applications and APIs.
          </p>
        </div>

        <div className="tech-list">
          {technologies.map((technology) => (
            <span className="tech-pill" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Project preview */}
      <section className="home-projects">
        <div>
          <span className="home-eyebrow">
            <span className="orange-line" />
            PROJECT EXPERIENCE
          </span>

          <h2>Turning ideas into working software</h2>

          <p>
            Explore my Django-based projects, including a
            multi-vendor marketplace and a chat API. These projects
            demonstrate my development work and ongoing progress.
          </p>
        </div>

        <Link to="/About" className="home-btn home-btn-outline">
          Explore My Projects →
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="home-cta">
        <div className="cta-stripe" />

        <div>
          <span className="home-eyebrow">
            <span className="orange-line" />
            LET'S WORK TOGETHER
          </span>

          <h2>Have a project in mind?</h2>

          <p>
            Tell me what you want to build, improve, or fix.
            Let's discuss the requirements and find a practical way
            forward.
          </p>
        </div>

        <Link to="/Contacts" className="home-btn home-btn-orange">
          Contact Me <span>→</span>
        </Link>
      </section>
    </div>
  );
}

export default Home;

