import React, { useState } from "react";
import Cabecera from "./components/cabecera/cabecera";
import HeaderMovil from "./components/cabecera/headerMovil";
import SobreMi from "./components/sobreMi/sobreMi";
import Proyectos from "./components/proyectos/proyectos";
import Experiencia from "./components/experiencia/experiencia";
import DatosAcademicos from "./components/datosAcademicos/datosAcademicos";
import Particulas from "./components/particulas";
import fotoPerfil from "../src/assets/img/Foto-perfil.jpg";
import cvFile from "../src/assets/documentos/CV-Stefano.pdf";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const data = {
    nombre: "Stefano Ledezma",
    perfil: "Desarrollador Fullstack",
    fotoPerfil: fotoPerfil,
    github: "https://github.com/StefanoLedezmaTello",
    linkedin: "https://www.linkedin.com/in/stefanoledezmatello",
    cvUrl: cvFile,
  };
  return (
    <div className="App">
      <Particulas></Particulas>
      <HeaderMovil menuOpen={menuOpen} data={data} />
      <Cabecera menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="contenedor">
        <SobreMi></SobreMi>
        <Proyectos></Proyectos>
        <Experiencia></Experiencia>
        <DatosAcademicos menuOpen={menuOpen} setMenuOpen={setMenuOpen}></DatosAcademicos>
      </div>
    </div>
  );
}

export default App;
