import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Social from "./Social";

function Description() {
  const introText = useRef([]);

  let tl = gsap.timeline({
    defaults: { duration: 2, ease: "expo.out" },
  });

  useEffect(() => {
    tl.from(introText.current, {
      y: 300,
      stagger: 0.2,
    });
  });

  return (
    <div className="homepage__description">
      {/* first child */}
      <div className="homepage__description__linewrapper">
        <div
          ref={(text) => {
            introText.current[0] = text;
          }}
          className="homepage__description__linewrapper__text"
        >
          <h1>HELLO THERE !</h1>
        </div>
      </div>

      {/* second child */}
      <div className="homepage__description__linewrapper">
        <div
          ref={(text) => {
            introText.current[1] = text;
          }}
          className="homepage__description__linewrapper__text"
        >
          <h1>I’m Asrafali</h1>
        </div>
      </div>

      {/* third child */}
      <div className="homepage__description__linewrapper">
        <div
          ref={(text) => {
            introText.current[2] = text;
          }}
          className="homepage__description__linewrapper__text"
        >
          <p>
            Web developer with good knowledge on the front end. I like spending
            time fixing small details and improving web applications, and want
            to create an interactive web page. I have always been eager to learn
            from anyone and everyone.
          </p>
        </div>
      </div>

      {/* fourth child */}
      <Social />
    </div>
  );
}

export default Description;
