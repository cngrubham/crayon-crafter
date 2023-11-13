import React, { useState } from "react";
import CrayonHandle from "../CrayonHandle";
import "./styles.css"

const CrayonComponent = ({
  hexCode,
  onCreateCrayon,
  isBoxFull,
  selectedCrayons,
  handleEditCrayonProp,
  handleDeleteCrayonProp,
}) => {
  const [crayonName, setCrayonName] = useState("");

  const handleCreateCrayon = () => {
    const name = crayonName ? crayonName.trim() : "Unnamed";
    onCreateCrayon(hexCode, name);
    setCrayonName("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        style={{
          backgroundImage: `url('/images/crayon1.png')`,
          backgroundColor: hexCode,
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          width: "218px",
          height: "50px",
        }}
      ></div>
      {isBoxFull ? (
        <p>Box is Full</p>
      ) : (
        <div className="create-crayon-form">
          <input
            type="text"
            maxLength={11} 
            placeholder="Enter Crayon Name"
            value={crayonName}
            onChange={(e) => setCrayonName(e.target.value)}
          />
          <button className="create-button" onClick={handleCreateCrayon}>Create Crayon</button>
        </div>
      )}
      <ul className="crayon-grid">
        {selectedCrayons &&
          selectedCrayons.map((crayon, index) => (
            
            <CrayonHandle
              key={index}
              crayon={crayon}
              handleEditCrayonProp={handleEditCrayonProp}
              handleDeleteCrayonProp={handleDeleteCrayonProp}
            />
          ))}
      </ul>
    </div>
  );
};

export default CrayonComponent;
