type Props = {
  accountFrozen: boolean;
};

import "./PendingTransactions.css";

export default function PendingTransactions({ accountFrozen }: Props) {
  return (
    <div className="pending-wrapper">
      <h2 className="pending-title">⏳ Pending Incoming Transactions (13)</h2>

      <div className="pending-info">
        ⓘ These incoming transactions have been authorised, but the account is
        currently <strong>ON HOLD</strong>. Processing will resume once
        restrictions are cleared.
      </div>

      <div className="pending-list">

        {/* 1 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Michael Anderson</p>
          <p><strong>Amount:</strong> €25,000.00</p>
          <p><strong>Date:</strong> Feb 18, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Funds are pending release due to account restriction.
          </p>
        </div>

        {/* 2 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Olivia Brown</p>
          <p><strong>Amount:</strong> €32,500.00</p>
          <p><strong>Date:</strong> Apr 10, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Incoming funds are paused during account review.
          </p>
        </div>

        {/* 3 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Daniel Thompson</p>
          <p><strong>Amount:</strong> €48,000.00</p>
          <p><strong>Date:</strong> Jun 22, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Settlement pending compliance clearance.
          </p>
        </div>

        {/* 4 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Sophia Wilson</p>
          <p><strong>Amount:</strong> €21,400.00</p>
          <p><strong>Date:</strong> Aug 05, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Credit temporarily unavailable due to account status.
          </p>
        </div>

        {/* 5 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Ethan Miller</p>
          <p><strong>Amount:</strong> €39,900.00</p>
          <p><strong>Date:</strong> Sep 18, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Funds queued until restrictions are resolved.
          </p>
        </div>

        {/* 6 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Emma Davis</p>
          <p><strong>Amount:</strong> €27,800.00</p>
          <p><strong>Date:</strong> Oct 02, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Incoming payment awaiting account clearance.
          </p>
        </div>

        {/* 7 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Lucas Johnson</p>
          <p><strong>Amount:</strong> €44,600.00</p>
          <p><strong>Date:</strong> Oct 29, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Processing delayed due to account restrictions.
          </p>
        </div>

        {/* 8 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Ava Taylor</p>
          <p><strong>Amount:</strong> €20,500.00</p>
          <p><strong>Date:</strong> Nov 12, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Funds will be credited once account access is restored.
          </p>
        </div>

        {/* 9 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Noah Martinez</p>
          <p><strong>Amount:</strong> €36,700.00</p>
          <p><strong>Date:</strong> Dec 01, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Incoming funds are under temporary hold.
          </p>
        </div>

        {/* 10 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Isabella Moore</p>
          <p><strong>Amount:</strong> €29,300.00</p>
          <p><strong>Date:</strong> Dec 15, 2025</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Transfer authorised but pending release.
          </p>
        </div>

        {/* 11 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> William Harris</p>
          <p><strong>Amount:</strong> €41,900.00</p>
          <p><strong>Date:</strong> Jan 05, 2026</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Credit delayed due to outstanding account obligations.
          </p>
        </div>

        {/* 12 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> James Clark</p>
          <p><strong>Amount:</strong> €23,600.00</p>
          <p><strong>Date:</strong> Jan 12, 2026</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Funds awaiting final account verification.
          </p>
        </div>

        {/* 13 */}
        <div className="pending-card">
          <h3>🧾 Incoming Transfer</h3>
          <p><strong>From:</strong> Sarah Williams</p>
          <p><strong>Amount:</strong> €50,000.00</p>
          <p><strong>Date:</strong> Jan 20, 2026</p>
          <span className="status hold">🟣 On Hold</span>
          <p className="pending-note">
            Maximum transfer amount held pending account reactivation.
          </p>
        </div>

      </div>

      {accountFrozen && (
        <div className="pending-footer">
          ℹ️ All incoming transactions will automatically be credited once the
          outstanding mortgage obligation is resolved and the account is fully
          restored.
        </div>
      )}
    </div>
  );
}
