import { Link } from "react-router-dom";
import { coffeeProducts } from "../data/mockData";
import "../styles/productDetail.css";

export default function ProductDetail() {
  const productId = parseInt(window.location.pathname.split("/").pop());
  const product = coffeeProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <main>
        <section className="page-header">
          <div className="container">
            <h1>Product Not Found</h1>
          </div>
        </section>
      </main>
    );
  }

  const relatedProducts = coffeeProducts
    .filter((p) => p.id !== product.id && p.roastLevel === product.roastLevel)
    .slice(0, 3);

  return (
    <main>
      <section className="product-detail-section">
        <div className="container">
          <Link to="/shop" className="back-link">
            ← Back to Shop
          </Link>

          <div className="product-detail">
            <div className="product-image-large">
              <img src={product.image} alt={product.name} />
              <span className="roast-badge-large">{product.roastLevel}</span>
            </div>

            <div className="product-details-info">
              <h1>{product.name}</h1>
              <p className="origin-large">🌍 {product.origin}</p>

              <div className="rating-section">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span className="reviews">(45 reviews)</span>
              </div>

              <div className="description-section">
                <h3>About This Coffee</h3>
                <p>{product.description}</p>
              </div>

              <div className="flavor-profile">
                <h3>Flavor Profile</h3>
                <div className="flavor-tags">
                  {product.flavorNotes.map((note) => (
                    <span key={note} className="flavor-tag">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="brewing-recommendations">
                <h3>Brewing Recommendations</h3>
                <p>{product.brewingRecommendations}</p>
              </div>

              <div className="roast-level-info">
                <h3>Roast Level</h3>
                <div className="roast-indicator">
                  <div
                    className={`roast-bar light ${product.roastLevel === "light" ? "active" : ""}`}
                  ></div>
                  <div
                    className={`roast-bar medium ${product.roastLevel === "medium" ? "active" : ""}`}
                  ></div>
                  <div
                    className={`roast-bar dark ${product.roastLevel === "dark" ? "active" : ""}`}
                  ></div>
                </div>
                <p>
                  {product.roastLevel.charAt(0).toUpperCase() +
                    product.roastLevel.slice(1)}{" "}
                  Roast
                </p>
              </div>

              <div className="purchase-section">
                <div className="weight-selection">
                  <h3>Select Weight</h3>
                  <div className="weight-options-large">
                    {product.weights.map((weight) => (
                      <button key={weight} className="weight-btn">
                        {weight}g
                      </button>
                    ))}
                  </div>
                </div>

                <div className="price-and-buy">
                  <div className="price-large">₹{product.price}</div>
                  <button className="btn btn-primary btn-large">
                    Add to Cart
                  </button>
                  <button className="btn btn-outline">Inquire</button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h2 className="section-title">Related Products</h2>
              <div className="grid grid-3">
                {relatedProducts.map((item) => (
                  <div key={item.id} className="product-card-small">
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p className="origin">{item.origin}</p>
                    <p className="price">₹{item.price}</p>
                    <Link
                      to={`/product/${item.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
