import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // Zona de Logica
  return (
    <>
      <NavBar />
      <ItemListContainer gretting="Bienvenidos al VideoClu" />
    </>
  );
}

export default App;
