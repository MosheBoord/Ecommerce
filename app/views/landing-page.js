import React from "react";

const LandingPage = () => {
	let i = 500;
	const emojis = ["🦆", "😊", "💎", "💩", "⬜"];
	const arr = [];
	for (i; i > 0; i--) {
		// arr.push(emojis[i % emojis.length]);
		arr.push(emojis[Math.floor(Math.random() * emojis.length)]);
	}
	return (
		<div>
			{/* <h1>Hello! {arr}</h1> */}
			<img src="img/sample-product.jfif"></img>
		</div>
	);
};

export default LandingPage;
