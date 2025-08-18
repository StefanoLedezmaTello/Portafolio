import React, { useState } from 'react';
import Cabecera from './components/cabecera/cabecera';
import HeaderMovil from './components/cabecera/headerMovil'
import SobreMi from './components/sobreMi/sobreMi';
import Proyectos from './components/proyectos/proyectos';
import Experiencia from './components/experiencia/experiencia';
import DatosAcademicos from './components/datosAcademicos/datosAcademicos';
import Particulas from "./components/particulas";
import './App.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const data = {
    nombre: "Stefano Ledezma",
    perfil: "Desarrollador Fullstack",
    fotoPerfil: "https://i.pravatar.cc/150?img=3",
  };
  return (
    <div className="App">
    <Particulas></Particulas> 
    <HeaderMovil menuOpen={menuOpen} data={data} />
    <Cabecera menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="contenedor" >
       <SobreMi></SobreMi>
       <Proyectos></Proyectos>
       <Experiencia></Experiencia>
       <DatosAcademicos></DatosAcademicos>
       </div>
    </div>
  );
}

export default App;
