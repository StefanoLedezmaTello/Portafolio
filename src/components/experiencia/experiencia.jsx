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
      "Mejoré la eficiencia operativa optimizando la gestión de la información.",
      "Automatizé el sistema de notificaciones, reduciendo errores y quitando carga administrativa al eliminar tareas manuales.",
      "Creé procesos de automatización con paquetes DTSX para asegurar datos más precisos y cumplir plazos con mayor facilidad.",
      "Desarrollé herramientas que hicieron más simple la visualización y comprensión de movimientos financieros, logrando una mejor experiencia para los usuarios."
    ]


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
    <section className="experiencia-container">
      <h2>Experiencia Laboral</h2>
      {experiencia.map(({ empresa, cargo, periodo, responsabilidades, logros }, idx) => (
        <article key={idx} className="experiencia-article colorCard">
          <h3>{cargo}</h3>
          <h4>{empresa} | {periodo}</h4>

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
