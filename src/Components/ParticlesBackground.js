import { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParallaxParticles() {
  const [theme, setTheme] = useState("dark"); // default to dark

  useEffect(() => {
    // Watch for changes in data-bs-theme on body
    const observer = new MutationObserver(() => {
      const currentTheme = document.body.getAttribute("data-bs-theme") || "dark";
      setTheme(currentTheme);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });

    // Set initial theme
    const currentTheme = document.body.getAttribute("data-bs-theme") || "dark";
    setTheme(currentTheme);

    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: "transparent" // no solid color, respects theme
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab" // make particles react to mouse
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 120,
              links: {
                opacity: 0.6
              }
            }
          }
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: theme === "dark" ? "#ffffff" : "#60a5fa"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: { min: 1, max: 4 }
          },
          links: {
            enable: true,
            distance: 140,
            color: theme === "dark" ? "#ffffff" : "#60a5fa",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: {
              default: "bounce"
            },
            parallax: {
              enable: true,
              force: 60,
              smooth: 10
            }
          }
        },
        detectRetina: true
      }}
    />
  );
}


// import React, { useCallback, useEffect, useState } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function ParticlesBackground() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     // Check theme from body attribute or class
//     const observer = new MutationObserver(() => {
//       const currentTheme = document.body.getAttribute("data-bs-theme") || "dark";
//       setTheme(currentTheme);
//     });

//     observer.observe(document.body, { attributes: true, attributeFilter: ["data-bs-theme"] });

//     return () => observer.disconnect();
//   }, []);

//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true, zIndex: -1 },
//         background: {
//           color: { value: theme === "dark" ? "#0d1117" : "#f5f5f5" } // light bg
//         },
//         particles: {
//           number: {
//             value: 60,
//             density: { enable: true, area: 800 }
//           },
//           color: {
//             value: theme === "dark"
//               ? ["#ffb6c1", "#f9d5ec", "#e6e6fa", "#cce7ff"]
//                : ["#8a2be2", "#ff69b4", "#7fffd4", "#dda0dd"]
//           },
//           twinkle: {
//   particles: {
//     enable: true,
//     frequency: 0.05,
//     opacity: 0.5,
//     color: {
//       value: theme === "dark" ? "#ffffff" : "#ff69b4"
//     }
//   }
// },
//           shape: { type: "circle" },
//           opacity: { value: 0.5, random: true },
//           size: { value: { min: 6, max: 10 } },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "none",
//             outMode: "bounce",
//             parallax: {
//               enable: true,
//               force: 100,
//               smooth: 5,
//             },
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: "repulse"
//             },
//           },
//           modes: {
//             repulse: {
//               distance: 100,
//               duration: 0.4
//             },
//           },
//         },
//       }}
//     />
//   );
// }