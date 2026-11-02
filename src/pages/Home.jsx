
import { Link } from "react-router-dom";
import "./Home.css";

const services = [
  {
    icon: "🌐",
    title: "Business Websites",
    description:
      "Professional websites for companies, shops, service providers and growing businesses.",
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    description:
      "Online shops where customers can browse products, explore catalogues and make enquiries or purchases.",
  },
  {
    icon: "💼",
    title: "Portfolio Websites",
    description:
      "Personal and professional websites to showcase your skills, projects and achievements.",
  },
  {
    icon: "⚙",
    title: "Custom Web Applications",
    description:
      "Database-powered applications, booking systems, dashboards and business management solutions.",
  },
  {
    icon: "🔗",
    title: "Domain & Web Hosting",
    description:
      "Get help setting up your website with a custom .com domain, hosting and online deployment.",
  },
  {
    icon: "🛠",
    title: "Website Maintenance",
    description:
      "Website updates, bug fixes, improvements, troubleshooting and ongoing technical support.",
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
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

          <h2>We build websites that bring your ideas online.</h2>

          <p>
            From professional business websites and online shops to
            custom web applications, we help individuals and businesses
            establish their online presence. We can also help with
            domain registration, .com domains, hosting and deployment.
          </p>

          <div className="hero-actions">
            <Link to="/Contacts" className="home-btn home-btn-orange">
              Start Your Project <span>→</span>
            </Link>

            <Link to="/Services" className="home-btn home-btn-outline">
              Explore Services
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-dot" />
            Websites · Web Applications · Domains · Hosting
          </div>
        </div>

        <div className="hero-visual" aria-label="Web development illustration">
          <div className="code-window">
            <div className="code-window-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>your-website.com</span>
            </div>

            <div className="code-body">
              <div className="code-line">
                <span className="code-number">1</span>
                <span className="code-purple">const</span>
                {" website = {"}
              </div>

              <div className="code-line">
                <span className="code-number">2</span>
                {"  "}
                <span className="code-green">design</span>
                {": "}
                <span className="code-yellow">"Professional"</span>,
              </div>

              <div className="code-line">
                <span className="code-number">3</span>
                {"  "}
                <span className="code-green">responsive</span>
                {": "}
                <span className="code-purple">true</span>,
              </div>

              <div className="code-line">
                <span className="code-number">4</span>
                {"  "}
                <span className="code-green">domain</span>
                {": "}
                <span className="code-yellow">".com"</span>,
              </div>

              <div className="code-line">
                <span className="code-number">5</span>
                {"  "}
                <span className="code-green">hosting</span>
                {": "}
                <span className="code-purple">"Online"</span>
              </div>

              <div className="code-line">
                <span className="code-number">6</span>
                {"};"}
              </div>
            </div>

            <div className="code-window-footer">
              <span className="status-dot" />
              Your idea · Our development · Your website
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="floating-card-icon">{"{ }"}</span>
            <div>
              <strong>Your Business Online</strong>
              <span>From website to deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home-section home-services">
        <div className="section-intro">
          <span className="home-eyebrow">
            <span className="orange-line" />
            WHAT WE OFFER
          </span>

          <h2>
            Websites & Digital Solutions
            <span className="cyan-text"> For You</span>
          </h2>

          <p>
            Whether you are starting a business, growing an existing
            company or building your personal brand, we can help you
            establish your online presence.
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

      {/* Website packages */}
      <section className="home-why">
        <div className="why-intro">
          <span className="home-eyebrow">
            <span className="orange-line" />
            YOUR ONLINE PRESENCE
          </span>

          <h2>
            More Than Just
            <span> A Website.</span>
            <br />
            A Digital Foundation.
          </h2>

          <p>
            We help you move from an idea to a working online presence.
            Get a website designed around your goals, with assistance
            setting up your domain and hosting.
          </p>

          <Link to="/Contacts" className="home-btn home-btn-outline">
            Discuss Your Website →
          </Link>
        </div>

        <div className="why-grid">
          <article className="why-item">
            <span className="why-icon">🌐</span>
            <div>
              <h3>Professional Design</h3>
              <p>Modern websites designed to present your business clearly.</p>
            </div>
          </article>

          <article className="why-item">
            <span className="why-icon">📱</span>
            <div>
              <h3>Mobile-Friendly</h3>
              <p>Responsive layouts for phones, tablets and computers.</p>
            </div>
          </article>

          <article className="why-item">
            <span className="why-icon">🔗</span>
            <div>
              <h3>Custom Domains</h3>
              <p>Assistance connecting your website to a domain such as .com.</p>
            </div>
          </article>

          <article className="why-item">
            <span className="why-icon">🚀</span>
            <div>
              <h3>Website Deployment</h3>
              <p>Help publishing your website so customers can access it online.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Technology stack */}
      <section className="home-section home-tech">
        <div className="tech-intro">
          <span className="home-eyebrow">
            <span className="orange-line" />
            OUR TECHNOLOGIES
          </span>

          <h2>
            Built With
            <span className="cyan-text"> Modern Technologies</span>
          </h2>

          <p>
            We use modern frontend and backend technologies to create
            responsive websites, interactive applications and
            database-powered systems.
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
            OUR WORK
          </span>

          <h2>Let's turn your ideas into a digital experience.</h2>

          <p>
            Explore our web development projects and discover how
            websites, APIs and custom applications can help solve
            real business problems.
          </p>
        </div>

        <Link to="/About" className="home-btn home-btn-outline">
          Explore Our Work →
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="home-cta">
        <div className="cta-stripe" />

        <div>
          <span className="home-eyebrow">
            <span className="orange-line" />
            LET'S BUILD SOMETHING
          </span>

          <h2>Ready to take your business online?</h2>

          <p>
            Tell us what kind of website you need. Whether it is a
            business website, online shop, portfolio or custom
            application, let's discuss your project.
          </p>
        </div>

        <Link to="/Contacts" className="home-btn home-btn-orange">
          Get Started <span>→</span>
        </Link>
      </section>
    </div>
  );
}

export default Home;


