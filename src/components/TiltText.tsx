import React from 'react';
import './TiltText.css';

const TiltText = React.forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => {
  return (
    <div ref={ref} id="tilttext">
      <h1 className="tilt-title">i am a full stack</h1>
      <h1 className="tilt-main">
        develop<span className="tilt-highlight">er</span>
      </h1>
      <h1 className="tilt-sub">
        to<span className="tilt-highlight">hire</span>
      </h1>
    </div>
  );
});

export default TiltText;
