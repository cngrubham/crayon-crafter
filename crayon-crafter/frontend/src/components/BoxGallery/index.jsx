import React, { useState, useEffect } from "react";
import BoxComponent from "../Box";
import {
  getBoxes, 
  updateCrayon, 
  deleteCrayon, 
} from "../../../utils/backend";

const BoxGallery = ({  }) => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    async function fetchBoxes() {
      try {
        const boxesData = await getBoxes();
        setBoxes(boxesData);
      } catch (error) {
        console.error("Error fetching boxes:", error);
      }
    }

    fetchBoxes();
  }, []); 

  const handleEditCrayon = async (boxId, crayonId, updatedCrayonData) => {
    try {
      const updatedCrayon = await updateCrayon(crayonId, updatedCrayonData);
    } catch (error) {
      console.error("Error updating crayon:", error);
    }
  };

  const handleDeleteCrayon = async (boxId, crayonId) => {
    try {
      await deleteCrayon(crayonId);
    } catch (error) {
      console.error("Error deleting crayon:", error);
    }
  };

  return (
    <div>
      <h1>Box Gallery</h1>
      {boxes.map((box) => (
        <BoxComponent
          key={box.id}
          box={box}
          onEditCrayon={(crayonId, updatedCrayonData) =>
            handleEditCrayon(box.id, crayonId, updatedCrayonData)
          }
          onDeleteCrayon={(crayonId) => handleDeleteCrayon(box.id, crayonId)}
        />
      ))}
    </div>
  );
};

export default BoxGallery;
