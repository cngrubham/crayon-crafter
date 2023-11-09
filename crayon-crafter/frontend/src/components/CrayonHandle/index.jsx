import { useState } from "react";
import "./styles.css"

const CrayonHandle = ({
  crayon,
  handleEditCrayonProp,
  handleDeleteCrayonProp,
}) => {
  const [crayonData, setCrayonData] = useState(crayon);
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!editMode);

  const handleDelete = () => {
    handleDeleteCrayonProp(crayon._id);
  };
  console.log(crayon)
  const handleEdit = () => {
    handleEditCrayonProp(crayon._id, crayonData);
    toggleEditMode();
  };

  const crayonStyle = {
    width: "50px",
    height: "200px",
    borderRadius: "5px",
    backgroundColor: crayonData.hexCode || crayon.hexCode,
  };

  if (editMode) {
    return (
      <li>
        <input
          type="text"
          value={crayonData.crayonName}
          onChange={(e) =>
            setCrayonData({ ...crayonData, crayonName: e.target.value })
          }
        />
        <button onClick={handleEdit}>Save</button>
      </li>
    );
  }
  return (
    <div>
      <div>
        {editMode ? (
          <div>
            <input
              type="text"
              value={crayonData.crayonName}
              onChange={(e) =>
                setCrayonData({ ...crayonData, crayonName: e.target.value })
              }
            />
            <button onClick={handleEdit}>Save</button>
          </div>
        ) : (
          <div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={toggleEditMode}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrayonHandle;




