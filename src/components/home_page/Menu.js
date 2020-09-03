import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Menu() {
  const menuLinks = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 3, ease: "expo.out" },
    });
    tl.from(menuLinks.current, {
      opacity: 0,
      stagger: 0.3,
      delay: 0.5,
    });
  }, []);

  return (
    <nav className="homepage__menu">
      <ul>
        <li
          ref={(elMenu) => {
            menuLinks.current[0] = elMenu;
          }}
        >
          <span>01</span>
          <Link to="/about">About</Link>
        </li>
        <li
          ref={(elMenu) => {
            menuLinks.current[1] = elMenu;
          }}
        >
          <span>02</span>
          <Link to="/projects">Projects</Link>
        </li>
        <li
          ref={(elMenu) => {
            menuLinks.current[2] = elMenu;
          }}
        >
          <span>03</span>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
