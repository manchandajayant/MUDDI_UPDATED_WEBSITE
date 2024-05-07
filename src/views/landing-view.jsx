import React, { useEffect, useState } from "react";
import AudioLoader from "../Components/loader";
import { LandingPage } from "./landing-page";

export const LandingView = (props) => {
    const [count, setCount] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCount(true);
        }, 2000);
    }, []);

    if (count) {
        return <LandingPage />;
    }
    if (!count) {
        return (
            <div className="h-full w-full">
                {" "}
                <AudioLoader />
            </div>
        );
    }
};
