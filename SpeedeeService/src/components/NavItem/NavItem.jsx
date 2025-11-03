import './NavItem.css';

export const NavItem = ({ icon, label, active, badge }) => {
  return (
    <div
      className={`nav-item ${active ? 'active' : ''}`}
    >
      <span className="nav-icon">{icon}</span>
      <span className={`nav-label ${active ? 'active-label' : ''}`}>
        {label}
      </span>
      {badge && (
        <span className="nav-badge">
          {badge}
        </span>
      )}
    </div>
  );
};
