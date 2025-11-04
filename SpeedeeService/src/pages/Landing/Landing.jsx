import React, { useState } from 'react';
import { ChefHat, Zap, BarChart3, Users, CheckCircle, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#b91c1c',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>UMB</span>
            </div>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>UMB Kitchen</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Design Intelligence</div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '500',
                border: '1px solid #d1d5db',
                backgroundColor: 'white',
                color: '#374151',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.borderColor = '#b91c1c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              Iniciar Sesión
            </button>
            <button
              style={{
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                backgroundColor: '#b91c1c',
                color: 'white',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#991b1b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#b91c1c';
              }}
            >
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
        padding: '80px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            padding: '8px 16px',
            borderRadius: '9999px',
            marginBottom: '24px'
          }}>
            <Zap size={16} color="#b91c1c" />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#b91c1c' }}>
              Optimización inteligente de cocinas comerciales
            </span>
          </div>

          <h1 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '24px',
            color: '#111827'
          }}>
            Diseña cocinas comerciales<br />
            <span style={{ color: '#b91c1c' }}>más eficientes</span> con IA
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Optimiza el diseño de tu cocina comercial en minutos. Nuestra IA analiza tu espacio
            y genera configuraciones que maximizan la eficiencia operativa.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
            <button
              style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                backgroundColor: '#b91c1c',
                color: 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s',
                boxShadow: '0 4px 6px -1px rgba(185, 28, 28, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#991b1b';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(185, 28, 28, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#b91c1c';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(185, 28, 28, 0.2)';
              }}
            >
              Comenzar Gratis
              <ArrowRight size={20} />
            </button>
            <button
              style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                border: '2px solid #e5e7eb',
                backgroundColor: 'white',
                color: '#374151',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#b91c1c';
                e.currentTarget.style.color = '#b91c1c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.color = '#374151';
              }}
            >
              Ver Demo
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div>
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#b91c1c', marginBottom: '8px' }}>
                48h
              </div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                Tiempo ahorrado promedio
              </div>
            </div>
            <div>
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#b91c1c', marginBottom: '8px' }}>
                +12%
              </div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                Mejora en eficiencia
              </div>
            </div>
            <div>
              <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#b91c1c', marginBottom: '8px' }}>
                92%
              </div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                Satisfacción de clientes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#111827'
            }}>
              Todo lo que necesitas para optimizar tu cocina
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Herramientas potentes impulsadas por inteligencia artificial
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            <FeatureCard
              icon={<ChefHat size={32} color="#b91c1c" />}
              title="Diseño Automatizado"
              description="Crea diseños de cocina optimizados en minutos con nuestro asistente IA que analiza tu espacio y necesidades."
              isHovered={hoveredFeature === 0}
              onHover={() => setHoveredFeature(0)}
              onLeave={() => setHoveredFeature(null)}
            />
            <FeatureCard
              icon={<BarChart3 size={32} color="#b91c1c" />}
              title="Análisis de Eficiencia"
              description="Obtén métricas detalladas sobre flujo de trabajo, uso del espacio y productividad estimada."
              isHovered={hoveredFeature === 1}
              onHover={() => setHoveredFeature(1)}
              onLeave={() => setHoveredFeature(null)}
            />
            <FeatureCard
              icon={<Users size={32} color="#b91c1c" />}
              title="Gestión de Personal"
              description="Optimiza la distribución de estaciones según el número de personal y tipo de operación."
              isHovered={hoveredFeature === 2}
              onHover={() => setHoveredFeature(2)}
              onLeave={() => setHoveredFeature(null)}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '40px',
                fontWeight: 'bold',
                marginBottom: '24px',
                color: '#111827'
              }}>
                ¿Por qué elegir UMB Kitchen?
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6b7280',
                marginBottom: '32px',
                lineHeight: '1.6'
              }}>
                Nuestra plataforma combina años de experiencia en diseño de cocinas comerciales
                con la última tecnología en inteligencia artificial.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <BenefitItem text="Reducción del 40% en tiempo de diseño" />
                <BenefitItem text="Plantillas personalizables para cualquier tipo de negocio" />
                <BenefitItem text="Reportes detallados en PDF" />
                <BenefitItem text="Soporte técnico especializado" />
              </div>
            </div>

            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '16px',
              padding: '60px',
              textAlign: 'center',
              border: '2px solid #e5e7eb'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#b91c1c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <ChefHat size={60} color="white" />
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#111827'
              }}>
                Comienza hoy mismo
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                marginBottom: '24px'
              }}>
                Únete a cientos de restaurantes que ya optimizan sus operaciones con UMB Kitchen
              </p>
              <button
                style={{
                  padding: '14px 28px',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: '#b91c1c',
                  color: 'white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#991b1b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#b91c1c';
                }}
              >
                Crear Cuenta Gratis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '40px 24px',
        marginTop: '80px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#b91c1c',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>UMB</span>
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>UMB Kitchen</span>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>
            © 2024 UMB Kitchen. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, isHovered, onHover, onLeave }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '32px',
        borderRadius: '12px',
        border: '2px solid',
        borderColor: isHovered ? '#b91c1c' : '#e5e7eb',
        cursor: 'pointer',
        transition: 'all 0.3s',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div style={{
        width: '64px',
        height: '64px',
        backgroundColor: '#fef2f2',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '12px',
        color: '#111827'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '15px',
        color: '#6b7280',
        lineHeight: '1.6'
      }}>
        {description}
      </p>
    </div>
  );
};

// Benefit Item Component
const BenefitItem = ({ text }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      <CheckCircle size={24} color="#16a34a" />
      <span style={{ fontSize: '16px', color: '#374151' }}>{text}</span>
    </div>
  );
};

export default LandingPage;