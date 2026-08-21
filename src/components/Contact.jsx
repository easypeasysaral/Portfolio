
import React from "react";
import Reveal from "./Reveal";
import { Mail, Globe, ExternalLink, Code, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-inner">
        <Reveal>
          <div className="eyebrow">Open channel</div>
          <h2 className="contact-title">Have a hard<br />problem?</h2>
          <p className="contact-copy">
            I would like to hear what you are building, researching, or trying to make less fragile.
          </p>
        </Reveal>
        <Reveal delay="reveal-delay-2" className="contact-links">
          <a href="mailto:tsaraljain@gmail.com" className="contact-link" data-testid="link-email">
            <Mail size={15} /> tsaraljain@gmail.com <ArrowUpRight size={14} />
          </a>
          <a href="tel:+917999147820" className="contact-link" data-testid="link-phone">
            +91 79991 47820 <ArrowUpRight size={14} />
          </a>
          <a href="https://www.linkedin.com/in/jainsaral" target="_blank" rel="noreferrer" className="contact-link" data-testid="link-linkedin">
            <Globe size={15} /> LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href="https://github.com/easypeasysaral" target="_blank" rel="noreferrer" className="contact-link" data-testid="link-github">
            <ExternalLink size={15} /> GitHub <ArrowUpRight size={14} />
          </a>
          <a href="https://leetcode.com/u/easypeasysaral/" target="_blank" rel="noreferrer" className="contact-link" data-testid="link-leetcode">
            <Code size={15} /> LeetCode <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

