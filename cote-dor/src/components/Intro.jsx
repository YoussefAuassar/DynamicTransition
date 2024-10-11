import React from "react";
import "../styles/Intro.css";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import YourImage1 from "/src/assets/png/pixelcut-export-3.png";
import YourImage2 from "/src/assets/png/pixelcut-export-small.png";
import YourImage3 from "/src/assets/png/Ellipse.png";

const Intro = () => {
    return (
        <>
            <ParallaxLayer offset={0} speed={0.8} style={{ pointerEvents: "none" }}>
                <img id="unique-chocolate-image" src={YourImage1} alt="Chocolate" />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1} style={{ pointerEvents: "none" }}>
                <img id="unique-chocolate-image-3" src={YourImage3} alt="Chocolate" />
            </ParallaxLayer>
            

            <ParallaxLayer offset={0} speed={1}>
                <div className="text-container">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3 }}
                    >
                        Côte d'Or
                    </motion.h1>

                    <motion.p
                        id="intro-p"
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

            <ParallaxLayer offset={0} speed={1.4} style={{ pointerEvents: "none" }}>
                <img id="unique-chocolate-image-2" src={YourImage2} alt="Chocolate" />
            </ParallaxLayer>

            
        </>
    );
};

export default Intro;
