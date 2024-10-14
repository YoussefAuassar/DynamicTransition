import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Final.css";
import cotoro from "/src/assets/png/cot-1.png";

const Final = () => {
	useEffect(() => {
		let halfVW = window.innerWidth / 2;
		let halfVH = window.innerHeight / 2;

		const tl = gsap
			.timeline({ paused: true })
			.to(".chocolate:nth-child(1)", {
				x: `-=${halfVW / 2}`,
				y: `-=${halfVH / 2}`,
				rotate: -10,
				scale: 1.1,
			})
			.to(
				".chocolate:nth-child(2)",
				{ x: `+=${halfVW / 2}`, y: `-=${halfVH / 2}`, rotate: 10, scale: 1.1 },
				"<"
			)
			.to(
				".chocolate:nth-child(3)",
				{ x: `-=${halfVW / 2}`, y: `+=${halfVH / 2}`, rotate: 10, scale: 1.1 },
				"<"
			)
			.to(
				".chocolate:nth-child(4)",
				{ x: `+=${halfVW / 2}`, y: `+=${halfVH / 2}`, rotate: -10, scale: 1.1 },
				"<"
			)
			.to(".text-overlay", { opacity: 1, duration: 0.5 });

		const handleClick = () => {
			tl.restart();
		};

		const chocolates = document.querySelectorAll(".chocolate");
		chocolates.forEach((chocolate) => {
			chocolate.addEventListener("click", handleClick);
		});

		return () => {
			chocolates.forEach((chocolate) => {
				chocolate.removeEventListener("click", handleClick);
			});
		};
	}, []);

	return (
		<div className="cotedor-container">
			<img className="chocolate" src={cotoro} alt="Chocolate" />
			<img className="chocolate" src={cotoro} alt="Chocolate" />
			<img className="chocolate" src={cotoro} alt="Chocolate" />
			<img className="chocolate" src={cotoro} alt="Chocolate" />
			<div className="text-overlay">
				Cote d'Or offers a wide range of chocolate products, <br /> from milk
				chocolate to dark chocolate with <br /> varying percentages of cocoa
				content.
			</div>
		</div>
	);
};

export default Final;
