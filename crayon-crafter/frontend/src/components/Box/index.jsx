import React, { useState } from "react";
import { deleteBox, updateBox } from "../../../utils/backend";

const BoxComponent = (props) => {
  const { setBoxName, refreshGallery } = props;
  const box = props.box || {};
  const { boxName } = box;
  const isBoxFull = box.crayons?.length >= 8;

  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(boxName);

  const handleSaveBox = () => {};

  const handleEditBoxName = () => {
    setEditMode(true);
  };

  const handleEditNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleEditNameSubmit = () => {
    updateBox(box._id, { boxName: editedName }).then(() => {
      refreshGallery();
      setEditMode(false);
    });
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedName(boxName);
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
      <hr />

      {editMode ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={handleEditNameChange}
          />
          <button onClick={handleEditNameSubmit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div>
          {boxName && <p>Box Name: {boxName}</p>}
          <button onClick={handleEditBoxName}>Edit Box Name</button>
          <button onClick={handleDeleteBox}>Delete Box</button>
        </div>
      )}
      <hr />
    </div>
  );
};

export default BoxComponent;
