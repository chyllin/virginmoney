import { useNavigate } from "react-router-dom";
import "./navbar.css";

type Props = {
  onMenuClick: () => void;
  menuOpen: boolean;
};

export default function Navbar({ onMenuClick, menuOpen }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-btn" onClick={onMenuClick}>
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* TEXT LOGO */}
        <div className="bank-logo">
          <div className="virgin-circle">
            <span className="virgin-text">virgin</span>
          </div>
          <span className="bank-name">money</span>
        </div>
      </div>

      <div className="nav-actions">
        <button className="nav-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
