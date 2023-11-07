import React from "react";

const BoxComponent = ({  selectedCrayons, onSaveBox, isBoxFull, boxName, setBoxName  }) => {
  const handleSaveBox = () => {
    onSaveBox(selectedCrayons);
  };

  const handleEditBoxName = () => {
    const updatedName = prompt('Enter the new name for the box:', boxName);
    if (updatedName !== null) {
      setBoxName(updatedName);
    }
  };

  const handleEditBoxCrayons = () => {};

  const handleDeleteBox = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this box?');
    if (isConfirmed) {
    }
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
        >
          {crayon.crayonName}
          <button onClick={() => handleEditCrayon(crayon._id)}>Edit</button>
          <button onClick={() => handleDeleteCrayon(crayon._id)}>Delete</button>
        </div>
      ))}
  
      {boxName && <p>Box Name: {boxName}</p>}
      {isBoxFull ? (
        <button onClick={handleSaveBox}>Save Box</button>
      ) : (
        <p>Box is not full yet.</p>
      )}
      <button onClick={handleEditBoxName}>Edit Box Name</button>
      <button onClick={handleDeleteBox}>Delete Box</button>
    </div>
  );
};

export default BoxComponent;
