// src/App.jsx
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from 
"./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting=
      "¡Bienvenido a nuestra tienda, los mejores precios!" />
    </div>
  );
}

export default App;