import React, { useState } from 'react';
import { Home, Plus, Folder, FileText, Settings, ArrowLeft, Download, Printer, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

// Sidebar Component
const Sidebar = () => {
  return (
    <div style={{ 
      width: '256px', 
      backgroundColor: '#f3f4f6', 
      minHeight: '100vh', 
      padding: '16px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          backgroundColor: '#b91c1c', 
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>UMB</span>
        </div>
        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>UMB</span>
      </div>
      
      <nav style={{ flex: 1 }}>
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Plus size={20} />} label="New Layout" />
        <NavItem icon={<Folder size={20} />} label="Saved Projects" badge="12" />
        <NavItem icon={<FileText size={20} />} label="PDF Reports" active />
        <NavItem icon={<Settings size={20} />} label="Settings" />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, active, badge }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        padding: '12px', 
        borderRadius: '8px',
        marginBottom: '8px',
        cursor: 'pointer',
        backgroundColor: active ? '#d1d5db' : (isHovered ? '#e5e7eb' : 'transparent'),
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ color: '#374151' }}>{icon}</span>
      <span style={{ 
        flex: 1, 
        fontSize: '14px',
        fontWeight: active ? '600' : '400'
      }}>{label}</span>
      {badge && (
        <span style={{ 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          fontSize: '12px',
          padding: '4px 8px',
          borderRadius: '9999px',
          fontWeight: '500'
        }}>{badge}</span>
      )}
    </div>
  );
};

// Toolbar Button Component
const ToolbarButton = ({ icon, label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 16px',
        fontSize: '14px',
        fontWeight: '500',
        border: '1px solid #d1d5db',
        backgroundColor: isHovered ? '#f9fafb' : 'white',
        color: '#374151',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.2s'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

// Main PDF Viewer Component
const PDFViewer = () => {
  const [zoom, setZoom] = useState(100);
  
  const pdfUrl = '/public/pdf/reporte_cocina_cd2b99cb-8f37-4913-88bd-f49e02d2f18c.pdf'

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'reporte-cocina.pdf';
    link.target = '_blank';
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Sidebar />
      
      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Header */}
        <header style={{ 
          backgroundColor: 'white', 
          padding: '24px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => window.history.back()}
              style={{
                padding: '8px',
                border: 'none',
                backgroundColor: 'transparent',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>
                Reporte de Cocina
              </h1>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                Cocina McDonald's Centro • 15m² • Generado el 03 Nov 2024
              </p>
            </div>
          </div>
        </header>

        {/* Toolbar */}
        <div style={{
          backgroundColor: 'white',
          padding: '16px 24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <ToolbarButton
              icon={<ZoomOut size={18} />}
              label="Reducir"
              onClick={handleZoomOut}
            />
            <div style={{
              padding: '10px 16px',
              fontSize: '14px',
              fontWeight: '500',
              border: '1px solid #d1d5db',
              backgroundColor: '#f9fafb',
              borderRadius: '6px',
              minWidth: '80px',
              textAlign: 'center'
            }}>
              {zoom}%
            </div>
            <ToolbarButton
              icon={<ZoomIn size={18} />}
              label="Ampliar"
              onClick={handleZoomIn}
            />
          </div>

          <div style={{ width: '1px', height: '32px', backgroundColor: '#e5e7eb' }}></div>

          <ToolbarButton
            icon={<Download size={18} />}
            label="Descargar"
            onClick={handleDownload}
          />
          <ToolbarButton
            icon={<Printer size={18} />}
            label="Imprimir"
            onClick={handlePrint}
          />
        </div>

        {/* PDF Viewer Area */}
        <main style={{ padding: '24px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            minHeight: '800px'
          }}>
            <div style={{
              width: '100%',
              height: '800px',
              position: 'relative'
            }}>
              <iframe
                src={pdfUrl}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s'
                }}
                title="PDF Viewer"
              />
            </div>
          </div>

          {/* PDF Info Card */}
          <div style={{
            marginTop: '24px',
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#111827'
            }}>
              Detalles del Reporte
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                  Proyecto
                </div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>
                  Cocina McDonald's Centro
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                  Área
                </div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>
                  15 m²
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                  Tipo
                </div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>
                  Comida Rápida
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                  Fecha de creación
                </div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>
                  03 Nov 2024
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PDFViewer;