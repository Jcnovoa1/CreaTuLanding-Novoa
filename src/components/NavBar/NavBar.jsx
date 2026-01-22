// src/components/NavBar/NavBar.jsx
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>Mi Tienda Tech</h3>
      <ul>
        <li><button>Celulares</button></li>
        <li><button>Laptops</button></li>
        <li><button>Accesorios</button></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;