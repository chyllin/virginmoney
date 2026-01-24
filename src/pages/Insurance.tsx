import { useState } from "react";
import "./Insurance.css";
import LifeInsuranceModal from "../components/LifeInsuranceModal";
import HealthInsuranceModal from "../components/HealthInsuranceModal";
import PropertyInsuranceModal from "../components/PropertyInsuranceModal";
import TravelInsuranceModal from "../components/TravelInsuranceModal";



export default function Insurance() {
  const [showLifeInsurance, setShowLifeInsurance] = useState(false);
  const [showHealthInsurance, setShowHealthInsurance] = useState(false);
  const [showPropertyInsurance, setShowPropertyInsurance] = useState(false);
  const [showTravelInsurance, setShowTravelInsurance] = useState(false);

  return (
    <div className="insurance-page">
      <h2>Insurance</h2>

      <div className="insurance-grid">
        <div className="insurance-card">
          <h3>Life Insurance</h3>
          <p>Secure your family’s future</p>
          <button onClick={() => setShowLifeInsurance(true)}>View Details</button>
        </div>

        <div className="insurance-card">
          <h3>Health Insurance</h3>
          <p>Coverage for medical expenses</p>
          <button onClick={() => setShowHealthInsurance(true)}>View Details</button>
        </div>

        <div className="insurance-card">
          <h3>Property Insurance</h3>
          <p>Protect your home & assets</p>
          <button onClick={() => setShowPropertyInsurance(true)}>View Details</button>
        </div>

        <div className="insurance-card">
          <h3>Travel Insurance</h3>
          <p>Protection while you travel</p>
          <button onClick={() => setShowTravelInsurance(true)}>View Details</button>
        </div>
      </div>

      {showLifeInsurance && <LifeInsuranceModal onClose={() => setShowLifeInsurance(false)} />}
      {showHealthInsurance && <HealthInsuranceModal onClose={() => setShowHealthInsurance(false)} />}
      {showPropertyInsurance && <PropertyInsuranceModal onClose={() => setShowPropertyInsurance(false)} />}
      {showTravelInsurance && <TravelInsuranceModal onClose={() => setShowTravelInsurance(false)} />}
    </div>
  );
}
