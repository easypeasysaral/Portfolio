
import React from "react";

export default function Band() {
  const items = [
    "Machine learning",
    "Generative AI",
    "Backend systems",
    "5G / 6G research"
  ];

  return (
    <div className="band">
      <div className="band-track">
        {/* Render items multiple times to ensure seamless infinite scroll on wide screens */}
        {[1, 2, 3, 4].map((group) => (
          <React.Fragment key={group}>
            {items.map((item, i) => (
              <span key={`${group}-${i}`} aria-hidden={group !== 1 ? "true" : undefined}>
                {item}
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

