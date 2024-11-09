import TiltText from "@/components/TiltText";
import { useRef, useState, useEffect } from "react";
import Page1bottom from "@/components/Page1bottom";
import './Page1.css';

const gsapPromise = import("gsap").then((module) => module.default);

const Page1 = () => {
  const tiltTextRef = useRef<any>(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoveHandle = (e: any) => {
    setXVal(
      (e.clientX -
        tiltTextRef.current.getBoundingClientRect().x -
        tiltTextRef.current.getBoundingClientRect().width) /
        12
    );
    setYVal(
      -(
        e.clientY -
        tiltTextRef.current.getBoundingClientRect().y -
        tiltTextRef.current.getBoundingClientRect().height
      ) / 5
    );
  };

  useEffect(() => {
    gsapPromise.then((gsap) => {
      gsap.to(tiltTextRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2,
      });
    });
  }, [xVal, yVal]);

  return (
    <div className="container">
      <div className="page1">
        <div className="header">
          <h1 className="title">Moid</h1>
          <div className="title-underline"></div>
        </div>
        <div className="content-wrapper">
          <div
            onMouseMove={mouseMoveHandle}
            id="page1-child"
            className="text-container"
          >
            <TiltText ref={tiltTextRef} />
          </div>
          <div className="video-container">
            <video
              autoPlay
              muted
              loop
              className="sigma-video"
              src="/sigma.webm"
            />
          </div>
          <Page1bottom />
        </div>
      </div>
    </div>
  );
};

export default Page1;