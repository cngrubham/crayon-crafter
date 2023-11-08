

const CrayonDisplay = ({ crayons, onEditCrayon, onDeleteCrayon }) => {
  return (
    <div>
      {crayons.map((crayon) => (
        <div
          key={crayon.id}
          style={{
            backgroundColor: crayon.hexCode,
            width: "300px",
            height: "50px",
          }}
        >
          {crayon.crayonName}
          <button onClick={() => onEditCrayon(crayon.id)}>Edit</button>
          <button onClick={() => onDeleteCrayon(crayon.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CrayonDisplay;
