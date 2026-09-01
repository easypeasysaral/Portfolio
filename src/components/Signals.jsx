
import React from "react";
import Reveal from "./Reveal";
import { signals } from "../data";

export default function Signals() {
  return (
    <section className="section section-dark">
      <div className="wrap">
        <Reveal direction="up" className="section-head">
          <div>
            <div className="eyebrow">Signals beyond the repo</div>
            <h2 className="section-title">Stay<br />in motion.</h2>
          </div>
          <p className="section-intro">
            The habits behind the work matter too: practice, pressure, teamwork, and a willingness to keep showing up.
          </p>
        </Reveal>
        <div className="timeline animated-timeline">
          {signals.map(([title, desc], i) => (
            <Reveal
              key={title}
              delay={`reveal-delay-${(i % 3) + 1}`}
              direction="up"
              className="timeline-item interactive-signal-item"
            >
              <div>
                <h3 className="signal-title">{title}</h3>
                <p>{desc}</p>
              </div>
              <div className="timeline-date signal-number">0{i + 1}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


