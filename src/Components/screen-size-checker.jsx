import { useEffect, useState } from "react";

const ScreenSizeChecker = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    const updateScreenSize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize);
        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    }, []);

    return { screenWidth, screenHeight };
};

export default ScreenSizeChecker;
