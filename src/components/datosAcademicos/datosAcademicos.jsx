import React from "react";

const datosAcademicos = {
  formacion: [
    {
      titulo: "Ingeniería en Informática",
      institucion: "Duoc UC",
      periodo: "2018 - 2022",
      boton: "Ver Certificado de Título",
    },
    {
      titulo: "Diplomado en Ciberseguridad",
      institucion: "Duoc UC",
      periodo: "2023 - 2024",
      boton: "Ver Certificado de Ciberseguridad",
    },
  ],
  certificaciones: [
    "Inteligencia de Negocios",
    "Análisis y Planificación de Requerimientos Informáticos",
    "Gestión de Proyectos Informáticos",
    "Análisis y Desarrollo de Modelos de Datos",
    "Programación de Software",
    "Arquitectura de Software",
    "Calidad de Software",
    "Certificado internacional .NET – Nivel Intermedio",
  ],
};

const Academico = () => {
  const handleDescargarCertificados = () => {
    // Aquí podrías implementar la descarga de un zip o redirección a un PDF
    alert("Descargando todas las certificaciones...");
  };

  return (
    <section className="datos-academicos">
      <h2>Datos Académicos y Certificaciones</h2>

      {/* Formación académica */}
      <div className="formacion-academica">
        <h3>Formación Académica</h3>
        <ul>
          {datosAcademicos.formacion.map((item, index) => (
            <li className="formacionCard colorCard" key={index}>
              <div>
                <strong>{item.titulo}</strong> <br />
                {item.institucion} | {item.periodo}
              </div>
              <div>
                <button className="btn-certificado">{item.boton}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Certificaciones */}
      <div className="certificaciones">
        <h3>Certificaciones</h3>
        <div className= "certificaciones-card-desktop">
          <ul className="certificaciones-grid">
            {datosAcademicos.certificaciones.map((cert, index) => (
              <li className="formacionCard colorCard" key={index}>
                {cert}
              </li>
            ))}
          </ul>
          <button
            className="btn-certificado-total"
            onClick={handleDescargarCertificados}
          >
            Descargar todas las certificaciones
          </button>
        </div>

        {/* Vista móvil */}
        <div className="certificaciones-card-mobile colorCard">
          <ul>
            {datosAcademicos.certificaciones.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
          <button
            className="btn-certificado-total"
            onClick={handleDescargarCertificados}
          >
            Descargar todas las certificaciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default Academico;
