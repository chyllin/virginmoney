export type Transaction = {
  id: number;
  name: string;
  description: string;
  amount: number;
  date: string;
  year: number;
};

/* Bank charges & subscriptions */
const deductions = [
  { name: "Monthly Maintenance Fee", min: 5, max: 15 },
  { name: "SMS Alert Charge", min: 1, max: 3 },
  { name: "ATM Withdrawal Fee", min: 2, max: 5 },
  { name: "Netflix Subscription", min: 10, max: 20 },
  { name: "Spotify Subscription", min: 5, max: 12 },
  { name: "Apple iCloud", min: 2, max: 5 }
];

const randomDateJan2026 = () => {
  const day = Math.floor(Math.random() * 28) + 1;
  return new Date(2026, 0, day).toISOString().split("T")[0];
};

let id = 1;

export const january2026Transactions: Transaction[] = Array.from(
  { length: 15 },
  (_, i) => {
    const charge = deductions[i % deductions.length];
    const amount = Number(
      (Math.random() * (charge.max - charge.min) + charge.min).toFixed(2)
    );

    return {
      id: id++,
      name: charge.name,
      description: "Automated bank deduction",
      amount: -amount,
      date: randomDateJan2026(),
      year: 2026
    };
  }
).sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
