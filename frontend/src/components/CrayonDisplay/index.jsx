import React from "react";

const CrayonDisplay = ({ crayonId, crayonName, hexCode }) => {
  const crayonContainerStyle = {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // gap: "10px",
  };

  const crayonStyle = {
    backgroundColor: hexCode,
    width: "45px",
    height: "200px",
  
  };

  return (
          <div style={crayonContainerStyle}>
      <div>
        <img
          src="/images/crayon.png"
          alt="Crayon"
          style={{ ...crayonStyle, width: "45px", height: "200px" }}
        />
      </div>
      <div>
        {/* <p>Crayon ID: {crayonId}</p> */}
        {/* <p> {crayonName}</p> */}
        {/* <p>Hex Code: {hexCode}</p> */}
      </div>
    </div>
  );
};

export default CrayonDisplay;
