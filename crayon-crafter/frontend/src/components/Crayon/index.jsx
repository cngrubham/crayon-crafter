import React, { useState } from "react";
import { updateCrayon, deleteCrayon } from "../../../utils/backend";

const CrayonComponent = ({
  hexCode,
  onCreateCrayon,
  isBoxFull,
  selectedCrayons,
  setSelectedCrayons,
}) => {
  const [crayonName, setCrayonName] = useState("");

  const [editCrayonId, setEditCrayonId] = useState(null);
  const [editCrayonName, setEditCrayonName] = useState("");
  const [editCrayonColor, setEditCrayonColor] = useState("");

  const handleCreateCrayon = () => {
    const defaultCrayonName = "Unnamed Crayon";
    const finalCrayonName = crayonName.trim() || defaultCrayonName;
    onCreateCrayon(hexCode, finalCrayonName);
    setCrayonName("");
  };

  const handleEditCrayon = (id) => {
    const updatedName = prompt(
      "Enter the new name for the crayon:",
      crayonName
    );
    if (updatedName !== null) {
      const updatedCrayons = selectedCrayons.map((crayon) =>
        crayon.id === id ? { ...crayon, name: updatedName } : crayon
      );
      setSelectedCrayons(updatedCrayons);
    }
  };

  const handleDeleteCrayon = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this crayon?"
    );
    if (isConfirmed) {
      deleteCrayon(id)
        .then(() => {
          const updatedCrayons = selectedCrayons.filter(
            (crayon) => crayon.id !== id
          );
          setSelectedCrayons(updatedCrayons);
        })
        .catch((error) => console.error("Error deleting crayon:", error));
    }
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
          <button onClick={handleCreateCrayon}>Create Crayon</button>
        </div>
      )}
    </div>
  );
};

export default CrayonComponent;
