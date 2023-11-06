import React from 'react';

const BoxComponent = ({ selectedCrayons, onSaveBox, isBoxFull }) => {
  const handleSaveBox = () => {
    onSaveBox(selectedCrayons);
  };

  return (
    <div>
      <h3>Crayon Box</h3>
      {selectedCrayons.map((crayon, index) => (
        <div key={index} style={{ backgroundColor: crayon.hexCode, width: '50px', height: '50px' }}></div>
      ))}
      {isBoxFull ? (
        <button onClick={handleSaveBox}>Save Box</button>
      ) : (
        <p>Box is not full yet.</p>
      )}
    </div>
  );
};

export default BoxComponent;
