import React, { useState } from "react";
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
    const [currentTab, setCurrentTab] = useState(0);

    const tabView = {
        0: <Media />,
        1: <About />,
        3: <SoundCloud />,
    };

    const transitionClass = "transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 hover:duration-300";

    return (
        <div className="relative flex justify-end">
            {/* INFO DIV */}
            <div className="fixed top-40 left-9 bottom-0 flex flex-col justify-start z-50">
                <div>
                    <p className="text-8xl tracking-widest text-blue-900 phone:text-lg phone:text-left">muddi</p>
                    <div className="block pt-5 phone:pt-2">
                        {navLinks.map((link) => (
                            <p
                                key={link.id}
                                className={`text-2xl tracking-widest text-blue-900 text-start cursor-pointer phone:text-base ${transitionClass}`}
                                onClick={() => setCurrentTab(link.id)}
                            >
                                {link.name}
                            </p>
                        ))}
                    </div>
                </div>
                {currentTab === 1 && (
                    <div className="font-semibold text-lg flex flex-col pt-[150px] text-sky-900">
                        <div className="flex justify-center gap-2">
                            <span>
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <span>muddistudios@gmail.com</span>
                        </div>
                        <div className="flex justify-center gap-2">
                            <span>
                                <i className="fa-solid fa-phone"></i>
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
