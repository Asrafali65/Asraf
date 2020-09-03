import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Intro from "./Intro";
import Work from "./Work";

function About() {
  const title = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: "expo.out" },
    });
    tl.from(title.current, {
      y: 300,
    });
  }, []);
  return (
    <div className="aboutpage">
      {/* heading */}
      <div className="aboutpage__heading-wrapper">
        <div
          ref={(etitle) => {
            title.current = etitle;
          }}
          className="aboutpage__heading-wrapper__heading"
        >
          <h1>
            <sup>&lt;h1&gt;</sup>
            About
            <sub>&lt;/h1&gt;</sub>
          </h1>
        </div>
      </div>

      {/* component */}
      <Intro />
      <Work />
    </div>
  );
}

export default About;
