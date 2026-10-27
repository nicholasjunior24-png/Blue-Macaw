
import { Link } from "react-router-dom";
import "./Contacts.css";

const email = "nicholasjunior24@gmail.com";
const phone = "256708212929";
const githubUrl = "https://github.com/nicholasjunior-png";

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 .8A15.1 15.1 0 0 0 3.05 23.65L1 31l7.53-1.97A15.1 15.1 0 1 0 16 .8Zm0 27.45c-2.3 0-4.55-.62-6.5-1.8l-.47-.28-4.47 1.17 1.2-4.36-.3-.49A12.4 12.4 0 1 1 16 28.25Zm6.81-9.29c-.37-.18-2.2-1.09-2.54-1.21-.34-.13-.59-.18-.84.18-.25.37-.96 1.21-1.18 1.46-.22.25-.44.28-.81.09-.37-.18-1.56-.57-2.97-1.83-1.1-.98-1.84-2.19-2.06-2.56-.22-.37-.02-.57.16-.75.16-.16.37-.44.55-.66.18-.22.24-.37.37-.62.12-.25.06-.47-.03-.65-.1-.19-.84-2.02-1.15-2.76-.3-.72-.61-.62-.84-.63h-.72c-.25 0-.66.09-1 .47-.34.37-1.31 1.28-1.31 3.12s1.34 3.62 1.53 3.87c.18.25 2.63 4.02 6.37 5.63.89.38 1.58.61 2.12.78.89.28 1.7.24 2.34.15.71-.11 2.2-.9 2.51-1.77.31-.87.31-1.62.22-1.77-.09-.15-.34-.25-.71-.43Z" />
    </svg>
  );
}

function Contacts() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-stripe contact-stripe-one" />
        <div className="contact-stripe contact-stripe-two" />

        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            LET'S WORK TOGETHER
          </span>

          <h1>
            Have a project in <span>mind?</span>
          </h1>

          <p>
            Need a Django application, a REST API feature, database
            integration, or help fixing a software problem? Let's discuss
            what you need and find a practical solution.
          </p>

          <div className="contact-hero-actions">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "Hello, I would like to discuss a software development project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn contact-btn-orange"
            >
              <WhatsAppIcon size={20} />
              Chat on WhatsApp
            </a>

            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                "Software Development Inquiry"
              )}`}
              className="contact-btn contact-btn-outline"
            >
              Send an Email
            </a>
          </div>
        </div>

        <div className="contact-hero-card">
          <div className="contact-card-mark">{"{ }"}</div>
          <span className="contact-card-label">BLUE MACAW TECHNOLOGIES</span>
          <h2>Practical software. Clear communication.</h2>
          <p>
            Tell me about your requirements, your goals, and the problem
            you want to solve.
          </p>
          <div className="contact-card-rule" />
          <span className="contact-card-status">
            <span /> Available for project inquiries
          </span>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-section-heading">
          <span className="contact-section-kicker">GET IN TOUCH</span>
          <h2>Choose how to contact me</h2>
          <p>
            Reach out using any of the options below. Briefly describe
            your project or the issue you need help with.
          </p>
        </div>

        <div className="contact-methods">
          <a href={`mailto:${email}`} className="contact-method">
            <span className="contact-method-icon contact-icon-cyan">
              @
            </span>
            <span className="contact-method-copy">
              <strong>Email</strong>
              <span>{email}</span>
              <small>Send project details or questions</small>
            </span>
            <span className="contact-method-arrow">↗</span>
          </a>

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method"
          >
            <span className="contact-method-icon contact-icon-green">
              <WhatsAppIcon size={25} />
            </span>
            <span className="contact-method-copy">
              <strong>WhatsApp</strong>
              <span>+256 708 212 929</span>
              <small>Start a direct conversation</small>
            </span>
            <span className="contact-method-arrow">↗</span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method"
          >
            <span className="contact-method-icon contact-icon-orange">
              {"</>"}
            </span>
            <span className="contact-method-copy">
              <strong>GitHub</strong>
              <span>View my code and projects</span>
              <small>Explore my development work</small>
            </span>
            <span className="contact-method-arrow">↗</span>
          </a>

          <div className="contact-method contact-method-static">
            <span className="contact-method-icon contact-icon-cyan">
              ◎
            </span>
            <span className="contact-method-copy">
              <strong>Location</strong>
              <span>Uganda</span>
              <small>Available for online and local projects</small>
            </span>
          </div>
        </div>
      </section>

      <section className="contact-work">
        <div className="contact-work-heading">
          <span className="contact-section-kicker">WHAT HAPPENS NEXT?</span>
          <h2>A straightforward way to get started</h2>
        </div>

        <div className="contact-steps">
          <article className="contact-step">
            <span className="contact-step-number">01</span>
            <h3>Describe the problem</h3>
            <p>
              Explain what you want to build, fix, or improve, including
              any relevant requirements.
            </p>
          </article>

          <article className="contact-step">
            <span className="contact-step-number">02</span>
            <h3>Review the scope</h3>
            <p>
              We clarify the requirements, agree on deliverables, and
              discuss a suitable price and timeline.
            </p>
          </article>

          <article className="contact-step">
            <span className="contact-step-number">03</span>
            <h3>Agree before work starts</h3>
            <p>
              Work begins after the scope, cost, delivery date, and
              payment arrangement have been agreed.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-bottom-cta">
        <div>
          <span className="contact-section-kicker">READY TO START?</span>
          <h2>Let's talk about your software project.</h2>
          <p>
            Share a brief description of your needs, and we can discuss
            the next steps.
          </p>
        </div>

        <div className="contact-bottom-actions">
          <a href={`mailto:${email}`} className="contact-btn contact-btn-orange">
            Contact Me <span>→</span>
          </a>
          <Link to="/Services" className="contact-services-link">
            Explore Services
          </Link>
        </div>
      </section>

      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(
          "Hello, I would like to discuss a software development project."
        )}`}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon size={29} />
        <span className="floating-whatsapp-label">Chat with me</span>
      </a>
    </div>
  );
}

export default Contacts;
