import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  // Zona de Logica
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
