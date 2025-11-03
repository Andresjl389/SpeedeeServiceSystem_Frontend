import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import './ActionCard.css';

export const ActionCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`action-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="action-card-icon-wrapper">
        <div className="action-card-icon-box">
          <Palette size={32} color="white" />
        </div>
      </div>

      <h3 className="action-card-title">{title}</h3>
      <p className="action-card-description">{description}</p>
    </div>
  );
};
