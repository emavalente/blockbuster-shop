import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  // Zona de Logica
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idType" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2 className="errorMenssage">:( ERROR 404</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
