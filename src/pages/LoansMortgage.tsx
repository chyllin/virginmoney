import "./LoansMortgage.css";

type Props = {
  accountFrozen: boolean;
};

export default function LoansMortgage({ accountFrozen }: Props) {
  return (
    <div className="loans-wrapper">

      {/* ===============================
          1️⃣ OVERVIEW
      =============================== */}
      <div className="loan-overview">
        <h2>Loans & Mortgage</h2>

        <div className="overview-grid">
          <div>
            <span className="label">Loan Type</span>
            <p className="value">Mortgage Loan</p>
          </div>

          <div>
            <span className="label">Outstanding Balance</span>
            <p className="value">€55,000.00</p>
          </div>

          <div>
            <span className="label">Interest Rate (APR)</span>
            <p className="value">5.2%</p>
          </div>

          <div>
            <span className="label">Next Payment Due</span>
            <p className="value">May 15, 2026</p>
          </div>

          <div>
            <span className="label">Payment</span>
            <p className="value">€1,250.00</p>
          </div>

          <div>
            <span className="label">Loan Status</span>
            <p className={`status ${accountFrozen ? "hold" : "active"}`}>
              {accountFrozen ? "On Hold" : "Active"}
            </p>
          </div>
        </div>
      </div>

      {/* ===============================
          ⚠️ ESTATE / INHERITANCE NOTICE
      =============================== */}
      {accountFrozen && (
        <div className="estate-notice">
          <h3>Estate & Inheritance Notice</h3>

          <p>
  The original account holder (<strong>Robert Bruce</strong>) has been{" "}
  <strong>confirmed deceased</strong>. This loan account is currently
  undergoing <strong>estate administration</strong> and formal legal
  review.
</p>

          <p>
            <strong>Next of Kin / Inheritor:</strong>{" "}
            <span className="heir-name">******</span>
          </p>

          <p>
            All debit payments, balance settlements, refinancing requests, and
            repayment actions are <strong>temporarily suspended</strong> until
            <strong> probate and debit clearance procedures</strong> are fully
            completed and verified.
          </p>

          <div className="estate-note">
            If you are the authorised inheritor, executor, or legal
            representative, please contact the loan servicing department to
            submit probate documentation and continue the process.
          </div>
        </div>
      )}

      {/* ===============================
          2️⃣ ACTIVE LOANS
      =============================== */}
      <div className="loan-section">
        <h3>Active Loans</h3>

        <div className="loan-card">
          <div>
            <span className="label">Loan Name</span>
            <p>Primary Mortgage</p>
          </div>

          <div>
            <span className="label">Original Amount</span>
            <p>€120,000</p>
          </div>

          <div>
            <span className="label">Remaining Balance</span>
            <p>€55,000</p>
          </div>

          <div>
            <span className="label">Payment</span>
            <p>€1,250</p>
          </div>

          <div>
            <span className="label">Status</span>
            <p className={`status ${accountFrozen ? "hold" : "active"}`}>
              {accountFrozen ? "On Hold" : "Active"}
            </p>
          </div>
        </div>
      </div>

      {/* ===============================
          3️⃣ PAYMENT ACTIONS
      =============================== */}
      <div className="loan-actions">
        <button disabled={accountFrozen}>Make Payment</button>
        <button disabled={accountFrozen}>Pay in Full</button>
        <button disabled={accountFrozen}>Set Up Auto-Pay</button>

        {accountFrozen && (
          <p className="frozen-note">
            Payments are temporarily disabled pending probate verification and
            debit clearance.
          </p>
        )}
      </div>

      {/* ===============================
          🔐 LEGAL NOTE
      =============================== */}
      <p className="legal-note">
        Credit is subject to status, legal verification, and affordability
        checks. Failure to meet repayment obligations may impact credit
        standing. Estate-managed accounts require probate clearance before any
        financial action can proceed.
      </p>
    </div>
  );
}
