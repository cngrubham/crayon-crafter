const CrayonComponent = ({ hexCode, onCreateCrayon, isBoxFull }) => {
  const handleCreateCrayon = () => {
    onCreateCrayon(hexCode);
  };

  return (
    <div>
      <div style={{ backgroundColor: hexCode, width: '50px', height: '50px' }}></div>
      {isBoxFull ? (
        <p>Box is Full</p>
      ) : (
        <button onClick={handleCreateCrayon}>Create Crayon</button>
      )}
    </div>
  );
};

export default CrayonComponent;
