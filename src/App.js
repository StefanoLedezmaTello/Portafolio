import Cabecera from './components/cabecera/cabecera';
import SobreMi from './components/sobreMi/sobreMi';
import Proyectos from './components/proyectos/proyectos';
import Experiencia from './components/experiencia/experiencia';
import DatosAcademicos from './components/datosAcademicos/datosAcademicos';




import './App.css';

function App() {
  return (
    <div className="App">
      <Cabecera></Cabecera>
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
