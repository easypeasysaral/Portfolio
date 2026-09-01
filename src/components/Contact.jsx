
import React from "react";
import Reveal from "./Reveal";
import { Mail, Globe, ExternalLink, Code, ArrowUpRight, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      {/* Floating Monogram Watermark */}
      <div className="contact-watermark" aria-hidden="true">S</div>

      <div className="wrap contact-inner">
        <Reveal direction="up">
          <div className="eyebrow">Open channel</div>
          <h2 className="contact-title">Have a hard<br />problem?</h2>
          <p className="contact-copy">
            I would like to hear what you are building, researching, or trying to make less fragile.
          </p>
        </Reveal>
        <Reveal delay="reveal-delay-2" direction="left" className="contact-links">
          <a href="mailto:tsaraljain@gmail.com" className="contact-link animated-contact-item" data-testid="link-email">
            <Mail size={15} className="contact-icon" /> <span>tsaraljain@gmail.com</span> <ArrowUpRight size={14} className="contact-arrow" />
          </a>
          <a href="tel:+917999147820" className="contact-link animated-contact-item" data-testid="link-phone">
            <Phone size={15} className="contact-icon" /> <span>+91 79991 47820</span> <ArrowUpRight size={14} className="contact-arrow" />
          </a>
          <a href="https://www.linkedin.com/in/jainsaral" target="_blank" rel="noreferrer" className="contact-link animated-contact-item" data-testid="link-linkedin">
            <Globe size={15} className="contact-icon" /> <span>LinkedIn</span> <ArrowUpRight size={14} className="contact-arrow" />
          </a>
          <a href="https://github.com/easypeasysaral" target="_blank" rel="noreferrer" className="contact-link animated-contact-item" data-testid="link-github">
            <ExternalLink size={15} className="contact-icon" /> <span>GitHub</span> <ArrowUpRight size={14} className="contact-arrow" />
          </a>
          <a href="https://leetcode.com/u/easypeasysaral/" target="_blank" rel="noreferrer" className="contact-link animated-contact-item" data-testid="link-leetcode">
            <Code size={15} className="contact-icon" /> <span>LeetCode</span> <ArrowUpRight size={14} className="contact-arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}


