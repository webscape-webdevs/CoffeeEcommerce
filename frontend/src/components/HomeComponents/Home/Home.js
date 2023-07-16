import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import Left from "../../../assets/Images/leftside.svg";
import right from "../../../assets/Images/rightside.svg";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Video from "./Coffee.mp4";
import SplitType from "split-type";

gsap.registerPlugin(CustomEase);

const Home = () => {
  const [Running, Setrunning] = useState(false);
  const Covera = useRef(null);
  const videoRef = useRef(null);
  const textmain = useRef(null);
  const firsta = useRef(null);
  const firsta1 = useRef(null);
  const firsta2 = useRef(null);
  const grad = useRef(null);

  const wrapper = useRef(null);
  const Lefta = useRef(null);
  const Righta = useRef(null);
  const Svg = useRef(null);
  const Overlaya = useRef(null);

  const playa = () => {
    videoRef.current.children[0].play();
  };

  const animation = useCallback(() => {
    gsap.set(textmain.current.children[0].children[1], { translateY: 222, display: "none", autoAlpha: 0 });
    gsap.set(textmain.current.children[1].children[1], { translateY: 222, display: "none", autoAlpha: 0 });
    gsap.set(textmain.current.children[2].children[1], { translateY: 222, display: "none", autoAlpha: 0 });

    const Text = new SplitType(textmain.current.children[0].children[0], { types: "lines" });
    const Text1 = new SplitType(textmain.current.children[1].children[0], { types: "lines" });
    const Text2 = new SplitType(textmain.current.children[2].children[0], { types: "lines" });

    CustomEase.create("Bean", "M0,0 C0.95,0.05 0.23,0.97 1,1  ");

    var tl = gsap.timeline({});

    tl.to([Lefta.current], { translateX: -5, rotate: 4, duration: 0.1, ease: "Expo".easeout }, "+2");
    tl.to([Righta.current], { translateX: 15, rotate: -4, duration: 0.1, ease: "Expo".easeout }, "+2");

    tl.to([Lefta.current], { translateX: -350, translateY: -100, rotate: 20, duration: 1.5, ease: "Bean" }, "+2.2");
    tl.to([Righta.current], { translateX: 380, translateY: -100, rotate: -20, duration: 1.5, ease: "Bean" }, "+2.2");
    tl.to([Svg.current], { fill: "white", translateX: 250, translateY: -100, duration: 1.5 }, "-=1.1");
    // gsap.to('#Tracé_1224',{translateY:'-=8', repeat:-1,yoyo:true, duration:1 })
    tl.to([Lefta.current], { translateX: -1150, translateY: -300, rotate: 250, duration: 2, ease: "Bean" });
    tl.to([Righta.current], { translateX: 1150, translateY: -300, rotate: -250, duration: 2, ease: "Bean" }, "-=2");
    tl.to(
      [Covera.current.children[0]],
      {
        translateY: "-90rem",
        duration: 5,
        oncomplete: () => {
          const display = () => {
            Covera.current.children[0].style.display = "none";
          };
          setTimeout(display, 1300);
        },
      },
      "-=1.5"
    );
    tl.to(
      [Covera.current.children[3]],
      {
        translateY: "20rem",
        duration: 1,
        oncomplete: () => {
          const display = () => {
            Covera.current.children[3].style.display = "none";
          };
          setTimeout(display, 1300);
        },
      },
      "-=5"
    );

    //1
    tl.to(Text.lines, { ease: "Power1".easeout, autoAlpha: 0.1, translateY: -222, duration: 2, absolute: true }, "--=5");

    tl.to(
      textmain.current.children[0].children[1],
      {
        onStart: () => {
          setTimeout(() => {
            firsta.current.style.display = "none";
          }, 500);
        },
        display: "block",
        translateY: 0,
        duration: 2,
        autoAlpha: 1,
        ease: "Power4".easeout,
      },
      "--=4.8"
    );

    //2
    tl.to(Text1.lines, { ease: "Power1".easeout, autoAlpha: 0.1, translateY: -222, duration: 2, absolute: true }, "--=5");

    tl.to(
      textmain.current.children[1].children[1],
      {
        onStart: () => {
          setTimeout(() => {
            firsta1.current.style.display = "none";
          }, 500);
        },
        display: "block",
        translateY: 0,
        duration: 2,
        autoAlpha: 1,
        ease: "Power4".easeout,
      },
      "--=4.8"
    );

    //3
    tl.to(Text2.lines, { ease: "Power1".easeout, autoAlpha: 0.1, translateY: -222, duration: 2, absolute: true }, "--=5");

    tl.to(
      textmain.current.children[2].children[1],
      {
        onStart: () => {
          setTimeout(() => {
            firsta2.current.style.display = "none";
          }, 500);
        },
        display: "block",
        translateY: 0,
        duration: 2,
        autoAlpha: 1,
        ease: "Power4".easeout,
      },
      "--=4.8"
    );

    tl.fromTo(
      [Overlaya.current],
      { width: "100vw", height: "0vh", clipPath: "polygon(0% 54%, 100% 53%, 100% 53%, 0% 54%)" },
      {
        height: "100vh",
        width: "100vw",
        duration: 1,
        onStart: () => {
          setTimeout(() => {
            playa();
          }, 200);
        },
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      "-=4"
    );
  }, []);

  useEffect(() => {
    animation();
  }, []);

  return (
    <Cover ref={Covera}>
      <Toppart>
        <h5>SAINT JEAN DE LUZ</h5>
      </Toppart>
      <Overlaydiv ref={Overlaya}>
        <Videodiv ref={videoRef}>
          <video src={Video} muted="muted" autoPlay={false}></video>
        </Videodiv>
      </Overlaydiv>
      <Wrappermid ref={wrapper}>
        <Midtext ref={textmain}>
          <Overlay>
            <h1 ref={firsta}>LA</h1> <h1>Shapping The</h1>
          </Overlay>
          <Overlay1>
            <Maison ref={firsta1}>MAISON</Maison> <Maison>Coffee</Maison>{" "}
          </Overlay1>
          <Overlay2>
            <h1 ref={firsta2}>DEUZA</h1>
            <h1>Culture</h1>
          </Overlay2>
        </Midtext>
        <MainSvgdiv>
          <Leftsvg ref={Lefta}>
            <img src={Left} alt="" />
          </Leftsvg>
          <Rightsvg ref={Righta}>
            <img src={right} alt="" />
          </Rightsvg>
        </MainSvgdiv>
        <Paginationdiv ref={Svg}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.788 76.161" width="153" height="215">
            <g data-name="Groupe 803" transform="translate(14490.762 5556.163)">
              <path
                id="Tracé_1224"
                data-name="Tracé 1224"
                d="M1430.246,242.019l-.012.043-.013-.012c0,.006-.086.16-.086.16a.676.676,0,0,1-1.108-.751,9.546,9.546,0,0,0,.689-3.689,24.887,24.887,0,0,0-2.728-11.27,15.244,15.244,0,0,1,2.026-16.085l.013-.043.006.012c.006-.006.092-.16.092-.16a.672.672,0,0,1,.462-.228h.068a.7.7,0,0,1,.56.333.671.671,0,0,1,.019.646,9.352,9.352,0,0,0-.69,3.689,24.905,24.905,0,0,0,2.728,11.27,15.244,15.244,0,0,1-2.026,16.085"
                transform="translate(-15874 -5766.159)"
              ></path>
              <path
                id="Tracé_1225"
                data-name="Tracé 1225"
                d="M1476.026,247.728v.068a.68.68,0,0,1-.333.56.671.671,0,0,1-.646.019,9.345,9.345,0,0,0-3.689-.69,24.9,24.9,0,0,0-11.269,2.728A15.246,15.246,0,0,1,1444,248.387l-.043-.012.013-.013c-.007,0-.161-.086-.161-.086a.676.676,0,0,1,.752-1.108,9.415,9.415,0,0,0,3.7.689,24.938,24.938,0,0,0,11.263-2.722,15.235,15.235,0,0,1,16.085,2.02l.043.013-.012.012c.006,0,.16.086.16.086a.664.664,0,0,1,.228.462"
                transform="translate(-15874 -5766.159)"
              ></path>
              <path
                id="Tracé_1226"
                data-name="Tracé 1226"
                d="M1415.675,247.728v.068a.68.68,0,0,1-.333.56.671.671,0,0,1-.646.019,9.345,9.345,0,0,0-3.689-.69,24.9,24.9,0,0,0-11.269,2.728,15.247,15.247,0,0,1-16.086-2.026l-.043-.012.013-.013c-.007,0-.161-.086-.161-.086a.676.676,0,0,1,.752-1.108,9.414,9.414,0,0,0,3.695.689,24.938,24.938,0,0,0,11.263-2.722,15.234,15.234,0,0,1,16.085,2.02l.043.013-.012.012c.006,0,.16.086.16.086a.665.665,0,0,1,.228.462"
                transform="translate(-15874 -5766.159)"
              ></path>
              <path
                id="Tracé_1227"
                data-name="Tracé 1227"
                d="M1430.246,285.742l-.012.044-.013-.013c0,.006-.086.16-.086.16a.676.676,0,0,1-1.108-.751,9.539,9.539,0,0,0,.689-3.689,24.884,24.884,0,0,0-2.728-11.269,15.246,15.246,0,0,1,2.026-16.086l.013-.042.006.011c.006,0,.092-.159.092-.159a.673.673,0,0,1,.462-.229h.068a.7.7,0,0,1,.56.333.673.673,0,0,1,.019.647,9.345,9.345,0,0,0-.69,3.689,24.9,24.9,0,0,0,2.728,11.269,15.244,15.244,0,0,1-2.026,16.085"
                transform="translate(-15874 -5766.159)"
              ></path>
            </g>
          </svg>
        </Paginationdiv>
      </Wrappermid>
      <Downpart>
        <h4>Depuis 1920 </h4>
      </Downpart>
    </Cover>
  );
};

export default Home;
const Overlaydiv = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  position: absolute;
  video {
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Videodiv = styled.div`
  position: relative;
  z-index: 0;
`;
const Overlay = styled.div`
  height: 20vh;
  position: absolute;
  bottom: 16rem;
  overflow: hidden;
`;
const Overlay1 = styled.div`
  overflow: hidden;
  height: 31vh;

  position: absolute;
  bottom: 0rem;
`;
const Overlay2 = styled.div`
  overflow: hidden;
  height: 31vh;

  position: absolute;
  top: 16rem;
`;
const Cover = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
  background-color: #d1cbb8;
  font-weight: 400;
`;
const Midtext = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 5rem;
  text-align: center;
  align-items: center;
  font-family: "OurFont", serif;
  line-height: 11rem;
  min-height: 40vh;
  font-weight: 400;
  color: white;
  overflow: hidden;

  div {
    font-family: "OurFont", serif;
    display: flex;
    flex-direction: column;
  }
  text-transform: uppercase;
  h1 {
    font-family: "OurFont", Times, serif;
    font-weight: 300;
    overflow: hidden;

    span {
      overflow: hidden;
    }
  }
`;

const Maison = styled.h1`
  letter-spacing: 0.5rem;
  font-family: "Figtree", sans-serif;
  font-size: 10.2rem;
  font-weight: 400;
`;
const Toppart = styled.div`
  margin-bottom: 5rem;
  font-size: 1.5rem;
  text-transform: uppercase;

  letter-spacing: 0.2rem;
`;
const Downpart = styled.div`
  margin-top: 5rem;
  text-transform: uppercase;

  font-size: 1.5rem;
  letter-spacing: 0.2rem;
`;

const Wrappermid = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MainSvgdiv = styled.div`
  display: flex;
  z-index: -1;
  position: absolute;
`;
const Leftsvg = styled.div`
  position: relative;
  top: 3rem;

  left: 17rem;
  img {
    width: 35rem;
  }
`;
const Rightsvg = styled.div`
  position: relative;
  top: 3rem;
  z-index: -2;
  right: 17.5rem;
  img {
    width: 35rem;
  }
`;
const Paginationdiv = styled.div`
  position: absolute;
  top: -6rem;
  right: 25.5rem;
`;
