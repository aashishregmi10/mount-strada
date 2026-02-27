import { useState } from "react";
import { faqData } from "../data/mockData";
import "../styles/faq.css";

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions</p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section faq-section">
        <div className="container">
          {faqData.map((category, categoryIdx) => (
            <div key={categoryIdx} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="faq-items">
                {category.questions.map((item) => (
                  <div
                    key={item.id}
                    className={`faq-item ${expandedId === item.id ? "expanded" : ""}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleExpand(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="icon">
                        {expandedId === item.id ? "−" : "+"}
                      </span>
                    </button>
                    {expandedId === item.id && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section faq-cta">
        <div className="container text-center">
          <h2>Didn't find your answer?</h2>
          <p>Get in touch with us directly</p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </section>

      {/* Live Chat or Support */}
      <section className="section support-section">
        <div className="container">
          <h2 className="section-title">Chat With Us</h2>
          <div className="support-grid">
            <div className="support-card">
              <span className="icon">💬</span>
              <h3>WhatsApp Chat</h3>
              <p>Chat with our team on WhatsApp for quick answers</p>
              <a
                href="https://wa.me/919876543210?text=Hi%20Mount%20Strada,%20I%20have%20a%20question..."
                className="btn btn-primary"
              >
                Chat Now
              </a>
            </div>
            <div className="support-card">
              <span className="icon">✉️</span>
              <h3>Email Support</h3>
              <p>Send us an email and we'll respond within 24 hours</p>
              <a
                href="mailto:hello@mountstrada.com"
                className="btn btn-secondary"
              >
                Send Email
              </a>
            </div>
            <div className="support-card">
              <span className="icon">📞</span>
              <h3>Call Us</h3>
              <p>Call our team during business hours</p>
              <a href="tel:+919876543210" className="btn btn-outline">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
