import React from "react";
import "./App.css";
import ScreenSizeChecker from "./Components/screen-size-checker";
import Stars from "./Components/stars";
import { LandingView } from "./views/landing-view";

function App() {
    const { screenHeight, screenWidth } = ScreenSizeChecker();

    // Check WebGL support
    const isWebGLSupported = checkWebGLSupport();

    function checkWebGLSupport() {
        try {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (!context) {
                return false;
            }
            return true;
        } catch (error) {
            return false;
        }
    }

    // Render stars only if WebGL is supported
    const renderStars = isWebGLSupported && (
        <>
            {/* Render stars at sphere positions */}
            {spherePositions.map((pos, index) => (
                <div
                    key={index}
                    className="absolute"
                    style={{
                        top: pos.top,
                        left: pos.left,
                        width: screenWidth < 800 ? `100px` : `350px`,
                        height: screenWidth < 800 ? `100px` : `350px`,
                        zIndex: 10,
                    }}
                >
                    <Stars />
                </div>
            ))}
        </>
    );

    return (
        <div className="bg-gradient-to-l from-gray-100">
            {/* {renderStars} */}
            <LandingView />
        </div>
    );
}

const spherePositions = [
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    { top: `${getRandomNumber(-5, 80)}%`, left: `${getRandomNumber(-5, 80)}%` },
    // Add more positions as needed
];

function getRandomNumber(min, max) {
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * (max - min + 1) + min;
    return Math.floor(scaledNumber);
}

export default App;
