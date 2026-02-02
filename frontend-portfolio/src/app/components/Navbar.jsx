import { useState, useEffect } from "react";
import {
  BiHomeCircle,
  BiUserCircle,
  BiFile,
  BiBriefcaseAlt2,
  BiImage,
  BiSend,
  BiGrid,
  BiX,
} from "react-icons/bi";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navbarHeight = 60;
  const lastScrollY = { current: 0 };

  // Scroll listener for hiding navbar & active section
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHideNavbar(y > lastScrollY.current && y > 50);
      lastScrollY.current = y;

      const sections = [
        "home",
        "about",
        "skills",
        "services",
        "portfolio",
        "contact",
      ];
      const scrollPosition = y + navbarHeight + 10;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { icon: <BiHomeCircle />, label: "Home", to: "#home" },
    { icon: <BiUserCircle />, label: "About", to: "#about" },
    { icon: <BiFile />, label: "Skills", to: "#skills" },
    { icon: <BiBriefcaseAlt2 />, label: "Services", to: "#services" },
    { icon: <BiImage />, label: "Portfolio", to: "#portfolio" },
    { icon: <BiSend />, label: "Contact Me", to: "#contact" },
  ];

  const hoverColor = "#6E57E0";
  const currentLinkColor = (to, i) =>
    activeSection === to.substring(1) || hoveredIndex === i
      ? hoverColor
      : "#191627";

  const handleClick = (to) => {
    const el = document.getElementById(to.substring(1));
    if (el) {
      window.scrollTo({ top: el.offsetTop - navbarHeight, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div
      className={`navbar ${hideNavbar ? "hidden" : ""}`}
      style={{
        backgroundColor: "#fff",
        borderTop: `1px solid #ccc`,
        height: `${navbarHeight}px`,
        transition: "background-color 0.3s ease, transform 0.3s ease",
      }}
    >
      <div className="logo">Hamza Ahmed</div>

      <div
        className={`navlinks ${menuOpen ? "active" : ""}`}
        style={{ backgroundColor: "#fff" }}
      >
        <ul>
          {navItems.map(({ icon, label, to }, i) => (
            <li key={i}>
              <a
                href={to}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(to);
                }}
                className={activeSection === to.substring(1) ? "active" : ""}
                style={{
                  color: currentLinkColor(to, i),
                  transition: "color 0.2s ease",
                }}
              >
                <span className="nav-icon-mobile" style={{ fontSize: 24 }}>
                  {icon}
                </span>
                <br />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="icons">
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <BiX size={24} /> : <BiGrid size={24} />}
        </div>
      </div>
    </div>
  );
}
