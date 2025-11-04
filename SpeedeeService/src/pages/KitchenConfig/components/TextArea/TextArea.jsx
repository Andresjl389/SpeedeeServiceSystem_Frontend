import React from 'react';
import { AlertCircle } from 'lucide-react';
import './TextArea.css';

export const TextArea = ({ label, value, onChange, error, required, placeholder, rows = 4 }) => {
  return (
    <div className="textarea-wrapper">
      <label className="textarea-label">
        {label} {required && <span className="textarea-required">*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`textarea-field ${error ? 'textarea-error' : ''}`}
      />
      {error && (
        <div className="textarea-error-message">
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
