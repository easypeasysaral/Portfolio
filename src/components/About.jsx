
import React from "react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">The short version</div>
            <h2 className="section-title">
              Curiosity,<br />with a shipping bias.
            </h2>
          </div>
          <p className="section-intro">
            The interesting part is not just training a model. It is understanding the question, building the system around it, and making the result useful.
          </p>
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-note" delay="reveal-delay-1">
            Good engineering makes complex things feel obvious on the other side.
          </Reveal>
          <Reveal className="about-body" delay="reveal-delay-2">
            <p>
              <strong>I work across the stack.</strong> My projects move from noisy data and model selection to APIs, interfaces, retrieval, and deployment-shaped thinking.
            </p>
            <p>
              Right now, I am studying Computer Science with a focus on AI & ML at MITS Gwalior, while exploring how intelligent systems can be both rigorous and genuinely useful.
            </p>
            <div className="about-foot">
              <span className="pill">Bhopal, India</span>
              <span className="pill">B.Tech CSE &middot; AI & ML</span>
              <span className="pill">Open to Internships</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

