import React from "react";

const HeaderMovil = ({ menuOpen, data }) => {
  // Solo mostrar si el menú NO está abierto
  if (menuOpen) return null;

  return (
    <div className="header-movil">
      <img
        src={data.fotoPerfil}
        alt={data.nombre}
        className="header-movil__foto"
      />
      <div className="header-movil__info">
        <h2>{data.nombre}</h2>
        <p>{data.perfil}</p>
      </div>
      <div className="iconografia-header-movil">
        <div>
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMovil;
