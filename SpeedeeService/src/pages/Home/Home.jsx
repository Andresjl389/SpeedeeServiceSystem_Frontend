import React from 'react';
import { Menu, BarChart3, Zap, Clock, TrendingUp } from 'lucide-react';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { StatCard } from '../../components/StatCard/StatCard';
import { ActionCard } from '../../components/ActionCard/ActionCard';
import { ProjectItem } from '../../components/ProjectItem/ProjectItem';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      
      <div className="home-content">
        <header className="home-header">
          <div>
            <h1 className="home-greeting">
              <span>👋</span> Hi Andres!
            </h1>
            <p className="home-subtitle">
              Optimiza el diseño de tus cocinas con inteligencia artificial
            </p>
          </div>
          <button className="menu-button">
            <Menu size={24} />
          </button>
        </header>

        <main className="home-main">
          {/* Stats Grid */}
          <div className="stats-grid">
            <StatCard 
              icon={<BarChart3 size={24} color="#3b82f6" />}
              value="24"
              label="Proyectos creados"
              footer="+3 este mes"
              color="blue"
            />
            <StatCard 
              icon={<Zap size={24} color="#14b8a6" />}
              value="156"
              label="Optimizaciones generadas"
              footer="+12% eficiencia promedio"
              color="teal"
            />
            <StatCard 
              icon={<Clock size={24} color="#f59e0b" />}
              value="48h"
              label="Tiempo ahorrado estimado"
              footer="Por semana"
              color="yellow"
            />
            <StatCard 
              icon={<TrendingUp size={24} color="#a855f7" />}
              value="92%"
              label="Satisfacción promedio"
              footer="+5 vs mes anterior"
              color="purple"
            />
          </div>

          {/* Action Cards */}
          <div className="action-cards-grid">
            <ActionCard 
              title="Crear nuevo diseño"
              description="Inicia un proyecto desde cero con nuestro asistente IA"
            />
            <ActionCard 
              title="Plantillas rápidas"
              description="Usa diseños predefinidos para diferentes tipos de cocinas"
            />
            <ActionCard 
              title="Optimización IA"
              description="Mejora un diseño existente con recomendaciones inteligentes"
            />
          </div>

          {/* Recent Projects */}
          <div className="recent-projects">
            <div className="recent-projects-header">
              <h2>Proyectos recientes</h2>
              <a href="#" className="view-all-link">Ver todos</a>
            </div>
            <div>
              <ProjectItem 
                name="Cocina McDonal's Centro"
                details="Creado hace 2 días • 15m² • Comida rápida"
                status="Completado"
              />
              <ProjectItem 
                name="Burger King Zona Rosa"
                details="Creado hace 5 días • 22m² • Comida rápida"
                status="En progreso"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
