import { useState } from "react";
import { companyInfo } from "../data/mockData";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Coffee Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Coffee Inquiry",
      message: "",
    });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="Coffee Inquiry">Coffee Inquiry</option>
                    <option value="Training Inquiry">Training Inquiry</option>
                    <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    <option value="General">General Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-container">
              <div className="contact-info">
                <h3>Contact Information</h3>

                <div className="info-item">
                  <span className="icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <p>
                      <a href={`tel:${companyInfo.phone}`}>
                        {companyInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="icon">💬</span>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>
                      <a
                        href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {companyInfo.whatsapp}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="icon">✉️</span>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href={`mailto:${companyInfo.email}`}>
                        {companyInfo.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="icon">📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>{companyInfo.address}</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="icon">🕐</span>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Weekdays: {companyInfo.hours.weekdays}</p>
                    <p>Saturday: {companyInfo.hours.saturday}</p>
                    <p>Sunday: {companyInfo.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a
                    href={companyInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    📷 Instagram
                  </a>
                  <a
                    href={companyInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    👍 Facebook
                  </a>
                  <a
                    href={companyInfo.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube"
                  >
                    ▶️ YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Find Us On Map</h2>
          <div className="map-container">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "var(--border-radius)" }}
              loading="lazy"
              allowFullScreen=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8345565516547!2d77.6245!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d41d1234567%3A0x123456789abcdef!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
