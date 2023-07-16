import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import cafe from "../../Images/bb201a3393c4dd27d8c758e2bf7c.jpg.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const Imagediv = useRef();
  const Covera = useRef();
  const Container = useRef();

  const Handleanimation = (event) => {
    const target = event.currentTarget;

    gsap.to(target, {
      scale: 0.95,
      duration: 0.2,
      ease: "power4".out,
      yoyo: true,
      repeat: 1,
    });
  };

  const animation = useCallback(() => {
    const Section = gsap.utils.toArray(Imagediv.current.children);
    const t1 = gsap.timeline({});

    t1.fromTo(
      [Imagediv.current, Imagediv.current.children],
      {
        x: 900,
        opacity: 0,
        stagger: 0.1,
        duration: 2.5,
      },
      { x: 550, opacity: 1, stagger: 0.1, duration: 2 }
    );

    gsap.to(Section, {
      xPercent: -150 * (Section.length - 1),
      ease: "none",
      duration: 6,
      scrollTrigger: {
        trigger: Imagediv.current,
        start: "top top",
        pin: true,
        scrub: 2,
        markers: true,
        end: `+=3000`,
      },
      onUpdate: () => {
        console.log("Imagediv.current", Imagediv.current);
        console.log("Container.current", Container.current);
      },
    });
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      animation();
    }, Covera.current);

    return () => ctx.revert();
  }, []);

  return (
    <Cover ref={Covera}>
      <div ref={Container}>
        <Imagecontainer ref={Imagediv}>
          <Textabsolute>
            <h1>hello</h1>
          </Textabsolute>
          <Imageelement onClick={Handleanimation}>
            <img src={cafe} alt="" />
          </Imageelement>
          <Imageelement onClick={Handleanimation}>
            <img src={cafe} alt="" />
          </Imageelement>
          <Imageelement onClick={Handleanimation}>
            <img src={cafe} alt="" />
          </Imageelement>
          <Imageelement onClick={Handleanimation}>
            <img src={cafe} alt="" />
          </Imageelement>
        </Imagecontainer>
      </div>
    </Cover>
  );
};

export default Slider;

const Textabsolute = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 5rem;
`;
const Cover = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Imagecontainer = styled.div`
  height: 100vh;
  display: flex;
  gap: 7rem;
  background-color: #d1cbb8;
`;
const Imageelement = styled.div`
  margin-top: 5rem;
  width: 30rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
