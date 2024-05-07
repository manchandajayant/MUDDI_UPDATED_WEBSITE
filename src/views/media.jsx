import React, { useState } from "react";
import sea from "../assets/2.gif";

import ice from "../assets/3.gif";
import person from "../assets/4.gif";
import netflix from "../assets/netflix.gif";

import YouTube from "react-youtube";

export const Media = (props) => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    console.log("here")
    
    return images.map((img, index) => {
        return (
            <div
                key={index}
                className={`large-desktop:w-full relative rounded ${img.mobileStyling}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
            >
                <div className={`${hoveredIndex === index ? "visible" : "invisible fixed"}`}>
                    <YouTube
                        videoId={images.videoId} // video id you want to show
                        containerClassName="youtube-video"
                    />
                </div>
                {hoveredIndex !== index && <img src={img.name} alt={`Image ${index}`} className={`p-4 rounded-lg]`} />}
            </div>
        );
    });
};

const images = [
    { name: netflix, videoId: "", mobileStyling: "phone:fixed phone:left-0 phone:w-60" },
    { name: ice, videoId: "", mobileStyling: "phone:fixed phone:top-64 phone:left-40 phone:w-60" },
    { name: sea, videoId: "", mobileStyling: "phone:fixed phone:top-[30rem] phone:left-0 phone:w-60" },
    { name: person, videoId: "", mobileStyling: "phone:fixed phone:top-[48rem] phone:left-40 phone:w-60" },
];
