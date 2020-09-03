import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Intro() {
  const intro = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: "expo.out" },
    });
    tl.from(intro.current, {
      opacity: 0,
      delay: 0.6,
    });
  }, []);

  return (
    <div
      ref={(aboutintro) => {
        intro.current = aboutintro;
      }}
      className="aboutpage__intro"
    >
      <p>
        Hi, I’m <span>Asraf</span>. Nice to meet you.
      </p>
    </div>
  );
}

export default Intro;
