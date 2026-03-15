import "./LifeInsuranceModal.css";

type Props = {
  onClose: () => void;
};

export default function LifeInsuranceModal({ onClose }: Props) {
  return (
    <div className="insurance-modal-backdrop">
      <div className="insurance-modal">
        <div className="modal-header">
          <h3>Life Insurance Plans</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="plans">
          {/* BASIC PLAN */}
          <div className="plan-card">
            <h4>Basic Life Cover</h4>
            <p className="coverage">Coverage: <strong>£150,000</strong></p>

            <ul>
              <li>✔ Accidental death cover</li>
              <li>✔ Family benefit payout</li>
              <li>✔ Renewable yearly</li>
            </ul>

            <div className="pricing">

              <p>Yearly: <strong>£1020</strong> </p>
            </div>

           <button className="select-btn locked" disabled>
              🔒 Proceed (Disabled)
            </button>
          </div>

          {/* PREMIUM PLAN */}
          <div className="plan-card premium">
            <h4>Premium Life Cover</h4>
            <p className="coverage">Coverage: <strong>£450,000</strong></p>

            <ul>
              <li>✔ Accidental & natural death</li>
              <li>✔ Disability protection</li>
              <li>✔ Long-term security</li>
            </ul>

            <div className="pricing">
             
              <p>Yearly: <strong>£2290</strong> </p>
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
