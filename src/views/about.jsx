import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div className="about-container">
            <head>
                <title>About - Muddi Studio</title>
                <meta property="og:title" content="About - Muddi Studio" />
            </head>
            <div id="heading" className="about-heading">
                <Link to="/" className="about-text">
                    <span className="about-text01">Muddi Studio</span>
                    <br />
                    <br />
                </Link>
            </div>
            <div id="about" className="about-about">
                <span className="about-text16">
                    <span>
                        Welcome to Muddi Studio, a boutique destination for comprehensive audio solutions, specializing
                        in sound design and music composition. Based in Goa, our hybrid sound studio is dedicated to
                        crafting immersive auditory experiences across various mediums.
                        <span
                            dangerouslySetInnerHTML={{
                                __html: " ",
                            }}
                        />
                    </span>
                    <br />
                    <br />
                    <span>
                        Our team is made up of a diverse group of in-house composers who are passionate about creating
                        innovative and impactful audio branding solutions. Whether it's for film, television, video
                        games, virtual reality, or advertising, the team utilizes cutting-edge technology and a creative
                        approach to bring visions to life through sound.
                    </span>
                    <br />
                    <br />
                    <span>
                        The studio is set up in an independent house as a hybrid recording, production &amp; performance
                        studio by our in-house sound designers &amp; composers Rohit Gupta, Aditya Kapoor &amp; Dhruv
                        Bhola.
                        <span
                            dangerouslySetInnerHTML={{
                                __html: " ",
                            }}
                        />
                    </span>
                    <br />
                    <br />
                    <span>
                        MUDDI has catered to our personal projects including Peter Cat Recording Co., Run! its the Kid,
                        Dee En, Ditty, Begum plus clients from the film, advertising &amp; the art world including Royal
                        Enfield, Netflix, Serendipity Arts festival &amp; The Audacity Collective.
                    </span>
                </span>
            </div>
        </div>
    );
};

