import React from "react";

const CrayonDisplay = ({ crayonId, crayonName, hexCode }) => {
    console.log(crayonId, crayonName, hexCode)
  return (
    <div>
      <p>Crayon ID: {crayonId}</p>
      <p>Crayon Name: {crayonName}</p>
      <p>Hex Code: {hexCode}</p>
    </div>
  );
};

export default CrayonDisplay;
