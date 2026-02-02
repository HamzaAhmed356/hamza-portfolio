"use client";

import "../styles/HeroSection.css";
import TypingAnimation from "../components/TypingAnimation";
import Image from "next/image";

export default function HeroSection() {
  const socialLinks = [
    {
      href: "https://github.com/HamzaAhmed356",
      img: "/assets/images/github.webp",
      alt: "GitHub",
      title: "GitHub profile",
    },
  ];

  const BlogImage = "/assets/images/profilepic.png";
  const arrow = "/assets/images/arrow.webp";

  return (
    <section className="hero-section">
      {/* Social Icons */}
      <div className="social-icons">
        {socialLinks.map(({ href, img, alt, title }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
          >
            <Image src={img} alt={alt} title={title} width={25} height={25} />
          </a>
        ))}
      </div>

      {/* Hero Container */}
      <div className="hero-container">
        {/* Text Content */}
        <div className="content-container">
          <p className="hello-text">Hello, I'm</p>
          <p className="name-animation">Hamza Ahmed</p>
          <div className="job-title">
            <TypingAnimation />
          </div>
          <p className="briefing">
            Interested in full-stack MERN development. Building scalable,
            responsive, and user-friendly web applications from frontend to
            backend.
          </p>
          <div className="btnContact">
            <a href="#contact">
              Contact Me{" "}
              <Image src={arrow} alt="arrow icon" width={10} height={10} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="blob-image">
          <Image
            src={BlogImage}
            alt="Profile"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}
