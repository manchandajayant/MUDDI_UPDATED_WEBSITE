import React from "react";
import "./App.css";
import Stars from "./Components/stars";
import { LandingView } from "./views/landing-view";

function App() {
    return (
        <div className="bg-gradient-to-l from-gray-100">
            {/* Stars at Sphere Positions */}
            {spherePositions.map((pos, index) => (
                <div
                    key={index}
                    className="absolute"
                    style={{
                        top: pos.top,
                        left: pos.left,
                        width: `350px`,
                        height: `350px`,
                        zIndex: 10,
                    }}
                >
                    <Stars />
                </div>
            ))}
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
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // Scale the random number to fit the range [min, max]
    const scaledNumber = randomNumber * (max - min + 1) + min;

    // Use Math.floor() to round down to the nearest integer
    return Math.floor(scaledNumber);
}

export default App;
