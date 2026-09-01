
import React from "react";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="split-section">
      <div className="split-panel">
        <Reveal direction="left">
          <div className="eyebrow">Where I am now</div>
          <h2 className="section-title">Learning in<br />the real world.</h2>
          <div className="timeline animated-timeline">
            <div className="timeline-item interactive-timeline-item">
              <div className="timeline-bullet-glow" />
              <div>
                <h3>Backend & 6G Research Intern</h3>
                <p className="timeline-org">HNNOIX India Pvt Ltd &middot; Gurugram</p>
                <ul className="timeline-desc-list">
                  <li>Developing backend services and data-processing pipelines for telecom research projects involving 5G and emerging 6G technologies.</li>
                  <li>Working with ASN.1 message structures, protocol logs, and network datasets for parsing, analysis, and visualization.</li>
                  <li>Building FastAPI backend components and React interfaces for telecom monitoring and analysis tools.</li>
                  <li>Collaborating with researchers on AI-assisted workflows and proof-of-concept applications for next-generation communication systems.</li>
                </ul>
              </div>
              <div className="timeline-date">
                Jul 2026 &mdash;<br />Present
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="split-panel section-dark">
        <Reveal delay="reveal-delay-2" direction="right">
          <div className="eyebrow">Foundation</div>
          <h2 className="section-title">Built on<br />strong basics.</h2>
          <div className="education-cards">
            <div className="education-card interactive-edu-card">
              <h3>MITS Gwalior</h3>
              <p>
                B.Tech &middot; Computer Science & Engineering<br />
                Artificial Intelligence & Machine Learning<br />
                2023 &mdash; 2027
              </p>
              <span className="cgpa cgpa-glow">CGPA 7.98</span>
            </div>
            <div className="education-card interactive-edu-card">
              <h3>Paras Vidya Vihar, Sagar</h3>
              <p>
                Class 12<br />
                2022 &mdash; 2023
              </p>
              <span className="cgpa">87%</span>
            </div>
            <div className="education-card interactive-edu-card">
              <h3>Paras Vidya Vihar, Sagar</h3>
              <p>
                Class 10<br />
                2021 &mdash; 2022
              </p>
              <span className="cgpa">84.2%</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


