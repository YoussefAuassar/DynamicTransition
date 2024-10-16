import React, { useRef } from "react";
import "../styles/History.css";
import Intro from "../components/Intro";
import Final from "../components/Final";
import Products from "../components/Products";
import TextReveal from "../components/TextReveal";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CircleRotate from "../components/CircleRotate";

const History = () => {
	const ref = useRef();
	return (
		<Parallax pages={8} ref={ref}>
			<ParallaxLayer offset={0} speed={1}>
				<Intro />
			</ParallaxLayer>

			<ParallaxLayer offset={1} speed={1.5}>
				<CircleRotate />
			</ParallaxLayer>

			<ParallaxLayer offset={2} speed={2}>
				<TextReveal />
			</ParallaxLayer>

			<ParallaxLayer offset={3} speed={2.5}>
				<Products />
			</ParallaxLayer>

			<ParallaxLayer offset={4} speed={1}>
				<Final />
			</ParallaxLayer>
		</Parallax>
	);
};

export default History;
