import React, { useEffect } from "react";
import { useSpring, animated as anim } from "react-spring";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };

const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const ChocolateBlob = ({ blobColor, backgroundColor, children, sizes }) => {
	const [{ pos1 }, spring1] = useSpring(() => ({ pos1: [0, 0], config: fast }));
	const [{ pos2 }] = useSpring(() => ({ pos2: pos1, config: slow }));
	const [{ pos3 }] = useSpring(() => ({ pos3: pos2, config: slow }));
	const { circle1, circle2, circle3 } = sizes;

	useEffect(() => {
		const handler = ({ clientX, clientY }) =>
			spring1.set({ pos1: [clientX, clientY] });
		window.addEventListener("mousemove", handler);
		return () => window.removeEventListener("mousemove", handler);
	}, [spring1]);

	const circleStyle = {
		position: "absolute",
		willChange: "transform",
		borderRadius: "50%",
		background: blobColor ? blobColor : "lightcoral",
		boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.75)",
		opacity: "0.6",
	};

	const circle1Style = {
		...circleStyle,
		...circle1,
	};

	const circle2Style = {
		...circleStyle,
		...circle2,
	};

	const circle3Style = {
		...circleStyle,
		...circle3,
	};

	const filterStyle = {
		position: "relative",
		width: "100%",
		height: "100%",
		filter: "url(#goo)",
		overflow: "hidden",
	};

	return (
		<>
			<svg style={{ position: "absolute", width: 0, height: 0 }}>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
					<feColorMatrix
						in="blur"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
					/>
				</filter>
			</svg>
			<div
				style={{
					width: "100%",
					height: "100vh", 
					backgroundColor: "white",
					fontFamily:
						"-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
					background: "transparent",
					WebkitTouchCallout: "none",
					WebkitUserSelect: "none",
					KhtmlUserSelect: "none",
					MozUserSelect: "none",
					msUserSelect: "none",
					userSelect: "none",
					cursor: "default",
				}}
			>
				<div
					style={{
						width: "100%",
						height: "100%",
						background: `${backgroundColor ? backgroundColor : "lightcoral"}`,
						overflow: "hidden",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{children && children}
					<div style={filterStyle}>
						<anim.div
							style={{ ...circle1Style, transform: pos3.interpolate(trans) }}
						/>
						<anim.div
							style={{ ...circle2Style, transform: pos2.interpolate(trans) }}
						/>
						<anim.div
							style={{ ...circle3Style, transform: pos1.interpolate(trans) }}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChocolateBlob;
