import React, { useRef } from "react";
import "../styles/Products.css";
import OldChoco from "/src/assets/png/old-choco.png";
import { motion, useDragControls } from "framer-motion";

const Products = () => {
	const controls = useDragControls();
	const constraintsRef = useRef(null);

	const startDrag = (event) => {
		controls.start(event, { snapToCursor: true });
	};

	return (
		<div className="products-container" ref={constraintsRef}>
			<h3>
				<span className="white-text">
					Did you know that this is the first <br />
					packaging of
				</span>{" "}
				Côte d'Or?
			</h3>
			<motion.div
				onPointerDown={startDrag}
				style={{ position: "relative", height: "100vh", width: "100%" }}
			>
				<motion.img
					src={OldChoco}
					alt="Old Chocolate"
					style={{
						position: "absolute",
						left: "50%",
						bottom: "20%",
						width: "30%",
						transform: "translate(-50%, -50%)"
					}}
					drag
					dragConstraints={constraintsRef} 
					dragElastic={0.2} 
				/>
			</motion.div>
		</div>
	);
};

export default Products;

