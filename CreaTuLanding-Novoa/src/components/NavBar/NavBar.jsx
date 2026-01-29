import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>NovoaStore</div>
      <ul style={styles.list}>
        <li><a href="#" style={styles.link}>Celulares</a></li>
        <li><a href="#" style={styles.link}>Tablets</a></li>
        <li><a href="#" style={styles.link}>Accesorios</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#222', color: 'white' },
  logo: { fontWeight: 'bold', fontSize: '1.5rem', color: '#61dafb' },
  list: { display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0 },
  link: { color: 'white', textDecoration: 'none' }
};

export default NavBar;