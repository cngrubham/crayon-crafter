import { useState } from "react";

const About = () => {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div>
      <button onClick={toggleAbout}>{showAbout ? "Close" : "About"}</button>
      {showAbout && (
        <div>
          <h2>About Us</h2>
          <p>
            Welcome to the Crayon Crafter! understand the joy and creativity
            that crayons bring to art, but we also recognize a common challenge
            faced by artists and crafters. Traditional crayon sets often fall short in
            providing a diverse range of colors. Artists find themselves
            restricted by conventional palettes that may not fully capture the
            color combinations needed for their creations. Our mission is
            to break free from these limitations and empower artists to choose
            their own palette from spectrum of colors.
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
