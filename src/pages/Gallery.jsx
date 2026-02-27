import "../styles/gallery.css";

export default function Gallery() {
  const galleryItems = [
    { id: 1, category: "Beans", emoji: "☕", title: "Our Coffee Varieties" },
    { id: 2, category: "Roasting", emoji: "🔥", title: "Roasting Process" },
    { id: 3, category: "Training", emoji: "🎓", title: "Barista Training" },
    { id: 4, category: "Facility", emoji: "🏢", title: "Our Facility" },
    { id: 5, category: "Events", emoji: "🎉", title: "Events & Workshops" },
    { id: 6, category: "Students", emoji: "👥", title: "Student Success" },
    { id: 7, category: "Sourcing", emoji: "🌍", title: "Bean Sourcing" },
    {
      id: 8,
      category: "Ceremonies",
      emoji: "🏆",
      title: "Certificate Ceremonies",
    },
    { id: 9, category: "Community", emoji: "❤️", title: "Community" },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore our coffee journey through images and stories</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section gallery-page-section">
        <div className="container">
          <h2 className="section-title">Our Coffee Journey</h2>
          <div className="gallery-grid-large">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item-large">
                <div className="gallery-image">
                  <div className="placeholder">{item.emoji}</div>
                </div>
                <div className="gallery-overlay">
                  <p className="category">{item.category}</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Text */}
      <section className="section videos-section">
        <div className="container">
          <h2 className="section-title">Video Content</h2>
          <div className="videos-grid">
            <div className="video-item">
              <div className="video-placeholder">▶️</div>
              <h3>Barista Training Highlights</h3>
              <p>Watch highlights from our training sessions</p>
            </div>
            <div className="video-item">
              <div className="video-placeholder">▶️</div>
              <h3>Coffee Sourcing Journey</h3>
              <p>See where our coffee comes from</p>
            </div>
            <div className="video-item">
              <div className="video-placeholder">▶️</div>
              <h3>How to Brew Perfect Coffee</h3>
              <p>Learn brewing techniques from experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="section behind-scenes">
        <div className="container">
          <h2 className="section-title">Behind the Scenes</h2>
          <div className="behind-grid">
            <div className="behind-item">
              <div className="emoji-large">☕</div>
              <h3>Bean Selection</h3>
              <p>
                We carefully select and curate every batch of beans for quality
                and flavor
              </p>
            </div>
            <div className="behind-item">
              <div className="emoji-large">🔥</div>
              <h3>Roasting Excellence</h3>
              <p>
                Each batch is roasted with precision to bring out the best
                flavors
              </p>
            </div>
            <div className="behind-item">
              <div className="emoji-large">🎓</div>
              <h3>Training Programs</h3>
              <p>
                Our expert trainers share knowledge and passion for coffee with
                every student
              </p>
            </div>
            <div className="behind-item">
              <div className="emoji-large">📦</div>
              <h3>Quality Packaging</h3>
              <p>
                We package our beans to maintain freshness every mile of the
                journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="section follow-section">
        <div className="container text-center">
          <h2>Follow Us on Instagram</h2>
          <p>See daily updates, coffee tips, and student success stories</p>
          <a
            href="https://instagram.com/mountstrada"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            @mountstrada
          </a>
        </div>
      </section>
    </main>
  );
}
