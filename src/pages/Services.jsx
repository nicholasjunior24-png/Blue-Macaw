
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: "</>",
      title: "Django Web Development",
      description:
        "Build, customize, and extend database-backed web applications using Python and Django.",
      features: [
        "Django application development",
        "Models and business logic",
        "Feature implementation",
      ],
    },
    {
      number: "02",
      icon: "{ }",
      title: "REST API Development",
      description:
        "Develop structured APIs that allow applications to exchange data reliably.",
      features: [
        "API endpoints and serializers",
        "CRUD operations",
        "Input validation and error handling",
      ],
    },
    {
      number: "03",
      icon: "🔐",
      title: "Authentication & Permissions",
      description:
        "Implement user authentication and access controls appropriate to your application.",
      features: [
        "User registration and login",
        "Role-based permissions",
        "Protected API endpoints",
      ],
    },
    {
      number: "04",
      icon: "▤",
      title: "Database Integration",
      description:
        "Connect Django applications to relational databases and manage data with the Django ORM.",
      features: [
        "SQLite, MySQL, and PostgreSQL",
        "Database models and migrations",
        "Data relationships and queries",
      ],
    },
    {
      number: "05",
      icon: "⚙",
      title: "Bug Fixes & Troubleshooting",
      description:
        "Investigate reproducible application problems and implement targeted fixes.",
      features: [
        "Error investigation",
        "API and backend debugging",
        "Existing feature corrections",
      ],
    },
    {
      number: "06",
      icon: "✓",
      title: "Testing & Documentation",
      description:
        "Make applications easier to maintain with useful tests and clear technical documentation.",
      features: [
        "Automated tests",
        "API endpoint documentation",
        "Setup and usage instructions",
      ],
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <span className="services-eyebrow">WHAT I DO</span>

        <h1>
          Software Solutions Built
          <span> Around Your Needs</span>
        </h1>

        <p>
          I help businesses, startups, and developers build and
          improve Django applications, REST APIs, and database-backed
          software with a focus on practical functionality and
          maintainable code.
        </p>

        <Link to="/Contacts" className="services-button">
          Discuss Your Project →
        </Link>
      </section>

      <section className="services-list">
        <div className="services-heading">
          <span className="services-eyebrow">MY EXPERTISE</span>
          <h2>Services I Offer</h2>
          <p>
            Choose the service that best matches your project or
            existing application.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">
                  {service.number}
                </span>
              </div>

              <h3>{service.title}</h3>
              <p className="service-description">
                {service.description}
              </p>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span className="service-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/Contacts" className="service-link">
                Enquire about this service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Have a specific development challenge?</h2>
        <p>
          Tell me what you want to build or what is not working.
          We can discuss the requirements, scope, and cost before
          work begins.
        </p>

        <Link to="/Contacts" className="services-button">
          Contact Me
        </Link>
      </section>
    </div>
  );
}

export default Services;

