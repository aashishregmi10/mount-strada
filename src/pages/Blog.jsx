import { blogPosts } from "../data/mockData";
import "../styles/blog.css";

export default function Blog() {
  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>📝 Coffee Blog & Resources</h1>
          <p>Tips, guides, and stories from the coffee world ☕</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section blog-section">
        <div className="container">
          <h2 className="section-title">📝 Latest Articles</h2>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="category">{post.category}</span>
                    <span className="date">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2>{post.title}</h2>
                  <p className="excerpt">{post.excerpt}</p>
                  <a href={`#${post.slug}`} className="read-more">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section featured-post-section">
        <div className="container">
          <h2 className="section-title">🔖 Featured Article</h2>
          <article className="featured-article">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} />
            <div className="featured-content">
              <h3>{blogPosts[0].title}</h3>
              <p className="meta">
                {new Date(blogPosts[0].date).toLocaleDateString()} |{" "}
                {blogPosts[0].category}
              </p>
              <div className="featured-text">
                {blogPosts[0].content.split("\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Coffee Resources */}
      <section className="section resources-section">
        <div className="container">
          <h2 className="section-title">📚 Coffee Resources</h2>
          <div className="resources-grid">
            <div className="resource-item">
              <h3>☕ Brewing Guides</h3>
              <p>
                Learn the best techniques for brewing different coffee types
              </p>
            </div>
            <div className="resource-item">
              <h3>🌍 Bean Origins</h3>
              <p>
                Explore coffee from different regions and their unique
                characteristics
              </p>
            </div>
            <div className="resource-item">
              <h3>🎓 Barista Tips</h3>
              <p>Professional tips and tricks from experienced baristas</p>
            </div>
            <div className="resource-item">
              <h3>📰 Industry News</h3>
              <p>Stay updated with the latest trends in specialty coffee</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
