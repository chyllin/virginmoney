import { useState } from "react";
import "./sidebar.css";

type Props = {
  open: boolean;
  onSelect: (view: string) => void;
};

export default function Sidebar({ open, onSelect }: Props) {
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  const handleClick = (item: string) => {
    setActiveItem(item);
    onSelect(item);
  };

  return (
    <aside className={`sidebar ${open ? "open" : "closed"}`}>
      <nav className="menu">

        {/* PROFILE */}
        <div
          className={`profile ${activeItem === "profile" ? "active" : ""}`}
          onClick={() => handleClick("profile")}
        >
          <div className="avatar">JB</div>
          {open && (
            <>
              <h3>Robert Bruce</h3>
              <p>Premium Customer</p>
            </>
          )}
        </div>

        {/* DASHBOARD */}
        <ul>
          <li
            className={activeItem === "dashboard" ? "active" : ""}
            onClick={() => handleClick("dashboard")}
          >
            <span className="icon">🏠</span>
            <span className="text">Dashboard</span>
          </li>
        </ul>

        {/* ACCOUNTS */}
        <p className="menu-title">Accounts</p>
        <ul>
          <li
            className={activeItem === "savings" ? "active" : ""}
            onClick={() => handleClick("savings")}
          >
            <span className="icon">💰</span>
            <span className="text">Savings Account</span>
          </li>

          <li
            className={activeItem === "mortgage" ? "active" : ""}
            onClick={() => handleClick("mortgage")}
          >
            <span className="icon">🏦</span>
            <span className="text">Loans & Mortgage</span>
          </li>
        </ul>

        {/* TRANSACTIONS */}
        <p className="menu-title">Transactions</p>
        <ul>
          <li
            className={activeItem === "transaction-history" ? "active" : ""}
            onClick={() => handleClick("transaction-history")}
          >
            <span className="icon">🧾</span>
            <span className="text">Transaction History</span>
          </li>

          <li
            className={activeItem === "pending" ? "active" : ""}
            onClick={() => handleClick("pending")}
          >
            <span className="icon">⏳</span>
            <span className="text">Pending Transactions</span>
          </li>
        </ul>

        {/* INSURANCE */}
        <p className="menu-title">Insurance</p>
        <ul>
          <li
            className={activeItem === "insurance" ? "active" : ""}
            onClick={() => handleClick("insurance")}
          >
            <span className="icon">🛡️</span>
            <span className="text">Insurance</span>
          </li>
        </ul>

        {/* SETTINGS */}
        <p className="menu-title">Settings</p>
        <ul>
          <li
            className={activeItem === "legal" ? "active" : ""}
            onClick={() => handleClick("legal")}
          >
            <span className="icon">⚖️</span>
            <span className="text">Legal Bits</span>
          </li>

          <li
            className={activeItem === "security" ? "active" : ""}
            onClick={() => handleClick("security")}
          >
            <span className="icon">🔒</span>
            <span className="text">Security</span>
          </li>

          
        </ul>

      </nav>
    </aside>
  );
}
