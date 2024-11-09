import "./Page6.css";
const Page6 = () => {
  return (
    <div className="page-container">
      <div className="content-wrapperrr">
        <video
          autoPlay
          muted
          loop
          className="background-video"
          src="/timer.mp4"
        />
        <div className="info-section">
          <div className="info-block">
            <h3 className="info-title">PERSONALITY</h3>
            <p>
              I'm a focused and methodical developer who thrives on planning,
              tackling challenges with a clear structure, and bringing ideas to
              life with precision and creativity.
            </p>
          </div>
          <div className="info-block">
            <h3 className="info-title">APPROACH</h3>
            <p>
              I start by turning on my lofi playlist, planning the tech stack,
              structuring the app, designing the front end, building the back
              end, and deploying it to production.
            </p>
          </div>
          <div className="info-block">
            <h3 className="info-title">DESIGN</h3>
            <p>
              I have a keen eye for design, focusing on creating unique,
              creative, and user-friendly interfaces that are both visually
              appealing and functional.
            </p>
          </div>
          <div className="info-block">
            <h3 className="info-title">FOCUS</h3>
            <p>
              I have the ability to focus intensely on coding for hours without
              a break, immersing myself in the problem-solving process and
              consistently delivering high-quality results.
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="footer-left">
            <div className="footer-title-6">sounds good?</div>
            <h3 className="footer-subtitle">let's own the code together.</h3>
          </div>
          <div>
            <a href="mailto:moidmalikdev@gmail.com" className="email-link">
              email me
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-icon"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
