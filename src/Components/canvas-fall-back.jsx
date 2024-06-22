// CanvasFallback.js

import React from "react";

const CanvasFallback = ({ width, height }) => {
    return (
        <canvas width={width} height={height} style={{ width: "100%", height: "100%" }}>
            {/* Add fallback content here, e.g., a static image or simple canvas drawing */}
            Your browser does not support WebGL.
        </canvas>
    );
};

export default CanvasFallback;
