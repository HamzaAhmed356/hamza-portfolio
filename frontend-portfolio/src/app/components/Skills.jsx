import React, { memo, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Skills.css";
import SkillCard from "./SkillCard";
import { skillsData } from "../data/skillsData";

function Skills() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);

  return (
    <section className="skill-section" id="skills">
      <h1 className="skill-heading" data-aos="fade-down">
        My Skills
      </h1>

      <div className="skill-container">
        {skillsData.map((category, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger effect
          >
            <SkillCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(Skills);
