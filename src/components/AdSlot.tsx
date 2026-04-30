const AdSlot = ({ type = 'horizontal', id }: { type?: 'horizontal' | 'vertical' | 'in-feed', id: string }) => {
  return (
    <div 
      className={`ad-slot ad-${type}`} 
      id={`ad-${id}`}
      style={{
        background: '#f9f9f9',
        border: '1px dashed #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2rem 0',
        minHeight: type === 'horizontal' ? '100px' : '300px',
        color: '#999',
        fontSize: '0.8rem',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold' }}>Espacio Publicitario</p>
        <p>(AdSense Slot {id})</p>
      </div>
    </div>
  );
};

export default AdSlot;
