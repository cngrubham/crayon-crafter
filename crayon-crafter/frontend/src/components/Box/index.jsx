import React from "react";

const BoxComponent = ({ selectedCrayons, onSaveBox, isBoxFull, boxName }) => {
  const handleSaveBox = () => {
    onSaveBox(selectedCrayons);
  };

  return (
    <div>
      <h3>Crayon Box</h3>
      {selectedCrayons.map((crayon, index) => (
        <div
          key={index}
          style={{
            backgroundColor: crayon.hexCode,
            width: "300px",
            height: "50px",
          }}
        ></div>
      ))}
      {boxName && <p>Box Name: {boxName}</p>}
      {isBoxFull ? (
        <button onClick={handleSaveBox}>Save Box</button>
      ) : (
        <p>Box is not full yet.</p>
      )}
    </div>
  );
};

export default BoxComponent;
