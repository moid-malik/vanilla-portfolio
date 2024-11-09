import React from 'react';
import './Page3.css';

const Page3 = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <div className="video-content">
          <video autoPlay muted loop src="/ownthecode.mp4" />
        </div>
      </div>
    </div>
  );
};

export default Page3;