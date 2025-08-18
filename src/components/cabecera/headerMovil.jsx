import React from "react";

const HeaderMovil = ({ menuOpen, data }) => {
  // Solo mostrar si el menú NO está abierto
  if (menuOpen) return null;

  return (
    <div className="header-movil">
      <img src={data.fotoPerfil} alt={data.nombre} className="header-movil__foto" />
      <div className="header-movil__info">
        <h2>{data.nombre}</h2>
        <p>{data.perfil}</p>
      </div>
    </div>
  );
};

export default HeaderMovil;
