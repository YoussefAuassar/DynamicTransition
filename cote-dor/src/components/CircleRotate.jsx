import React, { useRef } from "react";
import "../styles/CircleRotate.css";
import { motion, useInView } from "framer-motion";
import Cirkel from "/src/assets/svg/cirkel-1883.svg";
import Walnoot from "/src/assets/png/walnoten-2.png";

const CircleRotate = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<div id="circle-container" ref={ref}>
			{/* Animate text to come from the left */}
			<motion.h1
				id="chocolate-text"
				initial={{ x: "-100vw", opacity: 0 }}
				animate={{ x: isInView ? 0 : "-100vw", opacity: isInView ? 1 : 0 }}
				transition={{ type: "spring", stiffness: 50, damping: 20, duration: 2 }}
			>
				<span className="ivory-text">Côte d'Or</span> is a prestigious Belgian
				chocolate <br />
				brand, established in 1883, known for its rich, <br />
				high-quality chocolate.
			</motion.h1>

			{/* Animate image scaling */}
			<motion.img
				src={Walnoot}
				alt="Walnoot Background"
				id="walnoot-background"
				initial={{ scale: 0.8 }}
				animate={{ scale: isInView ? 1.1 : 0.9 }} // Animate scale when in view
				transition={{
					ease: "easeInOut",
					duration: 1,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			/>

			{/* Animate rotating badge from the left */}
			<motion.img
				src={Cirkel}
				alt="Côte d'Or Badge"
				id="rotating-badge"
				animate={{ rotate: isInView ? 360 : 0 }}
				transition={{ ease: "linear", duration: 10, repeat: Infinity }}
			/>
		</div>
	);
};

export default CircleRotate;
