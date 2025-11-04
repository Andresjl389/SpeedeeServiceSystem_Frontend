import React from 'react';
import { AlertCircle } from 'lucide-react';
import './Select.css';

export const Select = ({ label, value, onChange, options, error, required }) => {
  return (
    <div className="select-wrapper">
      <label className="select-label">
        {label} {required && <span className="select-required">*</span>}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`select-field ${error ? 'select-error' : ''}`}
      >
        <option value="">Seleccionar...</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div className="select-error-message">
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
