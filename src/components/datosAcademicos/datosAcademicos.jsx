import React from 'react';

const datosAcademicos = {
  formacion: [
    {
      titulo: "Ingeniería en Informática",
      institucion: "Duoc UC",
      periodo: "2018 - 2022"
    },
    {
      titulo: "Diplomado en Ciberseguridad",
      institucion: "Duoc UC",
      periodo: "2023 - 2024"
    }
  ],
  certificaciones: [
    "Inteligencia de Negocios",
    "Análisis y Planificación de Requerimientos Informáticos",
    "Gestión de Proyectos Informáticos",
    "Análisis y Desarrollo de Modelos de Datos",
    "Programación de Software",
    "Arquitectura de Software",
    "Calidad de Software",
    "Certificado internacional .NET – Nivel Intermedio"
  ]
};

const Academico = () => {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff', boxSizing: 'border-box' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Datos Académicos y Certificaciones</h2>
      
      {/* Formación académica */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Formación Académica</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {datosAcademicos.formacion.map((item, index) => (
            <li key={index} style={{ marginBottom: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '6px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
              <strong>{item.titulo}</strong> <br />
              {item.institucion} | {item.periodo}
            </li>
          ))}
        </ul>
      </div>

      {/* Certificaciones */}
      <div>
        <h3>Certificaciones</h3>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {datosAcademicos.certificaciones.map((cert, index) => (
            <li key={index} style={{ background: '#eef6ff', padding: '0.8rem 1rem', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Academico;
