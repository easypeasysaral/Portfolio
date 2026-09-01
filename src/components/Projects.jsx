
import React, { useState } from "react";
import Reveal from "./Reveal";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, activeIndex: null });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      activeIndex: index
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, activeIndex: null });
  };

  return (
    <section id="work" className="section projects-section">
      <div className="wrap">
        <Reveal direction="up" className="section-head">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2 className="section-title">
              Built to be<br />looked under.
            </h2>
          </div>
          <p className="section-intro">
            Three projects where the model is only one part of the story. Open the repos for the implementation details.
          </p>
        </Reveal>
        <div className="project-list">
          {projects.map((p, idx) => (
            <Reveal key={p.index} delay={`reveal-delay-${idx + 1}`} direction="up">
              <article
                className="project-row spotlight-card"
                data-testid={`card-project-${p.index}`}
                onMouseMove={(e) => handleMouseMove(e, p.index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  "--mouse-x": mousePos.activeIndex === p.index ? `${mousePos.x}px` : "-1000px",
                  "--mouse-y": mousePos.activeIndex === p.index ? `${mousePos.y}px` : "-1000px"
                }}
              >
                <div className="project-index">{p.index}</div>
                <div className="project-main-content">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="project-tag interactive-tag">{t}</span>)}
                  </div>
                </div>
                <div className="project-meta">
                  <div className="mono project-proof">
                    {p.proof}
                  </div>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="project-link animated-link" data-testid={`link-project-repo-${p.index}`}>
                    <span>View repository</span> <ArrowUpRight size={14} className="link-arrow" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


