type Props = {
  accountFrozen: boolean;
};

import "./SavingsAccount.css";

const savingsGoals = [
  { id: 1, name: "Emergency Fund", saved: 12500, target: 20000 },
  { id: 2, name: "House Down Payment", saved: 45000, target: 100000 },
  { id: 3, name: "Education", saved: 8200, target: 15000 },
  { id: 4, name: "Travel", saved: 3200, target: 8000 },
];

export default function SavingsAccount({ accountFrozen }: Props) {
  return (
    <div className="savings-wrapper">

      {/* 🔴 ACCOUNT ON HOLD NOTICE */}
      {accountFrozen && (
        <div className="account-frozen-banner">
          
        </div>
      )}

      {/* OVERVIEW */}
      <div className="savings-overview">
        <h2>Savings Account</h2>

        <div className="overview-grid">
          <div>
            <span className="label">Current Balance</span>
            <p className="value">€125,450.00</p>
          </div>

          <div>
            <span className="label">Interest Rate</span>
            <p className="value">4.2% APY</p>
          </div>

          <div>
            <span className="label">Interest Earned (This Month)</span>
            <p className="value">€438.20</p>
          </div>

          <div>
            <span className="label">Total Interest Earned</span>
            <p className="value">€3,214.00</p>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className={`savings-actions ${accountFrozen ? "account-locked" : ""}`}>
        <button className="add" disabled={accountFrozen}>
          ➕ Add Money
        </button>

        <button className="goal" disabled={accountFrozen}>
          🎯 Create New Goal
        </button>

        <button className="withdraw" disabled={accountFrozen}>
          ⬇ Withdraw to Current
        </button>
      </div>

      {/* SAVINGS GOALS */}
      <div className="savings-goals">
        <h3>Savings Goals</h3>

        {savingsGoals.map(goal => {
          const progress = Math.min((goal.saved / goal.target) * 100, 100);

          return (
            <div key={goal.id} className="goal-card">
              <div className="goal-header">
                <span>{goal.name}</span>
                <span>
                  €{goal.saved.toLocaleString()} / €
                  {goal.target.toLocaleString()}
                </span>
              </div>

              <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* INTEREST */}
      <div className="interest-growth">
        <h3>Interest Growth</h3>

        <div className="growth-grid">
          <div>
            <span className="label">Monthly</span>
            <p className="value">€438.20</p>
          </div>

          <div>
            <span className="label">Year-to-Date</span>
            <p className="value">€3,214.00</p>
          </div>

          <div>
            <span className="label">Projected (12 Months)</span>
            <p className="value">€142,800.00</p>
          </div>
        </div>
      </div>

    </div>
  );
}
