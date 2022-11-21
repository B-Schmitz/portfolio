import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, Container } from "tsparticles-engine";
import { theme } from "theme/theme";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{flex: 1}}
      options={{
        backgroundMode: {
          zIndex: -1
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 600,
              size: 2,
              duration: 0.5,
              opacity: 1
            }
          },
        },
        particles: {
          color: {
            value: theme.text
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 5000,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "star",
          },
          size: {
            value: { min: 0.5, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle