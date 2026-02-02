"use client";

import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";
import ProjectBox from "./ProjectBox";
import ProjectSkeleton from "./ProjectSkeleton";

const projects = [
  {
    image: "/assets/projects/project2.webp",
    title: "New Year Vibes",
    skills: [
      "React Js",
      "CSS",
      "canvas-confetti",
      "react-snowfall",
      "Vercel Analytics",
      "Vite",
    ],
    description:
      "A modern Freelancing Platform where where Skilled Person can earn by providing their services ",
    link: "https://github.com/HamzaAhmed356/skillverse-backend.git",
    codeLink: "https://github.com/HamzaAhmed356/skillverse-backend.git",
  },
];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data/image loading delay
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="project-section">
      <h1 className="portfolio-heading">Currently Working Projects</h1>

      <div className="project-container">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, index) => <ProjectSkeleton key={`skeleton-${index}`} />)
          : projects.map((project, index) => (
              <ProjectBox
                key={index}
                image={project.image}
                title={project.title}
                skills={project.skills}
                description={project.description}
                link={project.link}
                codeLink={project.codeLink}
              />
            ))}
      </div>
    </section>
  );
}
