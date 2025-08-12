import React from "react";

const SobreMi = () => {
  return (
    <div
      style={{
        //height: '100vh',
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        boxSizing: "border-box",
        backgroundColor: "#584b8fff",
      }}
    >
      <div style={{ maxWidth: "600px", textAlign: "center" }}>
        <h2>Sobre mí</h2>
        <p>
          Ingeniero en Informática con más de 3 años de experiencia en desarrollo de
          software, bases de datos, automatización y mejora de plataformas,
          destacando en trabajo colaborativo, mejora continua y ética
          profesional.
        </p>
      </div>
    </div>
  );
};

export default SobreMi;
