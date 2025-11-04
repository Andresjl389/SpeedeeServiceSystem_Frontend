import React from 'react';
import { AlertCircle } from 'lucide-react';
import './Input.css';

export const Input = ({ label, type = "text", value, onChange, error, required, placeholder }) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">
        {label} {required && <span className="input-required">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? 'input-error' : ''}`}
      />
      {error && (
        <div className="input-error-message">
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
