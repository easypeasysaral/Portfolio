
import React from "react";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="work" className="section projects-section">
      <div className="wrap">
        <Reveal className="section-head">
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
          {projects.map(p => (
            <Reveal key={p.index}>
              <article className="project-row" data-testid={`card-project-${p.index}`}>
                <div className="project-index">{p.index}</div>
                <div>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 11, color: "#68764b", textAlign: "right", marginBottom: 18 }}>
                    {p.proof}
                  </div>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="project-link" data-testid={`link-project-repo-${p.index}`}>
                    View repository <ArrowUpRight size={14} />
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

