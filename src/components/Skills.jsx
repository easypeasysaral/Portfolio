
import React from "react";
import Reveal from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="section skills-section">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">The toolbox</div>
            <h2 className="section-title">Tools are<br />just verbs.</h2>
          </div>
          <p className="section-intro">
            A working vocabulary for turning a rough prompt into something testable, explainable, and ready for the next iteration.
          </p>
        </Reveal>
        <div className="skills-layout">
          <Reveal className="skills-lead">
            <strong>From tensors to tables.</strong><br /><br />
            I am most interested where disciplines overlap: a good model, a clean interface, and a backend that does not make either one wait.
          </Reveal>
          <div className="skill-groups">
            {skills.map((group, i) => (
              <Reveal key={group.title} delay={i % 2 !== 0 ? "reveal-delay-1" : ""} className="skill-group">
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map(item => <span key={item} className="skill-item">{item}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

