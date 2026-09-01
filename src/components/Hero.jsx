import React, { useState, useEffect, useRef } from "react";
import Reveal from "./Reveal";
import NeuralBackground from "./NeuralBackground";
import { ArrowRight, Download, Sparkles, Terminal as TerminalIcon } from "lucide-react";

export default function Hero() {
  const terminalRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Terminal command typing animation
  const terminalCommands = [
    "python deploy_idea.py",
    "uvicorn api:app --reload",
    "pytest tests/test_rag.py",
    "git commit -m 'ship v2'"
  ];
  const [cmdIndex, setCmdIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = terminalCommands[cmdIndex];
    let timer;

    if (!isDeleting && displayText.length < currentFullText.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentFullText.length) {
      // Pause when full
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next command
      setIsDeleting(false);
      setCmdIndex((prev) => (prev + 1) % terminalCommands.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, cmdIndex]);

  // 3D Card Tilt handling
  const handleMouseMove = (e) => {
    if (!terminalRef.current) return;
    const rect = terminalRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="top" className="hero">
      <NeuralBackground />

      {/* Decorative animated floating orbit */}
      <div className="hero-orbit" aria-hidden="true">
        <div className="orbit-ring" />
        <div className="orbit-dot" />
      </div>

      <div className="wrap hero-grid">
        <div className="hero-content">
          <Reveal direction="up">
            <div className="eyebrow availability">
              <span className="availability-dot">
                <span className="availability-ping" />
              </span>
              Looking for Internship and Full-Time roles
            </div>
            <h1 className="hero-title">
              I build the bridge<br />from <em>model</em> to<br />momentum.
            </h1>
            <p className="hero-copy">
              Saral Jain is an AI/ML Engineer in the making, working across machine learning, generative AI, backend systems, and the research edge of 5G/6G.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button-primary magnetic-btn" data-testid="link-hero-work">
                <span>See selected work</span> <ArrowRight size={16} className="btn-icon" />
              </a>
              <a
                href="https://drive.google.com/file/d/1UUJTwMLjbn4_VuyVDHpilHblCJa_VgcH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="button-quiet magnetic-btn"
                data-testid="link-resume"
              >
                <Download size={15} className="btn-icon" /> <span>Save resume</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay="reveal-delay-2" direction="left" className="terminal-wrap">
          <div
            ref={terminalRef}
            className="terminal tilt-card"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                : "perspective(1000px) rotate(2deg) rotateX(0deg) rotateY(0deg)",
              transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)"
            }}
            aria-label="Saral Jain engineering profile"
          >
            <div className="terminal-bar">
              <span className="terminal-title">
                <TerminalIcon size={12} className="inline-icon" /> saral@portfolio:~ / profile.json
              </span>
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
              <span className="terminal-line interactive-line">
                <span className="prompt">&rarr;</span>{" "}
                <span className="value active-cmd">{displayText}</span>
                <span className="terminal-cursor" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="scroll-cue">
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}


