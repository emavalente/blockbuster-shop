import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // Zona de Logica
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="Hola soy un Componente Contenedor"/> */}
      <ItemListContainer />
    </div>
  );
}

export default App;
