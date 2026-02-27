import "../styles/testimonialCard.css";

export default function TestimonialCard({ testimonial }) {
  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="testimonial-card">
      <div className="stars">{renderStars(testimonial.rating)}</div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-author">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="author-image"
        />
        <div>
          <p className="author-name">{testimonial.name}</p>
          <p className="author-course">
            {testimonial.course || testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
