import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creator Associate</h4>
                <h5>Inox Cinemas — India</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Designed promotional 3D and motion visuals, collaborating with
              marketing teams to present films with immersive visual assets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Development Team Member</h4>
                <h5>Asiec India — Surat, India</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Collaborated with cross-functional teams to develop and implement
              business growth strategies. Tailored visual and marketing content
              creation for digital campaigns, building experience in creative
              branding and communication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CEO & Founder</h4>
                <h5>Cold Wave Beverages — India</h5>
              </div>
              <h3>2021 – 2024</h3>
            </div>
            <p>
              Founded Cold Wave Beverages at age 18, leading brand creation,
              product development, and early market launch. Managed end-to-end
              operations including packaging design, supplier coordination,
              budgeting, and small-scale distribution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.S. Computer Animation</h4>
                <h5>Full Sail University — Winter Park, FL</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Key coursework: Environment Design, Lighting, Rendering,
              Compositing, Animation, Real-Time Engines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
