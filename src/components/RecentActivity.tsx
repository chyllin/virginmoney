import "./RecentActivity.css";
import { january2026Transactions } from "../data/transactions";

type Props = {
  onViewAll: () => void;
};

export default function RecentActivity({ onViewAll }: Props) {
  const recent = january2026Transactions.slice(0, 5);

  return (
    <div className="recent-card">
      <h3>Recent Activity (Jan 2026)</h3>

      <ul>
        {recent.map(tx => (
          <li key={tx.id}>
            <span className="title">{tx.name}</span>
            <span className={`amount ${tx.amount > 0 ? "credit" : "debit"}`}>
              {tx.amount > 0 ? "+" : "-"}€
              {Math.abs(tx.amount).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <button className="view-all" onClick={onViewAll}>
        View all transactions →
      </button>
    </div>
  );
}
