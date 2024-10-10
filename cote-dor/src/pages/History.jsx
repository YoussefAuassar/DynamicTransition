import React, { useRef } from "react";
import "../styles/History.css";
import Intro from "../components/Intro";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const History = () => {
    const ref = useRef();
    return (
        <Parallax pages={5} ref={ref}>
            <ParallaxLayer offset={0} speed={0.5}>
                <Intro />
            </ParallaxLayer>
            {/* Add other Parallax Layers as needed */}
        </Parallax>
    );
};

export default History;
