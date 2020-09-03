import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Social() {
  const socialMediaText = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: "expo.out" },
    });
    tl.from(socialMediaText.current, {
      opacity: 0,
      stagger: 0.2,
      delay: 0.9,
    });
  }, []);

  return (
    <div className="homepage__description__social">
      {/* first child */}
      <div
        ref={(elLink) => {
          socialMediaText.current[0] = elLink;
        }}
        className="homepage__description__social__heading"
      >
        <h1>Hangout with me @</h1>
      </div>
      {/* second child */}
      <nav className="homepage__description__social__menulist">
        <ul>
          <li
            ref={(elLink) => {
              socialMediaText.current[1] = elLink;
            }}
          >
            <a
              href="https://www.instagram.com/webvelocity/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li
            ref={(elLink) => {
              socialMediaText.current[2] = elLink;
            }}
          >
            <a
              href="https://www.linkedin.com/in/asraf-ali-6a2373186"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li
            ref={(elLink) => {
              socialMediaText.current[3] = elLink;
            }}
          >
            <a
              href="https://www.facebook.com/profile.php?id=100006630645927"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Social;
