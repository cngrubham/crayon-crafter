import React, { useState, useEffect } from "react";
import BoxComponent from "../Box";
import { getBoxes } from "../../../utils/backend";
import "./styles.css"

const BoxGallery = ({}) => {
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

  const refreshGallery = async () => {
    try {
      const boxesData = await getBoxes();
      setBoxes(boxesData);
    } catch (error) {
      console.error("Error refreshing boxes:", error);
    }
  };

return (
  <div className="gallery-page">
  <h1>All Boxes</h1>
  <div className="box-gallery">
    {boxes.map((box) => (
      <BoxComponent
        key={box._id}
        box={box}
        refreshGallery={refreshGallery}
        isGalleryPage={true}
        className="box-component" 
      />
    ))}
    </div>
  </div>
);
};


export default BoxGallery;
