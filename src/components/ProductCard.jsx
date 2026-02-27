import { Link } from "react-router-dom";
import "../styles/productCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="roast-badge">{product.roastLevel}</span>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="origin">🌍 {product.origin}</p>
        <div className="flavor-notes">
          {product.flavorNotes.map((note) => (
            <span key={note} className="note-tag">
              {note}
            </span>
          ))}
        </div>
        <div className="weight-options">
          {product.weights.map((weight) => (
            <span key={weight} className="weight-option">
              {weight}g
            </span>
          ))}
        </div>
        <div className="product-footer">
          <span className="price">₹{product.price}</span>
          <Link
            to={`/product/${product.id}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
