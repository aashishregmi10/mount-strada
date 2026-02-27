import "../styles/trainingCard.css";

export default function TrainingCard({ program }) {
  return (
    <div className="training-card">
      <div className="training-image">
        <img src={program.image} alt={program.level} />
        <span className="level-badge">{program.level}</span>
      </div>
      <div className="training-info">
        <h3>{program.level} Program</h3>
        <div className="training-details">
          <div className="detail">
            <span className="label">Duration:</span>
            <span className="value">{program.duration}</span>
          </div>
          <div className="detail">
            <span className="label">Fee:</span>
            <span className="value price">₹{program.fee.toLocaleString()}</span>
          </div>
        </div>
        <p className="description">{program.description}</p>
        <div className="includes">
          <h4>What's Included:</h4>
          <ul>
            {program.includes.slice(0, 4).map((item, idx) => (
              <li key={idx}>✓ {item}</li>
            ))}
          </ul>
        </div>
        <p className="who-its-for">
          <strong>Who it's for:</strong> {program.whoItsFor}
        </p>
      </div>
    </div>
  );
}
