import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div className="about-container  pt-4 text-sky-900 pt-[170px]">
            <head>
                <title>About - Muddi Studio</title>
                <meta property="og:title" content="About - Muddi Studio" />
            </head>
            <div id="heading" className="about-heading">
                <Link to="/" className="about-text">
                    <span className="about-text01 font-semibold	text-lg">About</span>
                    <br />
                    <br />
                </Link>
            </div>
            <div id="about" className="about-about flex flex-col gap-12 text-md">
                <span className="about-text16 flex flex-col gap-1">
                    <span>
                        {" "}
                        Welcome to Muddi, a boutique destination for sound design & music services. Planted in a quiet
                        corner of Goa, our hybrid sound studio is dedicated to crafting immersive auditory experiences
                        across various mediums.
                    </span>{" "}
                    <br></br>
                    <span>
                        The space was set up in an independent house in 2020 and has been meticulously transformed into
                        a state-of-the-art recording and production facility that meets the highest commercial
                        standards. Our team is a diverse group of in-house composers: Rohit Gupta, Aditya Kapoor, and
                        Dhruv Bhola. Each brings a unique palette of sounds and a passion for creating evocative audio
                        landscapes.{" "}
                    </span>
                    <br></br>
                    <span>
                        Whether it's for film, television, video game, virtual reality, podcasts, or advertising, we
                        thrive on pushing the boundaries of what sound can achieve. Muddi has catered to music projects
                        including Peter Cat Recording Co., Run! It’s the Kid, Dee En, Ditty, and Begum, as well as
                        clients from the film, video game, advertising, and art world, including Royal Enfield, Netflix,
                        Serendipity Arts Festival, and The Audacity Collective.
                    </span>
                </span>
            </div>
        </div>
    );
};
