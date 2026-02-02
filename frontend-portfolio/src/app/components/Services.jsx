import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Services.css";
import { FaCode, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
  },
];

const Services = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);

  return (
    <div className="services-container" id="services">
      <h1 className="service-heading" data-aos="fade-down">
        My Services
      </h1>

      <div className="cards-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay={index * 150} // staggered animation
          >
            <div className="card-icon">{service.icon}</div>
            <h2 className="card-title">{service.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
