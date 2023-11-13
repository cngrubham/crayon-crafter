import { useState } from "react";

const About = () => {
  return (
    <div className="text-center mt-8">
      <div className="mx-auto max-w-2xl">
        <div className="mt-4 p-4 bg-amber-200 rounded">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-800 p-4">
            Welcome to the Crayon Crafter! We understand the joy and creativity
            that crayons bring to art, but we also recognize a common challenge
            faced by artists and crafters. Traditional crayon sets often fall
            short in providing a diverse range of colors. Artists find
            themselves restricted by conventional palettes that may not fully
            capture the color combinations needed for their creations. Our
            mission is to break free from these limitations and empower artists
            to choose their own palette from a spectrum of colors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
