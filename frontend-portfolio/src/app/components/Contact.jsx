"use client";

import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isClient, setIsClient] = useState(false); // for SSR safety

  // Initialize AOS only on client
  useEffect(() => {
    setIsClient(true);
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    const form = e.currentTarget;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        form.reset();
      } else {
        setStatusMessage(data.message || "Failed to send message");
      }
    } catch (error) {
      setStatusMessage("Server not reachable. Is backend running?");
    }

    setIsSending(false);
    setTimeout(() => setStatusMessage(""), 4000);
  };

  // Only render animations on client to avoid SSR mismatch
  if (!isClient) return null;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading" data-aos="fade-down">
        <h2 className="heading">Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info" data-aos="fade-up" data-aos-delay="100">
          <h3>Let's Work Together</h3>
          <p>
            Feel free to reach out. I’m always open to discussing new projects
            or opportunities.
          </p>

          <div className="contact-details">
            <div className="detail" data-aos="fade-right" data-aos-delay="200">
              <FaEnvelope className="icon" />
              <span>hamzaahmed121.171@gmail.com</span>
            </div>
            <div className="detail" data-aos="fade-right" data-aos-delay="300">
              <FaPhone className="icon" />
              <span>+92 335 6061685</span>
            </div>
            <div className="detail" data-aos="fade-right" data-aos-delay="400">
              <FaMapMarkerAlt className="icon" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
