import React from "react";
import { deleteBox, updateBox } from "../../../utils/backend";


const BoxComponent = (props) => {
  const { setBoxName, refreshGallery } = props;
  const box = props.box || {};
  const { boxName } = box;
  const isBoxFull = box.crayons?.length >= 8;
  console.log(box);

  const handleSaveBox = () => {
   
  };

  const handleEditBoxName = () => {
    const updatedName = prompt("Enter the new name for the box:", boxName);
    if (updatedName !== null) {
      updateBox(box._id, { boxName: updatedName }).then(() => {
        refreshGallery();
      });
    }
  };
 

  const handleDeleteBox = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this box?"
    );
    if (isConfirmed) {
      deleteBox(box._id).then(() => {
        refreshGallery();
      });
    }
  };

  return (
    <div>
      <hr/>
      <h3>Crayon Box</h3>

      {boxName && <p>Box Name: {boxName}</p>}
      {isBoxFull ? (
        <button onClick={handleSaveBox}>Save Box</button>
      ) : (
        <p>Box is not full yet.</p>
      )}
      <button onClick={handleEditBoxName}>Edit Box Name</button>
      <button onClick={handleDeleteBox}>Delete Box</button>
      <hr/>
    </div>
  );
};

export default BoxComponent;
