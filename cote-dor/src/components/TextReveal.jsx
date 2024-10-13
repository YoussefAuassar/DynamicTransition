import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; 
import { motion, useInView } from "framer-motion"; 
import "../styles/TextReveal.css"; 
import Ele from "/src/assets/png/elephant-choco.png"; 

const TextReveal = () => {
    const textRef = useRef(null);
    const text = "The Symbol of Côte d'Or"; 
    const imageRef = useRef(null); 
    const isInView = useInView(imageRef, { once: true }); 

    const typewriterEffect = () => {
        const letters = Array.from(text);
        textRef.current.innerHTML = "";
        
        letters.forEach((letter, index) => {
            const letterSpan = document.createElement("span");
            letterSpan.textContent = letter;
            textRef.current.appendChild(letterSpan);
            
            gsap.fromTo(
                letterSpan,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "power2.out",
                    onComplete: () => {
                        if (index === letters.length - 1) {
                            setTimeout(() => {
                                textRef.current.innerHTML = ""; 
                                typewriterEffect(); 
                            }, 1000); 
                        }
                    }
                }
            );
        });
    };

    useEffect(() => {
        typewriterEffect(); 
    }, []);

    return (
        <div className="text-reveal-container">
            <div className="elephant-image" ref={imageRef}>
                <motion.img
                    src={Ele}
                    alt="Côte d'Or Elephant"
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    animate={{ 
                        opacity: isInView ? 1 : 0, 
                        scale: isInView ? 1 : 0.8, 
                        rotate: isInView ? 360 : 0 
                    }} 
                    transition={{ 
                        duration: 1.5, 
                        ease: [0.6, 0.05, 0.2, 0.9] 
                    }} 
                />
            </div>
            <div className="text-content-symbol">
                <h2 ref={textRef}></h2>
                <p>
                    The elephant is Côte d'Or's iconic symbol, <br /> representing strength 
                    and rich heritage <br /> in chocolate-making since 1883.
                </p>
            </div>
        </div>
    );
};

export default TextReveal;
