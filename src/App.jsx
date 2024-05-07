import React from "react";
import "./App.css";
import { LandingView } from "./views/landing-view";

function App() {
    return (
        <div className="bg-gradient-to-l from-gray-100">
            <LandingView />
            {/* <Routes>
                <Route exact path="/" element={<LandingView/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/media" element={<Media/>}/>
            </Routes> */}
        </div>
    );
}

export default App;
