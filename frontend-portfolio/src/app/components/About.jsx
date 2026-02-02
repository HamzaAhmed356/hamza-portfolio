"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/About.css";
import AboutBox from "./AboutBox";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // animation happens only once
    });
  }, []);

  // Public paths
  const htmlIcon = "/assets/images/html.webp";
  const briefcaseIcon = "/assets/images/briefcase.webp";
  const userIcon = "/assets/images/user.webp";
  const resumePath = "/resume/Muhammad_Zeeshan_Haider_Resume.pdf";

  return (
    <section className="about-section" id="about">
      <h1 className="about-heading">About Me</h1>

      <div className="about-container">
        {/* Text Content */}
        <div className="about-content" data-aos="fade-right">
          <p className="role">Passionate Web Developer</p>

          <p className="content">
            I’m a fast-learning MERN stack developer with expertise in both
            front-end development using React and back-end services with
            Node.js, Express, and MongoDB...
          </p>

          <div className="about-buttons">
            <button className="btnGetInTouch">Get in Touch</button>

            <a
              className="btnResume"
              href={resumePath}
              download="Muhammad_Zeeshan_Haider_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Resume
            </a>
          </div>
        </div>

        {/* About Boxes */}
        <div className="about-boxes">
          <div data-aos="zoom-in" data-aos-delay="0">
            <AboutBox
              image={htmlIcon}
              title="Web Development"
              description="Developing modern, full-stack web applications with a focus on performance, scalability, and user accessibility."
            />
          </div>

          <div data-aos="zoom-in" data-aos-delay="150">
            <AboutBox
              image={briefcaseIcon}
              title="UI/UX Design"
              description="Crafting clean, user-centered interfaces that balance aesthetics with usability to deliver smooth user experiences."
            />
          </div>

          <div data-aos="zoom-in" data-aos-delay="300">
            <AboutBox
              image={userIcon}
              title="Project Management"
              description="Managing and delivering end-to-end solutions using agile workflows, from ideation and design to deployment and iteration."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
