import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from "./components/Titulo"
import Boton from './components/Boton';
import { useState } from "react";

function App() {
  const [estado, setEstado] = useState('');

  return (
    <>
    <Titulo nuevoTitulo='My friend!' estado={estado}></Titulo>
    <Boton setEstado={setEstado}></Boton>
    </>
  )
}

export default App
