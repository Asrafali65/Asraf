import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import Samsung from "../../assets/images/samsung.jpg";
import Spotify from "../../assets/images/spotify.jpg";
import Shopping from "../../assets/images/shoppingcart.jpg";
import Covid from "../../assets/images/covid.png";

function Listproject() {
  const lineWrapperProject = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 1, ease: "expo.out" },
    });

    tl.from(lineWrapperProject.current, {
      y: 100,
      stagger: 0.2,
      delay: 0.4,
    });
  }, []);

  return (
    <div className="projectpage__lists">
      <a
        className="projectpage__lists__list"
        href="https://codepen.io/Introvert6/pen/jObZXXL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectpage__lists__list__wrapper">
          <div
            ref={(project) => {
              lineWrapperProject.current[0] = project;
            }}
            className="projectpage__lists__list__wrapper__linewrapper"
          >
            <h1 className="mqt">Shopping Cart</h1>
            <img src={Shopping} alt="" />
          </div>
        </div>
      </a>

      <a
        className="projectpage__lists__list"
        href="http://introvert.epizy.com/corona-full%20list%20tracker/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectpage__lists__list__wrapper">
          <div
            ref={(project) => {
              lineWrapperProject.current[1] = project;
            }}
            className="projectpage__lists__list__wrapper__linewrapper"
          >
            <h1 className="mqt">Covid19 Tracker</h1>
            <img src={Covid} alt="" />
          </div>
        </div>
      </a>

      <a
        className="projectpage__lists__list"
        href="https://codepen.io/Introvert6/pen/MWwmzNV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectpage__lists__list__wrapper">
          <div
            ref={(project) => {
              lineWrapperProject.current[2] = project;
            }}
            className="projectpage__lists__list__wrapper__linewrapper"
          >
            <h1 className="mqt">Spotify</h1>
            <img src={Spotify} alt="" />
          </div>
        </div>
      </a>

      <a
        className="projectpage__lists__list"
        href="https://codepen.io/Introvert6/pen/wvKepPQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectpage__lists__list__wrapper">
          <div
            ref={(project) => {
              lineWrapperProject.current[3] = project;
            }}
            className="projectpage__lists__list__wrapper__linewrapper"
          >
            <h1 className="mqt">Samsung Device Care Animation</h1>
            <img src={Samsung} alt="" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default Listproject;
