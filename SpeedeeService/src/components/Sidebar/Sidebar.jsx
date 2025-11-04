import React, { useState } from 'react';
import { NavItem } from "../NavItem/NavItem";
import { Home, Plus, Folder, FileText, Settings } from "lucide-react";
import "./Sidebar.css";

export const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("home");
 
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="sidebar-logo-text">UMB</span>
        </div>
        <span className="sidebar-title">UMB</span>
      </div>

      <nav className="sidebar-nav">
        <NavItem
          icon={<Home size={20} />}
          label="Home"
          to="/"
          active={activeItem === "home"}
          onClick={() => setActiveItem("home")}
        />
        <NavItem
          icon={<Plus size={20} />}
          label="Generar Diseño"
          to="/KitchenForm"
          active={activeItem === "design"}
          onClick={() => setActiveItem("design")}
        />
        <NavItem
          icon={<Folder size={20} />}
          label="Diseños Guardados"
          badge="12"
        />
        {/* <NavItem icon={<FileText size={20} />} label="PDF Reports" /> */}
        <NavItem icon={<Settings size={20} />} label="Settings" />
      </nav>
    </div>
  );
};
