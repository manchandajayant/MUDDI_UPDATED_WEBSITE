import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";

const Stars = () => {
    const canvasRef = useRef();
    const containerRef = useRef();
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const updateContainerSize = () => {
            const { width, height } = containerRef.current.getBoundingClientRect();
            setContainerSize({ width, height });
        };

        // Update container size initially and on window resize
        updateContainerSize();
        window.addEventListener("resize", updateContainerSize);
        return () => window.removeEventListener("resize", updateContainerSize);
    }, []);

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, containerSize.width / containerSize.height, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(containerSize.width, containerSize.height);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);

        // Star geometry
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xbbdefb,
            size: 0.05,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true, // Ensures points maintain size relative to the viewport
            vertexColors: true, // Enables vertex colors
        });

        // Generate star positions and colors
        const starCount = 1000;
        const starPositions = new Float32Array(starCount * 3);
        const starColors = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            const x = (Math.random() - 0.5) * 10; // Spread stars in a 10x10x10 cube
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 10;

            starPositions[i * 3] = x;
            starPositions[i * 3 + 1] = y;
            starPositions[i * 3 + 2] = z;

            starColors[i * 3] = 0.5 + Math.random() * 0.5; // Randomize brightness for color variation
            starColors[i * 3 + 1] = 0.5 + Math.random() * 0.5;
            starColors[i * 3 + 2] = 1; // Ensure blue component is always fully bright
        }

        starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
        starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Render scene once
        renderer.render(scene, camera);

        // Cleanup
        return () => {
            renderer.dispose();
        };
    }, [containerSize]);

    return (
        <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%", border: "none" }} />
        </div>
    );
};

export default Stars;
