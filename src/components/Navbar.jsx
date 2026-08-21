
import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    ["about", "About"],
    ["work", "Work"],
    ["experience", "Experience"],
    ["contact", "Contact"]
  ];

  return (
    <header className="topbar">
      <div className="wrap nav">
        <a href="#top" className="wordmark" data-testid="link-home">
          <span className="wordmark-mark">EasyPeasySaral</span>
          <span>Saral Jain</span>
        </a>
        <nav className={`nav-links ${isOpen ? "open" : ""}`} aria-label="Primary navigation">
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
              data-testid={`link-nav-${id}`}
            >
              {label}
            </a>
          ))}
          <a href="mailto:tsaraljain@gmail.com" className="nav-cta" data-testid="link-nav-email">
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
