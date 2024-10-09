import React from "react";
import "../styles/History.css";

// Importing react-spring
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Importing GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Importing framer-motion
import { motion } from "framer-motion";

import YourImage from "/src/assets/png/cote-d'or-blur-chocolate.png";

gsap.registerPlugin(useGSAP);

const History = () => {
	return (
		<Parallax pages={5}>
			<ParallaxLayer
				offset={0}
				speed={1}

				style={{ backgroundColor: "#920000" }}
			>
				<div className="text-container">
					<motion.h1
						initial={{ opacity: 0, y: -50 }}b  
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 3 }}
					>
						Côte d'Or
					</motion.h1>

					<motion.p id="intro-p"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							stiffness: 80,
							damping: 20,
							duration: 2.5,
							delay: 1,
						}}
					>
						The Belgian chocolate
					</motion.p>
				</div>
			</ParallaxLayer>

			{/* <ParallaxLayer offset={0} speed={1.2} style={{ pointerEvents: "none" }}>
				<img id="unique-chocolate-image" src={YourImage} alt="Chocolate" />
			</ParallaxLayer> */}

			{/* <ParallaxLayer offset={1.5} speed={2} sticky={{ start: 1.2, end: 1.5 }} style={{ pointerEvents: "none" }}>
				<p id="second-p">
					Côte d'Or is a prestigious Belgian chocolate <br />
					brand, established in 1883, known for its rich, <br />
					high-quality chocolate.
				</p>
			</ParallaxLayer> */}
		</Parallax>
	);
};

export default History;
