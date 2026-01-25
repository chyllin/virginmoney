import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BankCard from "../components/BankCard";
import TransactionHistory from "../components/TransactionHistory";
import SpendingAnalytics from "../components/SpendingAnalytics";
import RecentActivity from "../components/RecentActivity";
import SavingsAccount from "../components/SavingsAccount";
import Profile from "../pages/Profile";
import Insurance from "../pages/Insurance";
import Security from "../pages/Security";
import Footer from "../components/Footer";
import Legal from "../pages/Legal";
import LoansMortgage from "../pages/LoansMortgage";
import "../Dashboard.css";

import PendingTransactions from "../pages/PendingTransactions";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState<string>("dashboard");

  // 🔒 GLOBAL ACCOUNT STATUS
  const [accountFrozen, setAccountFrozen] = useState(true);

  return (
    <>
      <Navbar
        onMenuClick={() => setSidebarOpen(prev => !prev)}
        menuOpen={sidebarOpen}
      />

      <Sidebar open={sidebarOpen} onSelect={setActiveView} />

      <main
        className="dashboard-main"
        style={{
          marginLeft: sidebarOpen ? "280px" : "72px",
          transition: "margin-left 0.3s ease"
        }}
      >
        <div className="dashboard-content">

          {/* 🔴 ACCOUNT FROZEN WARNING */}
          {accountFrozen && (
  <div className="account-frozen-banner">
    <span className="warning-icon">⚠️</span>

    <div className="warning-text">
      <strong>WARNING:</strong> The account is currently on hold due to
      an outstanding mortgage balance of <strong>€55,000</strong>.
      Certain features are temporarily disabled until resolution.
    </div>
  </div>
)}

          

          {/* ROUTED VIEWS */}
          {activeView === "profile" && <Profile />}
          {activeView === "insurance" && <Insurance />}
          {activeView === "transaction-history" && <TransactionHistory />}
          {activeView === "savings" && <SavingsAccount accountFrozen={accountFrozen} />}
          {activeView === "legal" && <Legal />}
          {activeView === "pending" && (
  <PendingTransactions accountFrozen={accountFrozen} />
)}

          {activeView === "mortgage" && (
            <LoansMortgage accountFrozen={accountFrozen} />
          )}

          {activeView === "security" && (
            <Security
              accountFrozen={accountFrozen}
              setAccountFrozen={setAccountFrozen}
            />
          )}

          {/* ===============================
              DASHBOARD HOME
          =============================== */}
          {activeView === "dashboard" && (
            <>
              {/* BANK CARD */}
              <div className="bankcard-wrapper">
                <BankCard />
              </div>

              {/* DASHBOARD STATS */}
              <div className="dashboard-card">
                <h2>Account Dashboard</h2>
                <p>Welcome back to your banking portal</p>

                <div className="stats-grid">
                  <div className="stat-card">
                    <h3>Account Balance</h3>
                    <p className="amount">€5,000,000.00</p>
                  </div>

                  <div className="stat-card">
                    <h3>Available Credit</h3>
                    <p className="amount">€5,000.00</p>
                  </div>

                  <div className="stat-card">
                    <h3>Pending Transactions</h3>
                    <p className="amount">13</p>
                  </div>
                </div>
              </div>

              {/* QUICK ACTIONS */}
              <div className="quick-actions">
                <button className="action-btn receive" disabled={accountFrozen}>
                  💰 Receive
                </button>

                <button className="action-btn send" disabled={accountFrozen}>
                  📤 Send
                </button>

                <button className="action-btn withdraw" disabled={accountFrozen}>
                  🏧 Withdraw
                </button>
              </div>

              {/* RECENT ACTIVITY */}
              <RecentActivity
                onViewAll={() => setActiveView("transaction-history")}
              />

              {/* ANALYTICS */}
              <SpendingAnalytics />
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
