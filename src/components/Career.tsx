import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Career <span>&</span>
          <br /> Experience
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
              Founded a consumer beverage brand at 18, leading product vision, branding, supplier coordination, and go-to-market strategy. Managed early operations across creative direction, logistics, and launch planning, building strong leadership and execution skills.
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
              Led official campus tours for prospective students and families, strengthening communication, presentation, and audience engagement through high-volume public-facing interaction and storytelling.
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
              Built a strong creative and technical foundation in animation, environment design, visual storytelling, compositing, rendering, and production workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance VFX Artist / Environment Artist / Animator</h4>
                <h5>Independent Studios & Creators</h5>
              </div>
              <h3>Dec 2025 – Present</h3>
            </div>
            <p>
              Creating visual work for indie studios and creators across environments, effects, animation, and polished final presentation. Managing projects from concept to delivery with a focus on strong visuals, storytelling, and final execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
