import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>Train Like a Legend with</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          Broly<span className="orangeText">Fitness</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        Embark on a transformative journey that{" "}
        <span className="orangeText  font-medium">amplifies your strength</span>
        , harnesses unparalleled motivation, and{" "}
        <span className="orangeText font-medium">
          cultivates an unwavering mindset
        </span>{" "}
        dedicated to achieving extraordinary feats of athleticism and endurance.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Get Started"}
      ></Button>
    </div>
  );
};

export default Hero;
