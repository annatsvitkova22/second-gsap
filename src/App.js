import React from "react";
import { useEffect } from "react";
import "./index.css";
import pexels from "./pexels.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
      gsap.core.globals("ScrollToPlugin", ScrollToPlugin);

      const firstElem = document.querySelector(".container");

      function goToSection(i, anim) {
        console.log('i', i)
        gsap.to(window, {
          scrollTo: {
            y: i * window.innerHeight + firstElem.offsetTop,
            autoKill: false
          },
          duration: 1
        });
        if (anim) {
          console.log('anim', anim)
          // anim.restart();
        }
      }

      gsap.utils.toArray(".container").forEach((panel, i) => {
        console.log('panel', panel)
        ScrollTrigger.create({
          trigger: panel,
          onEnter: () => goToSection(i, 'to'),
        });

        ScrollTrigger.create({
          trigger: panel,
          start: "bottom bottom",
          onEnterBack: () => goToSection(i, 'back')
        });
      });
    }

    return () => {};
  }, []);

  return (
    <div className="App">
      <div className="full">
        <a className="text" href="/Test">
          Hello
        </a>
      </div>

      <div className="container">
        <div className="text">Hello</div>
        <div className="box">
          <img src={pexels} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="text">Hello</div>
        <div className="box">
          <img src={pexels} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="text">Hello</div>
        <div className="box">
          <img src={pexels} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="text">Hello</div>
        <div className="box">
          <img src={pexels} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="text">Hello</div>
        <div className="box">
          <img src={pexels} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="text">Hello</div>
        <div className="box">
          <img src={pexels} alt="" />
        </div>
      </div>
      

      <div className="full">
        <div className="text">Hello</div>
      </div>
    </div>
  );
}

