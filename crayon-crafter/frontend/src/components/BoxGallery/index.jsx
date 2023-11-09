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

  return (
    <div>
      <h1>Box Gallery</h1>
      {boxes.map((box) => (
        <BoxComponent
          key={box._id}
          box={box}
        />
      ))}
    </div>
  );
};

export default BoxGallery;
