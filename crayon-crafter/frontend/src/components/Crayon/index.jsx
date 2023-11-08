import React, { useState } from "react";

const CrayonComponent = ({
  hexCode,
  onCreateCrayon,
  isBoxFull,
  selectedCrayons,
}) => {
  const [crayonName, setCrayonName] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleCreateCrayon = () => {
    const defaultCrayonName = "Unnamed Crayon";
    const finalCrayonName = crayonName.trim() || defaultCrayonName;

    if (editIndex === -1) {
      onCreateCrayon(hexCode, finalCrayonName);
    } else {
      selectedCrayons[editIndex].crayonName = finalCrayonName;
      setEditIndex(-1);
    }

    setCrayonName("");
  };

  const handleEditCrayon = (index) => {
    setEditIndex(index);
    setCrayonName(selectedCrayons[index].crayonName);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: hexCode, width: "50px", height: "50px" }}
      ></div>
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
          <button onClick={handleCreateCrayon}>
            {editIndex === -1 ? "Create Crayon" : "Update Crayon"}
          </button>
        </div>
      )}
      <ul>
        {selectedCrayons &&
          selectedCrayons.map((crayon, index) => (
            <li key={index}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={crayonName}
                  onChange={(e) => setCrayonName(e.target.value)}
                />
              ) : (
                crayon.crayonName
              )}
              {editIndex === index ? (
                <button onClick={handleCreateCrayon}>Save</button>
              ) : (
                <button onClick={() => handleEditCrayon(index)}>Edit</button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CrayonComponent;
