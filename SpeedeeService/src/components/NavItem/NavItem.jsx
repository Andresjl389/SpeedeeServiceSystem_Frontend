import { useNavigate } from "react-router-dom";
import "./NavItem.css";

export const NavItem = ({ icon, label, badge, to, active, onClick }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (onClick) onClick(); // activa desde el padre
      if (to) navigate(to);
    };
  
    return (
      <div
        className={`nav-item ${active ? "active" : ""}`}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <span className="nav-icon">{icon}</span>
        <span className={`nav-label ${active ? "active-label" : ""}`}>
          {label}
        </span>
        {badge && <span className="nav-badge">{badge}</span>}
      </div>
    );
  };
  

