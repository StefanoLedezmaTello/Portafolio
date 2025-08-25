import React from "react";

const proyectosData = [
  {
    id: 1,
    titulo: "Proyecto CV Personal",
    // imagen: "https://via.placeholder.com/300x180?text=Proyecto+CV",
    descripcion:
      "Desarrollo de mi currículum digital con React, mostrando experiencia y habilidades.",
    tecnologias: ["React", "CSS", "JavaScript"],
    github: "https://github.com/StefanoLedezmaTello/portafolio",
  },
  {
    id: 2,
    titulo: "APIs de Gestión de Menestra",
    // imagen: "https://via.placeholder.com/300x180?text=APIs+Menestra",
    descripcion:
      "APIs para manejar información de compras, ventas y saldos de productos de una menestra.",
    tecnologias: [".NET", "SQL Server", "REST API"],
    github: "https://github.com/StefanoLedezmaTello/SistemaDeVentas",
  },
  {
    id: 3,
    titulo: "Sistema de Ventas Minimarket",
    // imagen:
    //   "https://via.placeholder.com/300x180?text=Sistema+Ventas+Minimarket",
    descripcion:
      "Sistema de ventas con control de inventario, desarrollado con .NET, Vue, React y Bootstrap.",
    tecnologias: [".NET", "Vue", "React", "Bootstrap"],
    github: "https://github.com/tuusuario/sistema-ventas-minimarket",
  },
];

const Proyectos = () => {
  return (
    <div className="proyectos-container">
      <h2>Proyectos</h2>
      <div className="proyectos-grid">
        {proyectosData.map(
          ({ id, titulo, imagen, descripcion, tecnologias, github }) => (
            <div key={id} className="proyecto-card colorCard">
                <div className="proyecto-card-content">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <p>
                  <strong>Tecnologías:</strong> {tecnologias.join(", ")}
                </p>
                <button
                  className="btn-proyecto"
                  onClick={() => window.open(github, "_blank")}
                >
                  Ver en GitHub
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Proyectos;
