import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// Si instalaste bootstrap, descomenta la siguiente linea:
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      {/* Aquí enviamos la prop 'greeting' como pide la consigna */}
      <ItemListContainer greeting="¡Bienvenido a Novoa Store! Tu tienda de confianza." />
    </>
  );
}

export default App;