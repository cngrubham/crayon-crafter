import React, { useState } from "react";
import { updateCrayon, deleteCrayon } from "../../../utils/backend";
import CrayonDisplay from "../CrayonDisplay";

const CrayonComponent = ({
  hexCode,
  onCreateCrayon,
  isBoxFull,
  selectedCrayons,
  handleEditCrayonProp,
  handleDeleteCrayonProp,
}) => {
  const [crayonData, setCrayonData] = useState({
    id: null,
    crayonName: "",
  });
  const [editIndex, setEditIndex] = useState(-1);

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
  const toggleCrayonEdit = (index) => {
    setEditIndex(index);
  };
  const handleEditCrayon = (index) => {
    const selectedCrayon = selectedCrayons[index];
    console.log(selectedCrayon);
    const crayonUpdateInfo = {
      id: selectedCrayon.id,
      crayonName: selectedCrayon.crayonName,
    };
    setCrayonData(crayonUpdateInfo);
    updateCrayon(selectedCrayon.id, crayonUpdateInfo);
  };

  const handleDeleteCrayon = (id) => {
    console.log("Deleting crayon with id:", id);
    handleDeleteCrayonProp(id);
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
            <CrayonDisplay
              key={index}
              crayon={crayon}
              handleEditCrayon={handleEditCrayon}
              handleDeleteCrayon={handleDeleteCrayon}
              crayonData={crayonData}
              setCrayonData={setCrayonData}
              editIndex={editIndex}
              index={index}
            />
          ))}
      </ul>
    </div>
  );
};

export default CrayonComponent;
