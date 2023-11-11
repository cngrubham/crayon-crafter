import React, { useState } from "react";
import { deleteBox, updateBox } from "../../../utils/backend";
import CrayonDisplay from "../CrayonDisplay";
import CrayonHandle from "../CrayonHandle";
import "./styles.css";

const BoxComponent = (props) => {
  const { setBoxName, refreshGallery, isGalleryPage } = props;
  const box = props.box || {};
  const { boxName, crayons } = box;

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
    <div className="box-style">
      {crayons && crayons.length > 0 && (
        <div className="crayon-grid">
          {crayons.map((crayon) => (
            <div key={crayon._id} className="crayon-container">
              <CrayonDisplay
                key={crayon._id}
                crayonId={crayon._id}
                crayonName={crayon.crayonName}
                hexCode={crayon.hexCode}
              />
              <div>
                <p>{crayon.crayonName}</p>
              </div>
            </div>
          ))}
        </div>
      )}
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
          {isGalleryPage && (
            <>
              <button onClick={handleEditBoxName}>Edit</button>
              <br />
              <button onClick={handleDeleteBox}>Delete</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BoxComponent;
