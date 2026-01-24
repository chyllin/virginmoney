import "./LifeInsuranceModal.css";

type Props = {
  onClose: () => void;
};

export default function PropertyInsuranceModal({ onClose }: Props) {
  return (
    <div className="insurance-modal-backdrop">
      <div className="insurance-modal">
        <div className="modal-header">
          <h3>Property Insurance Plans</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="plans">
          {/* BASIC PLAN */}
          <div className="plan-card">
            <h4>Basic Property Cover</h4>
            <p>Coverage: <strong>€200,000</strong></p>

            <ul>
              <li>✔ Fire & natural disasters</li>
              <li>✔ Structural damage</li>
              <li>✔ Limited theft protection</li>
            </ul>

            <p className="price">Yearly: <strong>€1,150</strong></p>
            <button className="select-btn locked" disabled>
              🔒 Proceed (Disabled)
            </button>
          </div>

          {/* PREMIUM PLAN */}
          <div className="plan-card premium">
            <h4>Premium Property Cover</h4>
            <p>Coverage: <strong>€55,000</strong></p>

            <ul>
              <li>✔ Fire, flood & storm damage</li>
              <li>✔ Theft & vandalism</li>
              <li>✔ Home contents cover</li>
              <li>✔ Temporary housing</li>
            </ul>

            <p className="price">Yearly: <strong>€1,450</strong></p>
            <button className="select-btn locked" disabled>
              🔒 Proceed (Disabled)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
