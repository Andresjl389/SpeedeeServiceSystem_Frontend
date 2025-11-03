import './ProjectItem.css';

export const ProjectItem = ({ name, details, status }) => {
  const statusClass = status === 'Completado' ? 'status-completed' : 'status-pending';

  return (
    <div className="project-item">
      <div className="project-info">
        <h4 className="project-name">{name}</h4>
        <p className="project-details">{details}</p>
      </div>
      <span className={`project-status ${statusClass}`}>
        {status}
      </span>
    </div>
  );
};
