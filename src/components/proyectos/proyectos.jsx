import React from 'react';

const proyectosData = [
  {
    id: 1,
    titulo: 'Proyecto CV Personal',
    imagen: 'https://via.placeholder.com/300x180?text=Proyecto+CV',
    descripcion: 'Desarrollo de mi currículum digital con React, mostrando experiencia y habilidades.',
    tecnologias: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/tuusuario/proyecto-cv',
  },
  {
    id: 2,
    titulo: 'APIs de Gestión de Menestra',
    imagen: 'https://via.placeholder.com/300x180?text=APIs+Menestra',
    descripcion: 'APIs para manejar información de compras, ventas y saldos de productos de una menestra.',
    tecnologias: ['.NET', 'SQL Server', 'REST API'],
    github: 'https://github.com/tuusuario/apis-menestra',
  },
  {
    id: 3,
    titulo: 'Sistema de Ventas Minimarket',
    imagen: 'https://via.placeholder.com/300x180?text=Sistema+Ventas+Minimarket',
    descripcion: 'Sistema de ventas con control de inventario, desarrollado con .NET, Vue, React y Bootstrap.',
    tecnologias: ['.NET', 'Vue', 'React', 'Bootstrap'],
    github: 'https://github.com/tuusuario/sistema-ventas-minimarket',
  },
];

const Proyectos = () => {
  return (
    <section style={{ 
      padding: '2rem', 
      boxSizing: 'border-box',
      backgroundColor: '#555257ff',
      //minHeight: '100vh'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Proyectos</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        {proyectosData.map(({ id, titulo, imagen, descripcion, tecnologias, github }) => (
          <div key={id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)' 
          }}>
            <img src={imagen} alt={titulo} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{titulo}</h3>
              <p>{descripcion}</p>
              <p><strong>Tecnologías:</strong> {tecnologias.join(', ')}</p>
              <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: '#0d6efd' }}>
                Ver en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
