import "./styles/Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              OM
              <br />
              <span>HIRPARA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A 3D VFX</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Artist</div>
              <div className="landing-h2-2">Creator</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Creator</div>
              <div className="landing-h2-info-1">Artist</div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
