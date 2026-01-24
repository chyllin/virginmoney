import "./BankCard.css";

export default function BankCard() {
  return (
    <div className="bank-card">
      {/* Decorative patterns */}
      <div className="v-pattern-1"></div>
      <div className="v-pattern-2"></div>
      <div className="card-shine"></div>

      {/* TOP */}
      <div className="card-top">
        <div className="bank-logo">
          <div className="virgin-circle">
            <span className="virgin-text">Virgin</span>
          </div>
          <span className="bank-name">money</span>
        </div>

        <div className="top-icons">
          <div className="chip"></div>
        </div>
      </div>

      {/* CARD NUMBER */}
      <div className="card-number">
        54** **** **** ****
      </div>

      {/* CARD HOLDER */}
      <div className="card-meta">
        <div className="meta-item">
          <div className="label">CARD HOLDER</div>
          <div className="value">JOHN DOE</div>
        </div>
      </div>

      {/* VISA */}
      <div className="card-bottom">
        <span className="visa-logo">VISA</span>
        <span className="visa-type">Platinum</span>
      </div>
    </div>
  );
}
