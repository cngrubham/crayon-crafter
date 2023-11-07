import React, { useState } from 'react';

const CrayonComponent = ({ hexCode, onCreateCrayon, isBoxFull }) => {
  const [crayonName, setCrayonName] = useState('');

  const handleCreateCrayon = () => {
    onCreateCrayon(hexCode, crayonName);
    setCrayonName('');
  };

  return (
    <div>
      <div style={{ backgroundColor: hexCode, width: '50px', height: '50px' }}></div>
      {isBoxFull ? (
        <p>Box is Full</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter Crayon Name"
            value={crayonName}
            onChange={(e) => setCrayonName(e.target.value)}
          />
          <button onClick={handleCreateCrayon}>Create Crayon</button>
        </div>
      )}
    </div>
  );
};

export default CrayonComponent;
