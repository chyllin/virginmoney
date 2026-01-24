import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <h2>My Profile</h2>

      <div className="profile-card">
        <div className="profile-row">
          <span className="label">Full Name</span>
          <span className="value">John Doe</span>
        </div>

        <div className="profile-row">
          <span className="label">Email</span>
          <span className="value">johndoe@email.com</span>
        </div>

        <div className="profile-row">
          <span className="label">Phone Number</span>
          <span className="value">+233 24 123 4567</span>
        </div>

        <div className="profile-row">
          <span className="label">Account Number</span>
          <span className="value">54** **** ****</span>
        </div>

        <div className="profile-row">
          <span className="label">Account Type</span>
          <span className="value badge">Savings Account</span>
        </div>

        <div className="profile-row">
          <span className="label">Verification Status</span>
          <span className="status verified">✔ Verified</span>
        </div>
      </div>
    </div>
  );
}
