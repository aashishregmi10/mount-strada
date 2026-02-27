import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/mockData";
import "../styles/testimonials.css";

export default function Testimonials() {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Testimonials</h1>
          <p>What our customers and students say about us</p>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="section testimonials-page">
        <div className="container">
          <div className="testimonials-intro">
            <p>
              We're proud of the positive impact we've made on our customers and
              students. Here are some of their stories.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section testimonials-stats">
        <div className="container">
          <h2 className="section-title">By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{testimonials.length}</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">4.8</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">500+</div>
              <div className="stat-label">Students Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="section share-story">
        <div className="container text-center">
          <h2>Share Your Story</h2>
          <p>
            Have you trained with us or purchased our coffee? We'd love to hear
            about your experience!
          </p>
          <form
            className="story-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you for sharing your story! We appreciate your feedback.",
              );
              e.target.reset();
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Story" rows="6" required></textarea>
            <button type="submit" className="btn btn-primary">
              Submit Review
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
