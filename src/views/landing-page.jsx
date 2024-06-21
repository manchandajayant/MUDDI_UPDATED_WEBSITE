import React, { useState } from "react";
import Sphere from "../Components/sphere";
import { About } from "./about";
import { Media } from "./media";
import { SoundCloud } from "./soundcloud";

const navLinks = [
    { name: "media", id: 0 },
    { name: "about", id: 1 },
    // { name: "services", id: 2 },
    // { name: "soundcloud", id: 3 },
];

export const LandingPage = (props) => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [currentTab, setCurrentTab] = useState(0);

    const tabView = {
        0: <Media />,
        1: <About />,
        3: <SoundCloud />,
    };
    console.log(currentTab);
    const transitionClass = "transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 hover: duration-300";
    return (
        <div className="flex justify-end">
            {/* INFO DIV */}
            <div className="fixed top-40 left-9 bottom-0 flex flex-col justify-start">
                <div className="">
                    <p className="text-7xl tracking-widest text-blue-900 phone:text-lg phone:text-left">
                        muddi studios
                    </p>
                    <div className="block pt-5 phone:pt-2">
                        {navLinks.map((link) => (
                            // <Link to={link.link}>
                            <p
                                className={`text-2xl tracking-widest text-blue-900 text-start cursor-pointer phone:text-base`}
                                onClick={() => setCurrentTab(link.id)}
                            >
                                {link.name}
                            </p>
                            // </Link>
                        ))}
                        <div className="w-1/2 h-auto">
                            <Sphere />
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col justify-end">
                    <div className="">
                        <p className="text-blue-900 text-lg tracking-widest phone:text-base">Contact Us</p>
                    </div>
                    <div>
                        <p className="text-blue-900 text-lg tracking-widest phone:text-base">muddi.studio@gmail.com</p>
                        <p className="text-blue-900 text-lg tracking-widest phone:text-base">+919871536506</p>
                    </div>
                </div> */}
                {currentTab === 1 && (
                    <div className="font-semibold text-lg flex flex-col pt-[150px] text-sky-900">
                        <span>Contact us at : </span>
                        <div className="flex justify-center gap-2">
                            <span>
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            <span>muddistudios@gmail.com</span>
                        </div>
                        <div className="flex justify-center gap-2">
                            <span>
                                <i class="fa-solid fa-phone"></i>
                            </span>
                            <span>+919871536506</span>
                        </div>
                    </div>
                )}
            </div>
            {/* MEDIA DIV */}
            <div className="w-1/2 h-auto p-5">{tabView[currentTab]}</div>
        </div>
    );
};
