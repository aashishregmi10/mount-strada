import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { coffeeProducts } from "../data/mockData";
import "../styles/shop.css";

export default function Shop() {
  const [filters, setFilters] = useState({
    roast: "all",
    priceRange: 1000,
  });

  const [filteredProducts, setFilteredProducts] = useState(coffeeProducts);

  const handleRoastFilter = (roast) => {
    const newFilters = { ...filters, roast };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handlePriceFilter = (price) => {
    const newFilters = { ...filters, priceRange: price };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let filtered = coffeeProducts.filter((product) => {
      const roastMatch =
        currentFilters.roast === "all" ||
        product.roastLevel === currentFilters.roast;
      const priceMatch = product.price <= currentFilters.priceRange;
      return roastMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setFilters({ roast: "all", priceRange: 1000 });
    setFilteredProducts(coffeeProducts);
  };

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>☕ Coffee Beans Shop</h1>
          <p>Premium specialty coffee beans from around the world 🌍</p>
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          <div className="shop-layout">
            {/* Filters */}
            <aside className="filters">
              <h3>Filters</h3>

              <div className="filter-group">
                <h4>Roast Level</h4>
                <div className="filter-options">
                  <label>
                    <input
                      type="radio"
                      name="roast"
                      value="all"
                      checked={filters.roast === "all"}
                      onChange={() => handleRoastFilter("all")}
                    />
                    All Roasts
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="roast"
                      value="light"
                      checked={filters.roast === "light"}
                      onChange={() => handleRoastFilter("light")}
                    />
                    Light Roast
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="roast"
                      value="medium"
                      checked={filters.roast === "medium"}
                      onChange={() => handleRoastFilter("medium")}
                    />
                    Medium Roast
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="roast"
                      value="dark"
                      checked={filters.roast === "dark"}
                      onChange={() => handleRoastFilter("dark")}
                    />
                    Dark Roast
                  </label>
                </div>
              </div>

              <div className="filter-group">
                <h4>Price Range</h4>
                <input
                  type="range"
                  min="300"
                  max="1000"
                  value={filters.priceRange}
                  onChange={(e) => handlePriceFilter(parseInt(e.target.value))}
                />
                <p>Up to ₹{filters.priceRange}</p>
              </div>

              <button className="btn btn-outline" onClick={resetFilters}>
                Reset Filters
              </button>
            </aside>

            {/* Products Grid */}
            <div className="products-section">
              <div className="products-header">
                <p>{filteredProducts.length} products found</p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <p>No products found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="section wholesale-section">
        <div className="container">
          <h2 className="section-title">Wholesale & Bulk Orders</h2>
          <div className="wholesale-content">
            <p>
              Are you a cafe, restaurant, or business looking for bulk coffee
              supply? We offer competitive wholesale pricing and dedicated
              support for bulk orders.
            </p>
            <div className="wholesale-features">
              <div className="feature">
                <span className="icon">📦</span>
                <h4>Bulk Pricing</h4>
                <p>Special discounts for bulk orders starting from 25kg</p>
              </div>
              <div className="feature">
                <span className="icon">🚚</span>
                <h4>Flexible Delivery</h4>
                <p>Customizable delivery schedules to suit your needs</p>
              </div>
              <div className="feature">
                <span className="icon">🤝</span>
                <h4>Dedicated Support</h4>
                <p>Personal account manager for wholesale clients</p>
              </div>
            </div>
            <a
              href="mailto:wholesale@mountstrada.com"
              className="btn btn-primary"
            >
              Inquire About Wholesale
            </a>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="section quality-guarantee">
        <div className="container">
          <h2 className="section-title">Our Quality Guarantee</h2>
          <div className="guarantee-grid">
            <div className="guarantee-item">
              <h3>Fresh Roasting</h3>
              <p>All beans are roasted fresh within 2 weeks of order</p>
            </div>
            <div className="guarantee-item">
              <h3>Direct Sourcing</h3>
              <p>We work directly with farmers for the finest quality</p>
            </div>
            <div className="guarantee-item">
              <h3>Certified Quality</h3>
              <p>All beans are graded and tested for consistency</p>
            </div>
            <div className="guarantee-item">
              <h3>Satisfaction Guaranteed</h3>
              <p>30-day money back guarantee if you're not satisfied</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Policy */}
      <section className="section shipping-section">
        <div className="container">
          <h2 className="section-title">Shipping & Delivery</h2>
          <div className="policy-grid">
            <div className="policy-item">
              <h3>Local Delivery</h3>
              <p>
                <strong>Area:</strong> Bangalore city
                <br />
                <strong>Time:</strong> 2-3 days
                <br />
                <strong>Cost:</strong> Free on orders above ₹1000
              </p>
            </div>
            <div className="policy-item">
              <h3>Pan-India Shipping</h3>
              <p>
                <strong>Area:</strong> All of India
                <br />
                <strong>Time:</strong> 5-7 business days
                <br />
                <strong>Cost:</strong> ₹150 (free above ₹3000)
              </p>
            </div>
            <div className="policy-item">
              <h3>Express Delivery</h3>
              <p>
                <strong>Area:</strong> Bangalore & nearby cities
                <br />
                <strong>Time:</strong> Next day
                <br />
                <strong>Cost:</strong> ₹200
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
