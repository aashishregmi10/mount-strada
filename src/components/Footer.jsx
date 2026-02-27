import { Link } from "react-router-dom";
import { companyInfo } from "../data/mockData";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Mount Strada</h3>
              <p>{companyInfo.description}</p>
              <div className="social-links">
                <a
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📷
                </a>
                <a
                  href={companyInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👍
                </a>
                <a
                  href={companyInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶️
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/training">Training</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>
                📞 <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
              </p>
              <p>
                ✉️{" "}
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </p>
              <p>📍 {companyInfo.address}</p>
            </div>

            <div className="footer-section">
              <h4>Newsletter</h4>
              <p>Subscribe for updates and special offers</p>
              <form
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="email" placeholder="Your email" required />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Mount Strada. All rights
              reserved.
            </p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Chat with us on WhatsApp"
      >
        💬
      </a>
    </footer>
  );
}
