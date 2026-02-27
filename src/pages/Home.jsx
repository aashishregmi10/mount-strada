import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import TrainingCard from "../components/TrainingCard";
import TestimonialCard from "../components/TestimonialCard";
import {
  coffeeProducts,
  trainingPrograms,
  testimonials,
  upcomingBatches,
  companyInfo,
} from "../data/mockData";
import "../styles/home.css";

export default function Home() {
  const featuredProducts = coffeeProducts.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Crafting Excellence, One Cup at a Time</h1>
          <p>Premium Specialty Coffee & Professional Barista Training</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary btn-large">
              Order Coffee Beans
            </Link>
            <Link to="/training" className="btn btn-secondary btn-large">
              Join Barista Training
            </Link>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Welcome to Mount Strada</h2>
              <p>
                We are purveyors of the finest specialty coffee beans from
                around the world, combined with professional barista training
                programs. Since {companyInfo.foundedYear}, we've been dedicated
                to elevating India's coffee culture.
              </p>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">
                  {companyInfo.yearsInBusiness}+
                </div>
                <div className="stat-label">Years in Business</div>
              </div>
              <div className="stat">
                <div className="stat-number">{companyInfo.studentsTrained}</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat">
                <div className="stat-number">
                  {(companyInfo.beansSoldKgs / 1000).toFixed(1)}K
                </div>
                <div className="stat-label">Kg Beans Sold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured-products">
        <div className="container">
          <h2 className="section-title">Featured Coffee Beans</h2>
          <div className="grid grid-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-30">
            <Link to="/shop" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Training Programs Preview */}
      <section className="section training-preview">
        <div className="container">
          <h2 className="section-title">Our Training Programs</h2>
          <div className="grid grid-3">
            {trainingPrograms.map((program) => (
              <TrainingCard key={program.id} program={program} />
            ))}
          </div>
          <div className="text-center mt-30">
            <Link to="/training" className="btn btn-primary">
              Explore Full Training Details
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="section upcoming-batches">
        <div className="container">
          <h2 className="section-title">Upcoming Training Batches</h2>
          <div className="batches-grid">
            {upcomingBatches.slice(0, 4).map((batch) => (
              <div key={batch.id} className="batch-card">
                <div className="batch-level">{batch.level}</div>
                <p>
                  <strong>Start Date:</strong>{" "}
                  {new Date(batch.startDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>End Date:</strong>{" "}
                  {new Date(batch.endDate).toLocaleDateString()}
                </p>
                <div className="seats-indicator">
                  <div className="seats-bar">
                    <div
                      className="seats-filled"
                      style={{
                        width: `${((batch.totalSeats - batch.availableSeats) / batch.totalSeats) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="seats-text">
                    {batch.availableSeats} of {batch.totalSeats} seats available
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-30">
            <Link to="/training" className="btn btn-primary">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="grid grid-3">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center mt-30">
            <Link to="/testimonials" className="btn btn-outline">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Preview */}
      <section className="section instagram-section">
        <div className="container">
          <h2 className="section-title">Follow Us on Instagram</h2>
          <div className="instagram-grid">
            {[...Array(6)].map((_, i) => (
              <a
                key={i}
                href={companyInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-item"
              >
                <div className="placeholder">📸</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>Ready to Experience Premium Coffee or Learn Barista Skills?</h2>
          <p>Start your journey with Mount Strada today</p>
          <div className="cta-buttons">
            <Link to="/shop" className="btn btn-primary btn-large">
              Shop Now
            </Link>
            <Link to="/training" className="btn btn-secondary btn-large">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
