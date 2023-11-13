import anime from "animejs";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ColorPicker from "../ColorPicker";
import About from "../About";
import "./styles.css";

function HomePage() {
  const [selectedColor, setSelectedColor] = useState("#22d69d");
  const [showAbout, setShowAbout] = useState(false);
  const [borderColor, setBorderColor] = useState("#000"); 

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setBorderColor(color); 
    animateCrayons();
  };

  const animateCrayons = () => {
    const crayonElements = document.querySelectorAll(".crayon");

    anime.set(crayonElements, {
      opacity: 0,
      translateY: 10,
    });

    const animationConfig = {
      targets: crayonElements,
      opacity: 1,
      translateY: 0,
      duration: 1000,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    };

    anime(animationConfig);
  };

  const adjustColor = (color, index) => {
    const rgbColor = hexToRgb(color);
    const step = 20;
    const adjustedColor = `rgb(
      ${Math.min(rgbColor.r + index * step, 255)},
      ${Math.min(rgbColor.g + index * step, 255)},
      ${Math.min(rgbColor.b + index * step, 255)}
    )`;

    return adjustedColor;
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const createHoverAnimation = (elements) => {
    anime({
      targets: elements,
      duration: 300,
      easing: "easeOutSine",
    });
  };

  const createResetAnimation = (elements) => {
    anime({
      targets: elements,
      scale: 1,
      duration: 300,
      easing: "easeOutSine",
    });
  };
  const createContinuousAnimation = () => {
    const crayonElements = document.querySelectorAll(".crayon");
    const animationConfig = {
      targets: crayonElements,
      translateY: [0, 25],
      direction: "alternate",
      loop: true,
      duration: 1000,
      easing: "easeInOutSine",
      delay: (el, i) => i * 100,
    };

    anime(animationConfig);
  };

  const hoverAnimation = (element) => {
    anime.remove(element);
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };
  const getNumberOfCrayons = () => {
    if (window.innerWidth < 768) {
      return 6;
    } else {

      return 10;
    }
  };

  const [numberOfCrayons, setNumberOfCrayons] = useState(getNumberOfCrayons);
  useEffect(() => {
    const handleResize = () => {
      setNumberOfCrayons(getNumberOfCrayons());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


   return (
    <div className="homepage">
      <div className="homepage-container" style={{ boxShadow: `inset 0 0 10px ${borderColor}`, border: `10px solid ${borderColor}`  }}>
        {showAbout ? (
          <About />
        ) : (
          <>
            <div
              className="crayon-row"
              onMouseEnter={() => hoverAnimation(".crayon")}
              onMouseLeave={() => createContinuousAnimation()}
            >
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-amber-300 font-custom font-black with-outline">Crayon Crafter</h1>
              {Array.from({ length: numberOfCrayons }).map((_, index) => (
                <div
                  key={index}
                  className="crayon"
                  style={{ backgroundColor: adjustColor(selectedColor, index) }}
                  onMouseEnter={() =>
                    createHoverAnimation(`.crayon:nth-child(${index + 1})`)
                  }
                  onMouseLeave={() =>
                    createResetAnimation(`.crayon:nth-child(${index + 1})`)
                  }
                >
                  <Link to="/create">          
                    <img src="/images/crayon.png" alt="Crayon" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="color-picker">
              <ColorPicker onColorSelect={handleColorSelect} />
            </div>
          </>
        )}
        <button className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded" style={{ boxShadow: `0 0 12px ${borderColor}` }} onClick={toggleAbout}>{showAbout ? "Close" : "About"}</button>
      </div>
    </div>
  );
}

export default HomePage;