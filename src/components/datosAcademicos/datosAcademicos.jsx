import React, { useState } from "react";
import PreviewModal from "../../shared/modal";
import certDiplomado from "../../assets/documentos/Certificado-diplomado.pdf";
import certTitulo from "../../assets/documentos/Certificado-Titulo.pdf";
import certificaciones from "../../assets/documentos/certificaciones.pdf"

const data = {
  certTitulo: certTitulo,
  certDiplomado: certDiplomado,
  certificaciones: certificaciones
};

const datosAcademicos = {
  formacion: [
    {
      id: 1,
      titulo: "Ingeniería en Informática",
      institucion: "Duoc UC",
      periodo: "2018 - 2022",
      boton: "Ver Certificado",
    },
    {
      id: 2,
      titulo: "Diplomado en Ciberseguridad",
      institucion: "Duoc UC",
      periodo: "2023 - 2024",
      boton: "Ver Certificado",
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
  const [modalOpen, setModalOpen] = useState(false);
  const [documento, setDocumento] = useState();

  const documentoAbrir = (item) => {
    if (item.id === 1) {
      setDocumento(data.certTitulo);
    } else {
      setDocumento(data.certDiplomado);
    }
    setModalOpen(true);
  };

  const certificado = () => {
    setDocumento(certificaciones);
    setModalOpen(true);
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
                <button className="btn-certificado" onClick={() => documentoAbrir(item)} >{item.boton}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

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
            onClick={() => certificado()}
          >
            Descargar todas las certificaciones
          </button>
        </div>

        <div className="certificaciones-card-mobile colorCard">
          <ul>
            {datosAcademicos.certificaciones.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
          <button
            className="btn-certificado-total"
            onClick={() => setModalOpen(true)}
          >
            Descargar todas las certificaciones
          </button>
        </div>
      </div>
      <PreviewModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              fileUrl={documento}
              title="Vista previa documento"
            />
    </section>
  );
};

export default Academico;
