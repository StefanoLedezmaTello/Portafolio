import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particulas = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); 
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#1e1e2f" }, 
        fullScreen: { enable: true, zIndex: -1 }, // 👈 
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1.5, outModes: { default: "out" } },
          links: { enable: true, color: "#ffffff", distance: 120, opacity: 0.3 }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 3 }
          }
        }
      }}
    />
  );
};

export default Particulas;
