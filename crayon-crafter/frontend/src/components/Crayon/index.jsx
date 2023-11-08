import React, { useState } from "react";
import { createCrayon, updateCrayon, deleteCrayon } from "../../../utils/backend";

const CrayonComponent = ({
  hexCode,
  onCreateCrayon,
  isBoxFull,
  selectedCrayons,
  updateCrayon,
  deleteCrayon,
  handleDeleteCrayonProp,
  handleEditCrayonProp,
}) => {
  const [crayonData, setCrayonData] = useState({
    id: null,
    crayonName: "",
  });
  const [crayonName, setCrayonName] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editMode, setEditMode] = useState(false);


  const handleCreateCrayon = () => {
    const defaultCrayonName = "Unnamed Crayon";
    const finalCrayonName = crayonData.crayonName.trim() || defaultCrayonName;

    if (editIndex === -1) {
      onCreateCrayon(hexCode, finalCrayonName);
    } else {
      handleEditCrayonProp(crayonData);
      setEditIndex(-1);
    }

    setCrayonData({
      id: null,
      crayonName: "",
    });
  };

  const handleEditCrayon = (index) => {
    setEditIndex(index);
    const selectedCrayon = selectedCrayons[index];
    setCrayonData({
      id: selectedCrayon.id,
      crayonName: selectedCrayon.crayonName,
    });
  };

  const handleDeleteCrayon = (crayonId) => {
    handleDeleteCrayonProp(crayonId);
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
            value={crayonData.crayonName}
            onChange={(e) =>
              setCrayonData({ ...crayonData, crayonName: e.target.value })
            }
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
                  value={crayonData.crayonName}
                  onChange={(e) =>
                    setCrayonData({ ...crayonData, crayonName: e.target.value })
                  }
                />
              ) : (
                crayon.crayonName
              )}
              {editIndex === index ? (
                <button onClick={handleCreateCrayon}>Save</button>
              ) : (
                <>
                  <button onClick={() => handleDeleteCrayon(crayon.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleEditCrayon(index)}>
                    {editIndex === index ? "Save" : "Edit"}
                  </button>
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CrayonComponent;