import { useState } from "react";
import "./TransactionHistory.css";

type Transaction = {
  id: number;
  name: string;
  description: string;
  amount: number;
  date: string;
  year: number;
};

/* Transfer names */
const names = [
  "Mark Zuck", "James Hui", "Sarah Connor", "John Smith", "Anna Bell",
  "Michael Cole", "Jessica White", "Daniel Brown", "Sophia Green",
  "David Black", "Emily Stone", "Chris Evans", "Olivia Turner"
];

/* Bank charges & subscriptions */
const deductions = [
  { name: "Monthly Maintenance Fee", min: 5, max: 15 },
  { name: "SMS Alert Charge", min: 1, max: 3 },
  { name: "ATM Withdrawal Fee", min: 2, max: 5 },
  { name: "Netflix Subscription", min: 10, max: 20 },
  { name: "Spotify Subscription", min: 5, max: 12 },
  { name: "Apple iCloud", min: 2, max: 5 }
];

/* Helpers */
const randomDateInYear = (year: number) => {
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;
  return new Date(year, month, day).toISOString().split("T")[0];
};

const randomDateJan2026 = () => {
  const day = Math.floor(Math.random() * 28) + 1;
  return new Date(2026, 0, day).toISOString().split("T")[0];
};

const maskedAccount = () =>
  `${Math.floor(Math.random() * 90 + 10)}************`;

/* Generate data */
const transactions: Transaction[] = [];
let id = 1;

/* 2015 → 2024 : Transfers + Charges */
for (let year = 2015; year <= 2024; year++) {
  /* Transfers (~100) */
  for (let i = 0; i < 100; i++) {
    const isCredit = Math.random() > 0.5;
    const amount = Number(
      (Math.random() * (50000 - 10000) + 10000).toFixed(2)
    );

    transactions.push({
      id: id++,
      name: names[i % names.length],
      description: `Transfer ${isCredit ? "from" : "to"} ${maskedAccount()}`,
      amount: isCredit ? amount : -amount,
      date: randomDateInYear(year),
      year
    });
  }

  /* Small charges */
  for (let i = 0; i < 20; i++) {
    const charge = deductions[i % deductions.length];
    const amount = Number(
      (Math.random() * (charge.max - charge.min) + charge.min).toFixed(2)
    );

    transactions.push({
      id: id++,
      name: charge.name,
      description: "Automated bank deduction",
      amount: -amount,
      date: randomDateInYear(year),
      year
    });
  }
}

/* 2025 : ONLY charges */
for (let i = 0; i < 60; i++) {
  const charge = deductions[i % deductions.length];
  const amount = Number(
    (Math.random() * (charge.max - charge.min) + charge.min).toFixed(2)
  );

  transactions.push({
    id: id++,
    name: charge.name,
    description: "Automated bank deduction",
    amount: -amount,
    date: randomDateInYear(2025),
    year: 2025
  });
}

/* January 2026 ONLY */
for (let i = 0; i < 15; i++) {
  const charge = deductions[i % deductions.length];
  const amount = Number(
    (Math.random() * (charge.max - charge.min) + charge.min).toFixed(2)
  );

  transactions.push({
    id: id++,
    name: charge.name,
    description: "Automated bank deduction",
    amount: -amount,
    date: randomDateJan2026(),
    year: 2026
  });
}

/* Sort newest first */
transactions.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function TransactionHistory() {
  const [selectedYear, setSelectedYear] = useState("all");

  const years = [
    "all",
    ...Array.from(new Set(transactions.map(tx => tx.year))).sort(
      (a, b) => b - a
    )
  ];

  const filtered =
    selectedYear === "all"
      ? transactions
      : transactions.filter(tx => tx.year === Number(selectedYear));

  return (
    <div className="transaction-card">
      <div className="tx-header">
        <h3>Transaction History</h3>

        <select
          className="year-filter"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          <option value="all">All Years</option>
          {years
            .filter(y => y !== "all")
            .map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>

      <ul className="transaction-list">
        {filtered.map(tx => (
          <li key={tx.id} className="transaction-item">
            <div>
              <p className="tx-name">{tx.name}</p>
              <span className="tx-desc">
                {tx.description} • {tx.date}
              </span>
            </div>

            <span
              className={`tx-amount ${
                tx.amount > 0 ? "credit" : "debit"
              }`}
            >
              {tx.amount > 0 ? "+" : "-"}€
              {Math.abs(tx.amount).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
