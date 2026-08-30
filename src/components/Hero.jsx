import React from "react";
import Reveal from "./Reveal";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div>
          <Reveal>
            <div className="eyebrow availability">
              <span />Looking for Internship and Full-Time roles
            </div>
            <h1 className="hero-title">
              I build the bridge<br />from <em>model</em> to<br />momentum.
            </h1>
            <p className="hero-copy">
              Saral Jain is an AI/ML Engineer in the making, working across machine learning, generative AI, backend systems, and the research edge of 5G/6G.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button-primary" data-testid="link-hero-work">
                See selected work <ArrowRight size={16} />
              </a>
              <button className="button-quiet" onClick={() => window.print()} data-testid="button-print-resume">
                <Download size={15} /> Print / save resume
              </button>
            </div>
            {/* <div className="hero-meta" aria-label="Key facts">
              <div className="meta-item">
                <strong>7.98</strong>
                <span>CGPA &middot; MITS Gwalior</span>
              </div>
              <div className="meta-item">
                <strong>2027</strong>
                <span>Graduating &middot; B.Tech CSE</span>
              </div>
              <div className="meta-item">
                <strong>0.95</strong>
                <span>ROC-AUC &middot; XGBoost</span>
              </div>
            </div> */}
          </Reveal>
        </div>
        <Reveal delay="reveal-delay-2" className="terminal-wrap">
          <div className="terminal" aria-label="Saral Jain engineering profile">
            <div className="terminal-bar">
              <span>saral@portfolio:~ / profile.json</span>
              <span className="terminal-dots">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="terminal-body">
              <span className="terminal-line">
                <span className="prompt">01</span> <span className="key">const</span> <span className="value">engineer = {"{"}</span>
              </span>
              <span className="terminal-line indent">
                <span className="key">focus</span>: <span className="value">&apos;AI / ML&apos;</span>,
              </span>
              <span className="terminal-line indent">
                <span className="key">ships</span>: <span className="value">[&apos;APIs&apos;, &apos;RAG&apos;, &apos;models&apos;]</span>,
              </span>
              <span className="terminal-line indent">
                <span className="key">base</span>: <span className="value">&apos;Bhopal, IN&apos;</span>,
              </span>
              <span className="terminal-line indent">
                <span className="key">status</span>: <span className="value">&apos;learning in public&apos;</span>
              </span>
              <span className="terminal-line">
                <span className="value">{"}"}</span>
              </span>
              <br />
              <span className="terminal-line">
                <span className="prompt">&rarr;</span> <span className="value">python deploy_idea.py</span>
                <span className="terminal-cursor" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="scroll-cue">Scroll to explore</div>
    </section>
  );
}

