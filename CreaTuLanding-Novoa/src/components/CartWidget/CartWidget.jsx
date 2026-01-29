const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <span style={{ fontSize: '1.5rem' }}>🛒</span>
      <span style={{ 
        backgroundColor: '#61dafb', 
        color: '#000', 
        borderRadius: '50%', 
        padding: '2px 8px', 
        fontSize: '0.8rem',
        fontWeight: 'bold',
        marginLeft: '5px'
      }}>
        3
      </span>
    </div>
  );
};

export default CartWidget;