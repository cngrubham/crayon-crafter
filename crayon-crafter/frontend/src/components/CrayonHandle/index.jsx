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
    handleDeleteCrayonProp(crayonData._id);
  };
  console.log(crayon)
  const handleEdit = () => {
    handleEditCrayonProp(crayonData._id, crayonData);
    toggleEditMode();
  };

  const crayonStyle = {
    width: "50px",
    height: "200px",
    borderRadius: "5px",
    backgroundColor: crayonData.hexCode || crayon.hexCode,
  };

  return (
    <div className="crayon-container">
      
        <div
        style={{
          backgroundImage: `url('/images/crayon.png')`,
          backgroundColor: crayonData.hexCode,
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          width: "50px",
          height: "218px",
        }}
      >
        <div className="crayon-info">
        {/* <p>ID: {crayon._id}</p> */}
        <p> {crayonData.crayonName}</p>
        {/* <p>Hex Code: {crayonData.hexCode || crayon.hexCode}</p> */}

      </div>
      <div className="bottom-form-container">
        {editMode ? (
          <div className="edit-form">
            <input className="input-field"
              type="text"
              value={crayonData.crayonName}
              maxLength={11} 
              onChange={(e) =>
                setCrayonData({ ...crayonData, crayonName: e.target.value })
              }
              />
            <button onClick={handleEdit}>Save</button>
        </div>
        ) : (
          <div className="crayon-actions">
            <button onClick={handleDelete}>Delete</button>
            <button onClick={toggleEditMode}>Edit</button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default CrayonHandle;





