import "./LifeInsuranceModal.css";

type Props = {
  onClose: () => void;
};

export default function TravelInsuranceModal({ onClose }: Props) {
  return (
    <div className="insurance-modal-backdrop">
      <div className="insurance-modal">
        <div className="modal-header">
          <h3>Travel Insurance Plans</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="plans">
          {/* BASIC TRAVEL PLAN */}
          <div className="plan-card">
            <h4>Basic Travel Cover</h4>
            <p className="coverage">
              Coverage: <strong>€130,000</strong>
            </p>

            <ul>
              <li>✔ Trip delay & cancellation</li>
              <li>✔ Lost baggage</li>
              <li>✔ Emergency medical</li>
              <li>✔ Up to 14 days</li>
            </ul>

            <div className="pricing">
              <p>Per Trip: <strong>€1000</strong></p>
            </div>

            <button className="select-btn locked" disabled>
              🔒 Proceed (Disabled)
            </button>
          </div>

          {/* PREMIUM TRAVEL PLAN */}
          <div className="plan-card premium">
            <h4>Premium Travel Cover</h4>
            <p className="coverage">
              Coverage: <strong>€210,000</strong>
            </p>

            <ul>
              <li>✔ Trip cancellation & delays</li>
              <li>✔ Lost baggage & documents</li>
              <li>✔ Emergency medical & evacuation</li>
              <li>✔ Worldwide cover (30 days)</li>
            </ul>

            <div className="pricing">
              <p>Per Trip: <strong>€1260</strong></p>
            </div>

            <button className="select-btn locked" disabled>
              🔒 Proceed (Disabled)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
