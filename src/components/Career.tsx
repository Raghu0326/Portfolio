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
                <h4>CEO & Co-Founder</h4>
                <h5>Cold Wave Beverages — India</h5>
              </div>
              <h3>Apr 2021 – Aug 2023</h3>
            </div>
            <p>
              Founded a consumer beverage brand at 18, owning product vision, branding, supplier coordination, and go-to-market strategy. Managed end-to-end operations balancing creative direction, production logistics, and financial planning through initial launch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Behind-the-Scenes Tour Guide</h4>
                <h5>Full Sail University — Winter Park, FL</h5>
              </div>
              <h3>Jun 2024 – Oct 2025</h3>
            </div>
            <p>
              Conducted 30+ official campus tours achieving an average visitor satisfaction rating of 4.8/5. Developed strong storytelling and communication skills — 90%+ of participants rated the experience positively.
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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance 3D & VFX Artist</h4>
                <h5>Independent Studios & Creators</h5>
              </div>
              <h3>Dec 2025 – Present</h3>
            </div>
            <p>
              Providing environment art, Niagara VFX, and NukeX compositing services to indie game studios and content creators. Managing full project ownership from brief to final delivery — asset creation, simulations, and multi-pass compositing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
