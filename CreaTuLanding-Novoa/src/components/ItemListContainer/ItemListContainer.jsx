const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ 
      padding: '3rem', 
      textAlign: 'center', 
      minHeight: '50vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <h2 style={{ fontSize: '2.5rem', color: '#333' }}>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;