import React, { useContext, useEffect, useCallback } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

interface IParticlesCanvas {
    className?: string
}

const ParticleCanvas = ({ className }: IParticlesCanvas) => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFireworksPreset(engine)
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            height="100vh"
            width="100vw"
            options={{
                preset: "fireworks"
            }}
        />
    );
};

export default ParticleCanvas;