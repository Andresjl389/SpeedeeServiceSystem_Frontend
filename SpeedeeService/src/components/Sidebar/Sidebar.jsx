import React from 'react';
import { NavItem } from '../NavItem/NavItem';
import { Home, Plus, Folder, FileText, Settings } from 'lucide-react';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="sidebar-logo-text">UMB</span>
        </div>
        <span className="sidebar-title">UMB</span>
      </div>
      
      <nav className="sidebar-nav">
        <NavItem icon={<Home size={20} />} label="Home" active />
        <NavItem icon={<Plus size={20} />} label="Generar Diseño" />
        <NavItem icon={<Folder size={20} />} label="Diseños Guardados" badge="12" />
        {/* <NavItem icon={<FileText size={20} />} label="PDF Reports" /> */}
        <NavItem icon={<Settings size={20} />} label="Settings" />
      </nav>
    </div>
  );
};
