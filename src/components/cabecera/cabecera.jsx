import React, { useState } from 'react';
import PreviewModal from '../../shared/modal'; 
import cvFile from '../../assets/documentos/CV-Stefano.pdf';
import './cabecera.css';  // Importa el CSS

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
      <header className="cabecera">
        <img
          src={data.fotoPerfil}
          alt={`${data.nombre} foto de perfil`}
          className="cabecera__foto"
        />
        <h1 className="cabecera__nombre">{data.nombre}</h1>
        <p className="cabecera__perfil">{data.perfil}</p>

        <div className="cabecera__contacto">
          <p><strong>📞</strong> {data.telefono}</p>
          <p><strong>✉️</strong> {data.correo}</p>
          <p>
            <strong>🐱</strong> <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <p>
            <strong>🔗</strong> <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="cabecera__btn-cv"
        >
          Ver CV
        </button>

        <div className="cabecera__tecnologias">
          <h3>Tecnologías</h3>
          <ul className="cabecera__lista-tecnologias">
            {data.tecnologias.map((tech, i) => (
              <li key={i}>{tech}</li>
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
