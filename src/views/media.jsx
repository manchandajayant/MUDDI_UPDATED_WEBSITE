import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import AudioLoader from "../Components/loader";
import sea from "../assets/2.gif";
import ice from "../assets/3.gif";
import person from "../assets/4.gif";
import netflix from "../assets/netflix.gif";

const images = [
    { name: netflix, videoId: "4W5ocAI2O3k", mobileStyling: "phone:fixed phone:left-0 phone:w-60" },
    { name: ice, videoId: "AG0rkpICoiw", mobileStyling: "phone:fixed phone:top-64 phone:left-40 phone:w-60" },
    { name: sea, videoId: "-nFxXNgNPiI", mobileStyling: "phone:fixed phone:top-[30rem] phone:left-0 phone:w-60" },
    { name: person, videoId: "avlTgF5gQow", mobileStyling: "phone:fixed phone:top-[48rem] phone:left-40 phone:w-60" },
];

export const Media = (props) => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = () => {
            return images.map((img) => {
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.src = img.name;
                    image.onload = resolve;
                    image.onerror = reject;
                });
            });
        };

        const preloadAssets = async () => {
            try {
                await Promise.all(preloadImages());
                setIsLoaded(true);
            } catch (error) {
                console.error("Error loading assets", error);
            }
        };

        preloadAssets();
    }, []);

    if (!isLoaded) {
        return (
            <div className="h-full w-full">
                <AudioLoader />
            </div>
        );
    }

    return images.map((img, index) => {
        return (
            <div
                key={index}
                className={`large-desktop:w-full relative rounded ${img.mobileStyling} z-50`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
            >
                <div className={`${hoveredIndex === index ? "visible" : "invisible fixed"}`}>
                    <YouTube videoId={img.videoId} containerClassName="youtube-video" />
                </div>
                {hoveredIndex !== index && <img src={img.name} alt={`Image ${index}`} className={`p-4 rounded-lg`} />}
            </div>
        );
    });
};
