
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Band from "./components/Band";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Signals from "./components/Signals";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = ["top", "about", "work", "experience", "contact"]
      .map(id => document.getElementById(id))
      .filter(Boolean);
      
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "-30% 0px -62% 0px" });

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Band />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Signals />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <span>&copy; {new Date().getFullYear()} Saral Jain</span>
          <a href="https://saraljain.netlify.app" target="_blank" rel="noreferrer" data-testid="link-portfolio">saraljain.netlify.app</a>
          <a href="#top" data-testid="link-back-to-top">Back to top &uarr;</a>
        </div>
      </footer>
    </div>
  );
}

