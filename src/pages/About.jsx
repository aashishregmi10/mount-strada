import { teamMembers, timeline, companyInfo } from "../data/mockData";
import "../styles/about.css";

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>☕ About Mount Strada</h1>
          <p>Our Story, Mission, and Vision 🌟</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section story-section">
        <div className="container">
          <h2 className="section-title">📝 Our Story</h2>
          <div className="story-content">
            <p>
              Mount Strada was founded in {companyInfo.foundedYear} with a
              simple vision: to revolutionize India's coffee culture. What
              started as a passion for specialty coffee has grown into a
              comprehensive platform for coffee enthusiasts, professionals, and
              entrepreneurs.
            </p>
            <p>
              Our journey began when our founder discovered the transformative
              power of specialty coffee and quality training. Since then, we've
              dedicated ourselves to sourcing the finest beans from around the
              world and training aspiring baristas to become true coffee
              experts.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>🎯 Our Mission</h3>
              <p>
                To elevate India's coffee culture by providing premium specialty
                coffee and world-class barista training that empowers
                individuals and businesses.
              </p>
            </div>
            <div className="mission-card">
              <h3>🌟 Our Vision</h3>
              <p>
                To become the leading specialty coffee brand in India,
                recognized for quality, expertise, and commitment to customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">💞 Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon">☕</span>
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our beans or training</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🤝</span>
              <h3>Community</h3>
              <p>We believe in building a strong coffee community in India</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🌱</span>
              <h3>Sustainability</h3>
              <p>We source from ethical, sustainable coffee farms</p>
            </div>
            <div className="value-item">
              <span className="value-icon">📚</span>
              <h3>Education</h3>
              <p>We're committed to continuous learning and improvement</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🎯</span>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do</p>
            </div>
            <div className="value-item">
              <span className="value-icon">💡</span>
              <h3>Innovation</h3>
              <p>We continuously innovate to serve you better</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">👥 Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
                <div className="certifications">
                  <h4>Certifications:</h4>
                  <ul>
                    {member.certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section certifications-section">
        <div className="container">
          <h2 className="section-title">
            🏅 Our Certifications & Affiliations
          </h2>
          <div className="certifications-list">
            {companyInfo.certifications.map((cert, idx) => (
              <div key={idx} className="certification-item">
                <span className="cert-icon">✓</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">📈 Our Journey</h2>
          <div className="timeline">
            {timeline.map((event, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="section facility-section">
        <div className="container">
          <h2 className="section-title">🏢 Our Facility</h2>
          <div className="facility-content">
            <div className="facility-image">
              <img
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=450&fit=crop"
                alt="Mount Strada Facility"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "var(--border-radius)",
                }}
              />
            </div>
            <div className="facility-info">
              <h3>State-of-the-art Facilities</h3>
              <p>
                Our state-of-the-art facility in Bangalore is equipped with the
                latest coffee roasting and training equipment. We maintain the
                highest standards of hygiene and quality in every aspect of our
                operations.
              </p>
              <p>
                <strong>Address:</strong> {companyInfo.address}
              </p>
              <p>
                <strong>Hours:</strong>
                <br />
                Weekdays: {companyInfo.hours.weekdays}
                <br />
                Saturday: {companyInfo.hours.saturday}
                <br />
                Sunday: {companyInfo.hours.sunday}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
