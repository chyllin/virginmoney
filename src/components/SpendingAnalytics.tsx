import React, { useState, useEffect } from "react";
import "./SpendingAnalytics.css";

interface Transaction {
  id: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
}

function SpendingAnalytics() {
  const [transactions] = useState<Transaction[]>([
    // 💰 INCOME TRANSACTIONS - Edit these amounts
    { id: "1", type: "income", category: "Salary", amount: 500000, date: "2026-01-01" },
    { id: "2", type: "income", category: "Freelance", amount: 12000, date: "2026-01-15" },
    
    // 💸 EXPENSE TRANSACTIONS - Edit these amounts
    { id: "3", type: "expense", category: "Transfers", amount: 25000.00, date: "2026-01-05" },
    { id: "4", type: "expense", category: "Transfers", amount: 1800.00, date: "2026-01-12" },
    { id: "5", type: "expense", category: "Subscriptions", amount: 5000.99, date: "2026-01-03" },
    { id: "6", type: "expense", category: "Subscriptions", amount: 9000.99, date: "2026-01-10" },
    { id: "7", type: "expense", category: "Subscriptions", amount: 1200.99, date: "2026-01-11" },
    { id: "8", type: "expense", category: "ATM Withdrawals", amount: 35000.00, date: "2026-01-06" },
    { id: "9", type: "expense", category: "ATM Withdrawals", amount: 23000.00, date: "2026-01-14" },
    { id: "10", type: "expense", category: "Shopping", amount: 6245.50, date: "2026-01-07" },
    { id: "11", type: "expense", category: "Shopping", amount: 4189.99, date: "2026-01-13" },
    { id: "12", type: "expense", category: "Dining", amount: 985.30, date: "2026-01-08" },
    { id: "13", type: "expense", category: "Groceries", amount: 4156.78, date: "2026-01-09" },
    { id: "14", type: "expense", category: "Transport", amount: 745.20, date: "2026-01-11" },
  ]);

  const [analytics, setAnalytics] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    categoryBreakdown: [] as { category: string; amount: number }[],
  });

  useEffect(() => {
    calculateAnalytics();
  }, [transactions]);

  const calculateAnalytics = () => {
    // Calculate total income
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    // Calculate total expenses
    const totalExpenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    // Group expenses by category
    const categoryMap: { [key: string]: number } = {};
    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
      });

    // Convert to array and sort by amount (highest first)
    const categoryBreakdown = Object.entries(categoryMap)
      .map(([category, amount]) => ({
        category,
        amount,
      }))
      .sort((a, b) => b.amount - a.amount);

    setAnalytics({
      totalIncome,
      totalExpenses,
      categoryBreakdown,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const netSavings = analytics.totalIncome - analytics.totalExpenses;

  return (
    <div className="analytics-card">
      <div className="analytics-header">
        <h3>This Month's Summary</h3>
        <span className="update-date">Updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </div>

      {/* SUMMARY */}
      <div className="analytics-grid">
        <div className="analytics-item income">
          <span className="label">Total Income</span>
          <span className="value">{formatCurrency(analytics.totalIncome)}</span>
        </div>

        <div className="analytics-item expense">
          <span className="label">Total Expenses</span>
          <span className="value">{formatCurrency(analytics.totalExpenses)}</span>
        </div>

        <div className="analytics-item savings">
          <span className="label">Net Savings</span>
          <span className="value">{formatCurrency(netSavings)}</span>
        </div>
      </div>

      {/* CATEGORY BREAKDOWN */}
      <div className="category-breakdown">
        <h4>Spending by Category</h4>

        {analytics.categoryBreakdown.length > 0 ? (
          <ul>
            {analytics.categoryBreakdown.map((item) => (
              <li key={item.category}>
                <span className="category-name">{item.category}</span>
                <strong>{formatCurrency(item.amount)}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-data">No expenses recorded this month</p>
        )}
      </div>
    </div>
  );
}

export default React.memo(SpendingAnalytics);