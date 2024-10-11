import React, { useRef } from "react";
import "../styles/History.css";
import Intro from "../components/Intro";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CircleRotate from "../components/CircleRotate";

const History = () => {
	const ref = useRef();
	return (
		<Parallax pages={3} ref={ref}>
			<ParallaxLayer offset={0} speed={1}>
				<Intro />
			</ParallaxLayer>

			<ParallaxLayer offset={1} speed={1.5}>
				<CircleRotate />
			</ParallaxLayer>
		</Parallax>
	);
};

export default History;
