import { useState } from "react";
import "./Security.css";

type SecurityProps = {
  accountFrozen: boolean;
  setAccountFrozen: (_value: boolean) => void;
};

export default function Security({
  accountFrozen,
  setAccountFrozen
}: SecurityProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordStrength = () => {
    if (newPassword.length === 0) return "";
    if (newPassword.length < 6) return "Weak";
    if (newPassword.length < 10) return "Medium";
    return "Strong";
  };

  const handleFreeze = () => {
    if (
      window.confirm(
        "Are you sure you want to freeze this account?\nAll transactions will be blocked."
      )
    ) {
      setAccountFrozen(true);
    }
  };

  return (
    <div className="security-page">
      <h2>Security Settings</h2>

      <div className={`security-card ${accountFrozen ? "disabled" : ""}`}>
        <h3>Change Password</h3>

        {accountFrozen && (
          <p className="warning-text">
            🔒 Password changes are disabled while this account is frozen.
          </p>
        )}

        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            disabled={accountFrozen}
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            disabled={accountFrozen}
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          {!accountFrozen && passwordStrength() && (
            <span className={`strength ${passwordStrength().toLowerCase()}`}>
              Strength: {passwordStrength()}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            disabled={accountFrozen}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="primary-btn" disabled={accountFrozen}>
          Update Password
        </button>

        <p className="meta">
          Last changed: <strong>12 May 2020</strong>
        </p>
      </div>

      <div className="security-card danger">
        <h3>Account Lock / Emergency</h3>

        {accountFrozen ? (
          <p className="frozen-text">
            ⚠️ This account is currently <strong>ON HOLD</strong>.
            <br />
           
          </p>
        ) : (
          <>
            
            <button className="danger-btn" onClick={handleFreeze}>
              Freeze Account
            </button>
          </>
        )}
      </div>
    </div>
  );
}
