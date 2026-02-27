import { useState } from "react";
import {
  trainingPrograms,
  upcomingBatches,
  teamMembers,
} from "../data/mockData";
import TrainingCard from "../components/TrainingCard";
import "../styles/training.css";

export default function Training() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    courseLevel: "Beginner",
    preferredBatch: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.fullName}! We'll contact you soon about your enrollment.`,
    );
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      courseLevel: "Beginner",
      preferredBatch: "",
    });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Barista Training Programs</h1>
          <p>Become an expert barista with our comprehensive training</p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="grid grid-3">
            {trainingPrograms.map((program) => (
              <TrainingCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Profile */}
      <section className="section trainer-section">
        <div className="container">
          <h2 className="section-title">Meet Our Head Trainers</h2>
          <div className="trainers-grid">
            {teamMembers.slice(0, 3).map((trainer) => (
              <div key={trainer.id} className="trainer-card">
                <img src={trainer.image} alt={trainer.name} />
                <h3>{trainer.name}</h3>
                <p className="role">{trainer.role}</p>
                <p className="bio">{trainer.bio}</p>
                <div className="certifications">
                  <h4>Certifications:</h4>
                  <ul>
                    {trainer.certifications.map((cert, idx) => (
                      <li key={idx}>✓ {cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Details */}
      <section className="section certification-section">
        <div className="container">
          <h2 className="section-title">Certification</h2>
          <div className="certification-content">
            <div className="cert-info">
              <h3>SCA Barista Certification</h3>
              <p>
                Upon successful completion of our Advanced program, you'll
                receive a certificate recognized by the Specialty Coffee
                Association (SCA). This is a globally recognized credential that
                validates your expertise.
              </p>
              <div className="cert-benefits">
                <h4>Benefits of Certification:</h4>
                <ul>
                  <li>✓ Globally recognized credential</li>
                  <li>✓ Career advancement opportunities</li>
                  <li>✓ Higher earning potential</li>
                  <li>✓ Network with coffee professionals</li>
                  <li>✓ Access to professional community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="section batches-section">
        <div className="container">
          <h2 className="section-title">Upcoming Batches</h2>
          <div className="batches-detailed">
            {upcomingBatches.map((batch) => (
              <div key={batch.id} className="batch-detailed-card">
                <div className="batch-header">
                  <span className="batch-level-label">{batch.level}</span>
                  <span className="batch-seats">
                    {batch.availableSeats} seats available
                  </span>
                </div>
                <div className="batch-dates">
                  <p>
                    <strong>Start:</strong>{" "}
                    {new Date(batch.startDate).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p>
                    <strong>End:</strong>{" "}
                    {new Date(batch.endDate).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="batch-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${((batch.totalSeats - batch.availableSeats) / batch.totalSeats) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p>
                    {batch.totalSeats - batch.availableSeats} /{" "}
                    {batch.totalSeats} enrolled
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <h2 className="section-title">Past Training Sessions</h2>
          <div className="gallery-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="gallery-item">
                <div className="gallery-placeholder">
                  {i % 3 === 0 ? "☕" : i % 3 === 1 ? "🎓" : "📸"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="section enrollment-section">
        <div className="container">
          <h2 className="section-title">Enroll Now</h2>
          <div className="enrollment-form-container">
            <form className="enrollment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="courseLevel">Course Level *</label>
                <select
                  id="courseLevel"
                  name="courseLevel"
                  value={formData.courseLevel}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferredBatch">Preferred Batch Date *</label>
                <select
                  id="preferredBatch"
                  name="preferredBatch"
                  value={formData.preferredBatch}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a batch</option>
                  {upcomingBatches
                    .filter(
                      (b) =>
                        b.level === formData.courseLevel &&
                        b.availableSeats > 0,
                    )
                    .map((b) => (
                      <option key={b.id} value={b.id}>
                        {new Date(b.startDate).toLocaleDateString()} (
                        {b.availableSeats} seats)
                      </option>
                    ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Submit Enrollment
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
