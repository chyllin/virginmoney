import "./LifeInsuranceModal.css";

type Props = {
  onClose: () => void;
};

export default function HealthInsuranceModal({ onClose }: Props) {
  const accountOnHold = true; // simulate frozen account

  return (
    <div className="insurance-modal-backdrop">
      <div className="insurance-modal">
        <div className="modal-header">
          <h3>Health Insurance Plans</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* ACCOUNT HOLD NOTICE */}
        {accountOnHold && (
          <div className="account-hold-banner">
            🔒 <strong>ACCOUNT ON HOLD</strong> — Insurance enrollment is
            temporarily unavailable until restrictions are cleared.
          </div>
        )}

        <div className="plans">
          {/* BASIC HEALTH PLAN */}
          <div className="plan-card">
            <h4>Basic Health Cover</h4>
            <p className="coverage">
              Annual Coverage: <strong>€50,000</strong>
            </p>

            <ul>
              <li>✔ Hospitalization</li>
              <li>✔ Emergency treatment</li>
              <li>✔ Doctor consultations</li>
            </ul>

            <div className="pricing">
              <p>Yearly: <strong>€1,000</strong></p>
            </div>

            <button className="select-btn locked" disabled>
              🔒 Proceed (Disabled)
            </button>
          </div>

          {/* PREMIUM HEALTH PLAN */}
          <div className="plan-card premium">
            <h4>Premium Health Cover</h4>
            <p className="coverage">
              Annual Coverage: <strong>€100,000</strong>
            </p>

            <ul>
              <li>✔ Hospital & surgery cover</li>
              <li>✔ Specialist consultations</li>
              <li>✔ Prescription medication</li>
              <li>✔ Maternity & chronic care</li>
            </ul>

            <div className="pricing">
              <p>Yearly: <strong>€1,480</strong></p>
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
