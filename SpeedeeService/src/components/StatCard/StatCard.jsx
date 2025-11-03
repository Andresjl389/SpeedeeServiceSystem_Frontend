import './StatCard.css';

export const StatCard = ({ icon, value, label, footer, color }) => {
  const colorClass = {
    blue: 'border-blue',
    teal: 'border-teal',
    yellow: 'border-yellow',
    purple: 'border-purple'
  }[color] || 'border-default';

  return (
    <div className={`stat-card ${colorClass}`}>
      <div className="stat-card-header">
        <div className="stat-card-icon">
          {icon}
        </div>
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-label">{label}</div>
      <div className="stat-card-footer">{footer}</div>
    </div>
  );
};
