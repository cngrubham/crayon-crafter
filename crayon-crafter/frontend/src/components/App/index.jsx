import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Nav from "../Nav";
import HomePage from "../HomePage"
import CreatePage from "../CreatePage";
import BoxGallery from "../BoxGallery";
import { getCrayons, getBoxes } from "../../../utils/backend";

function App() {

  const [crayons, setCrayons] = useState([]);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const crayonData = await getCrayons();
        setCrayons(crayonData);
        
        const boxData = await getBoxes();
        setBoxes(boxData);
      } catch (error) {
        console.error("Error fetching data from the database:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
    <Nav />
     <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/create"
          element={
            <CreatePage
              crayons={crayons}
            />
          }
        />
        <Route
          path="/boxes"
          element={
            <BoxGallery
              boxes={boxes}
            />
          }
        />
      </Routes>
        </div>
  );
}

export default App;
