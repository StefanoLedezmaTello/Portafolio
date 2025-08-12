import React, { useState } from 'react';
import PreviewModal from '../../shared/modal'; // Ajusta la ruta según tu estructura
import cvFile from '../../assets/documentos/CV-Stefano.pdf';

const data = {
  nombre: "Stefano Ledezma",
  perfil: "Desarrollador Fullstack",
  fotoPerfil: "https://i.pravatar.cc/150?img=3",
  telefono: "+56 9 49445596",
  correo: "s.ledezma.tello@gmail.com",
  github: "https://github.com/tuusuario",
  linkedin: "https://www.linkedin.com/in/stefanoledezmatello",
  cvUrl: cvFile,
  tecnologias: [
    ".NET", "SQL Server", "C#", "React", "JavaScript", "Bootstrap",
    "Azure DevOps", "Git", "Power BI"
  ],
};

const Cabecera = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '17rem',
        backgroundColor: '#0d6efd',
        color: 'white',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxSizing: 'border-box',
        zIndex: 1000,
        overflowY: 'auto'
      }}>
        <img
          src={data.fotoPerfil}
          alt={`${data.nombre} foto de perfil`}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem',
            border: '3px solid white'
          }}
        />
        <h1 style={{ margin: '0 0 0.25rem', fontSize: '1.6rem', textAlign: 'center' }}>
          {data.nombre}
        </h1>
        <p style={{ margin: '0 0 1rem', fontStyle: 'italic', textAlign: 'center' }}>
          {data.perfil}
        </p>

        <div style={{ width: '100%', marginBottom: '1.5rem' }}>
          <p><strong>📞</strong> {data.telefono}</p>
          <p><strong>✉️</strong> {data.correo}</p>
          <p>
            <strong>🐱</strong> <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>GitHub</a>
          </p>
          <p>
            <strong>🔗</strong> <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>LinkedIn</a>
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          style={{
            backgroundColor: 'white',
            color: '#0d6efd',
            padding: '0.6rem 1.2rem',
            borderRadius: '20px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '2rem',
            width: '100%',
          }}
        >
          Ver CV
        </button>

        <div style={{ width: '100%' }}>
          <h3 style={{ borderBottom: '1px solid white', paddingBottom: '0.5rem', marginBottom: '1rem', textAlign: 'center' }}>
            Tecnologías
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {data.tecnologias.map((tech, i) => (
              <li key={i} style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.85rem' }}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Modal */}
      <PreviewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        fileUrl={data.cvUrl}
        title="Vista previa CV"
      />
    </>
  );
};

export default Cabecera;
