import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Languages() {
  const language = useRef([]);
  const heading = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: "expo.out" },
    });

    tl.from(heading.current, {
      opacity: 0,
      delay: 0.9,
    }).from(language.current, {
      y: 100,
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="aboutpage__work__wrapper__languages">
      <div
        ref={(head) => {
          heading.current = head;
        }}
        className="aboutpage__work__wrapper__languages__heading"
      >
        <h1>Technologies</h1>
      </div>

      <div className="aboutpage__work__wrapper__languages__outer">
        <div
          ref={(elang) => {
            language.current[0] = elang;
          }}
          className="aboutpage__work__wrapper__languages__outer__inner"
        >
          <h1>HTML5</h1>
        </div>
      </div>

      <div className="aboutpage__work__wrapper__languages__outer">
        <div
          ref={(elang) => {
            language.current[1] = elang;
          }}
          className="aboutpage__work__wrapper__languages__outer__inner"
        >
          <h1>CSS3</h1>
        </div>
      </div>

      <div className="aboutpage__work__wrapper__languages__outer">
        <div
          ref={(elang) => {
            language.current[2] = elang;
          }}
          className="aboutpage__work__wrapper__languages__outer__inner"
        >
          <h1>Javascript</h1>
        </div>
      </div>

      <div className="aboutpage__work__wrapper__languages__outer">
        <div
          ref={(elang) => {
            language.current[3] = elang;
          }}
          className="aboutpage__work__wrapper__languages__outer__inner"
        >
          <h1>Sass (Scss)</h1>
        </div>
      </div>

      <div className="aboutpage__work__wrapper__languages__outer">
        <div
          ref={(elang) => {
            language.current[4] = elang;
          }}
          className="aboutpage__work__wrapper__languages__outer__inner"
        >
          <h1>Bootstrap</h1>
        </div>
      </div>

      <div className="aboutpage__work__wrapper__languages__outer">
        <div
          ref={(elang) => {
            language.current[5] = elang;
          }}
          className="aboutpage__work__wrapper__languages__outer__inner"
        >
          <h1>JQuery</h1>
        </div>
      </div>

      <div className="aboutpage__work__wrapper__languages__outer">
        <div
          ref={(elang) => {
            language.current[6] = elang;
          }}
          className="aboutpage__work__wrapper__languages__outer__inner"
        >
          <h1>Reactjs</h1>
        </div>
      </div>
    </div>
  );
}

export default Languages;
