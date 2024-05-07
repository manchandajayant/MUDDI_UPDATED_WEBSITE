import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";

const Sphere = () => {
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
        renderer.setClearColor(0x000000, 0);

        // Sphere geometry
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blue color
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            renderer.dispose();
        };
    }, [containerSize]);

    return (
        <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
        </div>
    );
};

export default Sphere;
