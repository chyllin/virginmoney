import "./Legal.css";
export default function Legal() {
  return (
    <div className="page legal-page">
      <h2>Legal Bits</h2>

      {/* ===============================
          TERMS & CONDITIONS
      =============================== */}
      <section>
        <h3>Terms & Conditions</h3>

        <h4>1.Payments</h4>
        <p>
          You must make payment shown on your statement by
          the due date each year. Failure to do so may result in the withdrawal
          of any promotional interest rates, effective from the start of the
          relevant statement period.
        </p>

        <h4>2. Promotional Rates</h4>
        <p>Promotional rates apply only for the stated period.</p>
        <p>
          When a promotional rate expires or is withdrawn due to missed
          payments, the standard interest rate applicable to that transaction
          will be charged automatically.
        </p>

        <h4>3. Balance Transfers</h4>
        <p>You are not permitted to transfer balances from:</p>
        <ul>
          <li>Virgin Money</li>
          <li>Clydesdale Bank</li>
          <li>Yorkshire Bank</li>
          <li>B Credit Card</li>
        </ul>
        <p>
          Additionally, this card must not be used to repay borrowing from
          Clydesdale Bank plc.
        </p>

        <h4>4. Eligibility</h4>
        <p>Credit is available subject to status and is offered only to:</p>
        <ul>
          <li>UK residents</li>
          <li>Individuals aged 18 years or over</li>
        </ul>
        <p>
          Approval is not guaranteed and depends on individual circumstances.
        </p>

        <h4>5. Communications</h4>
        <p>
          Calls to our support lines are charged at your service provider’s
          standard rate. For training, quality assurance, and security purposes,
          calls may be monitored or recorded.
        </p>
      </section>

      {/* ===============================
          PRIVACY POLICY
      =============================== */}
      <section>
        <h3>Privacy Policy</h3>

        <h4>1. Data Collection</h4>
        <p>
          We collect and process personal information including identity
          details, contact information, and transaction data. This information
          is used solely to provide, manage, and secure your account.
        </p>

        <h4>2. Data Protection</h4>
        <p>
          Your information is protected in line with UK Data Protection Laws
          and Financial Conduct Authority (FCA) regulations. We apply strict
          security controls to prevent unauthorized access.
        </p>

        <h4>3. Data Sharing</h4>
        <p>
          We do not sell your personal data. Information may only be shared
          when legally required or when necessary to deliver banking services.
        </p>
      </section>

      {/* ===============================
          REGULATORY INFORMATION
      =============================== */}
      <section>
        <h3>Regulatory Information</h3>

        <p>
          The Virgin Atlantic Credit Card is issued by
          <strong> Clydesdale Bank plc</strong> (trading as Virgin Money).
        </p>

        <p>
          Registered in Scotland (Company No. SC001111)
        </p>

        <p>
          Registered Office:
          <br />
          177 Bothwell Street, Glasgow, G2 7ER
        </p>

        <p>
          Clydesdale Bank plc is authorised by the Prudential Regulation
          Authority (PRA) and regulated by the Financial Conduct Authority
          (FCA) and the Prudential Regulation Authority.
        </p>
      </section>
    </div>
  );
}
