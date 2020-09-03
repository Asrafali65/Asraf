import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import Myimg from "../../assets/images/main_picture.jpg";

function Contact() {
  const collections = useRef([]);
  const heading = useRef([]);
  const image = useRef(null);

  gsap.registerPlugin(CSSRulePlugin);

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: "expo.out" },
    });
    let hl = gsap.timeline({
      defaults: { duration: 1, ease: "expo.out" },
    });

    let irl = gsap.timeline({
      defaults: { duration: 2, ease: "power2.out" },
    });

    let imgReveal = CSSRulePlugin.getRule(".contactpage__image-wrapper:before");

    hl.from(heading.current, {
      opacity: 0,
      delay: 0.6,
      stagger: 0.2,
    });

    irl
      .from(imgReveal, {
        width: "100%",
      })
      .from(
        image.current,
        {
          scale: 1.3,
        },
        "-=2"
      );

    tl.from(collections.current, {
      y: 100,
      stagger: 0.2,
      delay: 0.67,
    });
  }, []);
  return (
    <div className="contactpage">
      <div
        ref={(head) => {
          heading.current[0] = head;
        }}
        className="contactpage__heading"
      >
        <h1>
          <sup>&lt;h1&gt;</sup>
          Contact
          <sub>&lt;/h1&gt;</sub>
        </h1>
      </div>

      <div className="contactpage__image-wrapper">
        <img
          ref={(imgr) => {
            image.current = imgr;
          }}
          src={Myimg}
          alt=""
        />
      </div>
      <div className="contactpage__links">
        <h1
          ref={(head) => {
            heading.current[1] = head;
          }}
        >
          Have any question?
        </h1>
        <p
          ref={(head) => {
            heading.current[2] = head;
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          facilis neque animi, sunt tempora nostrum quam, fugit dolorem, ipsa
        </p>

        <a
          ref={(head) => {
            heading.current[3] = head;
          }}
          className="contactpage__links__mail"
          href="mailto:mohammedasraf567@gmail.com"
        >
          Get in touch
        </a>

        {/* second child */}

        <ul>
          <li
            ref={(elLink) => {
              collections.current[0] = elLink;
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
              collections.current[1] = elLink;
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
              collections.current[2] = elLink;
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
      </div>
    </div>
  );
}

export default Contact;
