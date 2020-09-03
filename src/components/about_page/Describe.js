import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Describe() {
  const description = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: "expo.out" },
    });
    tl.from(description.current, {
      opacity: 0,
      stagger: 0.2,
      delay: 0.7,
    });
  }, []);

  return (
    <div className="aboutpage__work__wrapper__content">
      <h1
        ref={(describe) => {
          description.current[0] = describe;
        }}
      >
        Front-end Developer
      </h1>
      <p
        ref={(describe) => {
          description.current[1] = describe;
        }}
      >
        I like to code things from scratch, and enjoy bringing ideas to life in
        the browser.
      </p>
    </div>
  );
}

export default Describe;
