
import "./About.css";

function About() {
  const technologies = [
    {
      title: "Backend Development",
      items: ["Python", "Django", "Django REST Framework"],
    },
    {
      title: "Databases",
      items: ["SQLite", "MySQL", "PostgreSQL"],
    },
    {
      title: "Development Tools",
      items: ["Git", "GitHub", "Docker"],
    },
    {
      title: "API Development",
      items: ["REST APIs", "JSON", "HTTP/HTTPS"],
    },
  ];

  const projects = [
    {
      title: "Django Chat API",
      status: "In Development",
      description:
        "A backend chat application project focused on messaging, data persistence, and real-time communication.",
      features: [
        "Database-backed message persistence",
        "REST API endpoints",
        "WebSocket communication",
        "Authentication and access control",
      ],
    },
    {
      title: "Multi-Vendor Marketplace",
      status: "In Development",
      description:
        "A Django marketplace application designed to manage users, products, orders, and related business operations.",
      features: [
        "Product and order management",
        "Database integration",
        "Authentication and permissions",
        "API validation and automated tests",
      ],
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-label">ABOUT ME</span>

        <h1>
          Python & Django Developer
          <span>Building APIs and Web Applications</span>
        </h1>

        <p className="about-intro">
          I build and improve Django applications, REST APIs, and
          database-backed web applications for businesses, startups,
          and other developers.
        </p>

        <p className="about-description">
          I help turn requirements into practical software by
          implementing backend features, troubleshooting existing
          applications, and writing clear, maintainable code with
          useful documentation.
        </p>

        <a className="about-cta" href="/Contacts">
          Let's Work Together →
        </a>
      </section>

      <section className="about-section">
        <div className="section-heading">
          <span className="about-label">MY SKILLS</span>
          <h2>Technology Stack</h2>
          <p>
            Tools and technologies I use when building software.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <article className="tech-card" key={tech.title}>
              <h3>{tech.title}</h3>

              <div className="tech-tags">
                {tech.items.map((item) => (
                  <span className="tech-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="skills-note">
          My experience varies by technology. I select tools
          according to each project's requirements and my ability
          to deliver the required solution.
        </p>
      </section>

      <section className="about-section projects-section">
        <div className="section-heading">
          <span className="about-label">MY WORK</span>
          <h2>Projects</h2>
          <p>
            Practical projects that demonstrate my backend
            development skills and ongoing learning.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-icon">&lt;/&gt;</span>
                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <h4>Focus areas</h4>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="projects-note">
          Project descriptions indicate intended focus areas and
          do not imply that every listed feature is complete.
        </p>
      </section>

      <section className="about-contact">
        <h2>Have a project in mind?</h2>
        <p>
          Let's discuss your Django application, API, or backend
          development needs.
        </p>

        <a className="about-cta" href="/Contacts">
          Contact Me →
        </a>
      </section>
    </div>
  );
}

export default About;
