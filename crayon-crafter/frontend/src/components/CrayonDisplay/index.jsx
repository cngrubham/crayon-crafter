const CrayonDisplay = ({
  crayon,
  handleEditCrayon,
  handleDeleteCrayon,
  crayonData,
  setCrayonData,
  editIndex,
  index,
}) => {
  return (
    <li>
      {editIndex === index ? (
        <input
          type="text"
          value={crayonData.crayonName}
          onChange={(e) =>
            setCrayonData({ ...crayonData, crayonName: e.target.value })
          }
        />
      ) : (
        crayon.crayonName
      )}
      {editIndex === index ? (
        <button onClick={handleCreateCrayon}>Save</button>
      ) : (
        <>
          <button onClick={() => handleDeleteCrayon(crayon.id)}>Delete</button>
          <button onClick={() => handleEditCrayon(index)}>
            {editIndex === index ? "Save" : "Edit"}
          </button>
        </>
      )}
    </li>
  );
};

export default CrayonDisplay;
