
import { Link } from "react-router-dom";
import "./Prices.css";

function Price() {
  const pricingPlans = [
    {
      title: "Small Bug Fix",
      price: "UGX 30,000",
      description:
        "For small, clearly defined problems in an existing application.",
      features: [
        "Investigate one reported issue",
        "Implement a targeted fix",
        "Basic verification of the correction",
      ],
    },
    {
      title: "REST API Feature",
      price: "UGX 80,000",
      description:
        "For a small backend feature or a limited set of API endpoints.",
      features: [
        "API endpoint implementation",
        "Serializer and input validation",
        "Basic testing",
      ],
    },
    {
      title: "Authentication or Database Feature",
      price: "UGX 150,000",
      description:
        "For a clearly scoped authentication or database-related feature.",
      features: [
        "Login or access-control functionality",
        "Database model or ORM changes",
        "Basic feature testing",
      ],
      featured: true,
    },
    {
      title: "Small Business Web Application",
      price: "UGX 250,000",
      description:
        "A starting estimate for a small Django application with defined requirements.",
      features: [
        "Core application functionality",
        "Database integration",
        "Authentication where agreed",
      ],
    },
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <span className="pricing-eyebrow">SIMPLE, TRANSPARENT PRICING</span>

        <h1>
          Affordable Development
          <span>For Your Next Project</span>
        </h1>

        <p>
          Clear starting prices for Django development, REST API
          features, bug fixes, and database-backed applications.
          Every project is different, so the final quote depends
          on your requirements.
        </p>

        <Link to="/Contacts" className="pricing-button">
          Request a Quote →
        </Link>
      </section>

      <section className="pricing-section">
        <div className="pricing-heading">
          <span className="pricing-eyebrow">MY STARTING RATES</span>
          <h2>Choose a Service</h2>
          <p>
            These introductory prices apply to small, clearly
            defined tasks. Additional requirements may change
            the final cost.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.featured ? "pricing-card-featured" : ""
              }`}
              key={plan.title}
            >
              {plan.featured && (
                <span className="pricing-badge">FEATURED SERVICE</span>
              )}

              <h3>{plan.title}</h3>

              <p className="pricing-description">
                {plan.description}
              </p>

              <div className="pricing-amount">
                {plan.price}
                <span> / starting at</span>
              </div>

              <div className="pricing-divider" />

              <h4>What's included</h4>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="pricing-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/Contacts"
                className={
                  plan.featured
                    ? "pricing-button"
                    : "pricing-card-link"
                }
              >
                Discuss This Service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-info">
        <h2>How project pricing works</h2>

        <div className="pricing-info-grid">
          <div>
            <h3>1. Explain your requirements</h3>
            <p>
              Tell me what you want built or what problem needs fixing.
            </p>
          </div>

          <div>
            <h3>2. Agree on the scope</h3>
            <p>
              We clarify the features, deliverables, deadline, and cost.
            </p>
          </div>

          <div>
            <h3>3. Start the work</h3>
            <p>
              Work begins after we agree on the terms and payment
              arrangements.
            </p>
          </div>
        </div>

        <p className="pricing-note">
          Prices are indicative starting rates, not guaranteed
          fixed quotes. Hosting, paid third-party services, and
          substantial additional features are quoted separately
          where applicable.
        </p>
      </section>

      <section className="pricing-cta">
        <h2>Have a project in mind?</h2>
        <p>
          Share your requirements and get a quote based on the
          work involved.
        </p>

        <Link to="/Contacts" className="pricing-button">
          Let's Discuss Your Project
        </Link>
      </section>
    </div>
  );
}

export default Price;
