import React from 'react';

const experiencia = [
  {
    empresa: 'Accenture Chile Asesorías y Servicios Ltda',
    cargo: 'Ingeniero Desarrollador',
    periodo: '2021 - 2025',
    responsabilidades: [
      'Desarrollo e implementación de nuevas funcionalidades en productos financieros utilizando .NET Framework/Core, alineadas con los requerimientos del negocio y buenas prácticas.',
      'Mantenimiento, optimización y mejora continua de plataformas financieras con .NET, SQL Server y JavaScript, enfocado en rendimiento y calidad del código.',
      'Optimización de procesos operativos y flujos internos mediante automatización y mejoras en lógica de negocio y bases de datos con .NET y SQL Server.',
      'Gestión de control de versiones e integración continua usando Git, Azure DevOps y TFS, asegurando trazabilidad y eficiencia en el desarrollo colaborativo.',
    ],
    logros: [
      'Aumenté la eficiencia operativa en un 30% optimizando rendimiento y gestión de información.',
      'Automatización del sistema de notificaciones que redujo errores y carga administrativa eliminando tareas manuales repetitivas.',
      'Implementación de procesos de automatización con paquetes DTSX, mejorando precisión de datos y cumplimiento de plazos.',
      'Desarrollo de herramientas para facilitar la visualización y entendimiento de movimientos financieros, mejorando la experiencia de usuario.',
    ],
  },
  {
    empresa: 'IT People Profesionales Informáticos',
    cargo: 'Desarrollador',
    periodo: '2021 - 2022',
    responsabilidades: [
      'Diseño y optimización de servicios para el departamento de Factoring en entidades financieras.',
      'Mejora de comunicación entre plataformas mediante APIs REST.',
      'Optimización de seguridad y eficiencia del sistema.',
    ],
    logros: [],
  },
];

const ExperienciaLaboral = () => {
  return (
    <section style={{ padding: '2rem', boxSizing: 'border-box', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Experiencia Laboral</h2>
      {experiencia.map(({ empresa, cargo, periodo, responsabilidades, logros }, idx) => (
        <article key={idx} style={{ marginBottom: '2.5rem', padding: '1rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginBottom: '0.25rem' }}>{cargo}</h3>
          <h4 style={{ marginTop: 0, fontWeight: 'normal', color: '#555' }}>{empresa} | {periodo}</h4>

          <div>
            <h5>Responsabilidades:</h5>
            <ul>
              {responsabilidades.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {logros.length > 0 && (
            <div>
              <h5>Logros destacados:</h5>
              <ul>
                {logros.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </section>
  );
};

export default ExperienciaLaboral;
