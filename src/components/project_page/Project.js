import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Listproject from "./List_project";

function Project() {
  const projectHeading = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: "expo.out" },
    });

    tl.from(projectHeading.current, {
      opacity: 0,
      delay: 0.3,
    });
  }, []);
  return (
    <div className="projectpage">
      <div className="projectpage__heading">
        <h1
          ref={(head) => {
            projectHeading.current = head;
          }}
        >
          <sup>&lt;h1&gt;</sup>
          Project
          <sub>&lt;/h1&gt;</sub>
        </h1>
      </div>

      <Listproject />
    </div>
  );
}

export default Project;
