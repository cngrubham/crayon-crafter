import { useState } from "react";

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
    <li>
      <p>{crayon.crayonName}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={toggleEditMode}>Edit</button>
    </li>
  );
};

export default CrayonHandle;
