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
    width: "50px",
    height: "200px",
    borderRadius: "5px",
  };

  return (
          <div style={crayonContainerStyle}>
      <div>
        <img
          src="/images/crayon.png"
          alt="Crayon"
          style={{ ...crayonStyle, width: "50px", height: "200px" }}
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
