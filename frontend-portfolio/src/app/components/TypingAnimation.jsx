"use client";
import React, { useEffect, useState } from "react";
import "../styles/TypingAnimation.css";

const texts = [
  "Backend Developer",
  "React Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
  "JavaScript Enthusiast",
  "Programmer",
];

const TypingAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setFade(false);

      setTimeout(() => {
        // Change text and fade in
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500); // fade out duration (matches CSS)
    }, 2000); // text display duration

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`fade-text ${fade ? "fade-in" : "fade-out"}`}>
      {texts[currentIndex]}
    </span>
  );
};

export default TypingAnimation;
