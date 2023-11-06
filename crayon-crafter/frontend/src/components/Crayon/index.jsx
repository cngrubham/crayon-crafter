import React from 'react';

const CrayonComponent = ({ hexCode, onCreateCrayon }) => {
  const handleCreateCrayon = () => {
    onCreateCrayon(hexCode);
  };

  return (
    <div>
      <div style={{ backgroundColor: hexCode, width: '50px', height: '50px' }}></div>
      <button onClick={handleCreateCrayon}>Create Crayon</button>
    </div>
  );
};

export default CrayonComponent;
