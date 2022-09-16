import memesData from "../assets/memesData";
import { useState } from "react";


export default function Meme() {
	function getImg(){
		const memes = memesData.data.memes;
		const imgUrl = memes[Math.floor(Math.random() * memes.length)].url;

		setImg(prev => imgUrl)
	}

	const [img, setImg] = useState("");

	return (
		<main className="container">
			<div className="input-container">
				<input type="text" placeholder="top text" />
				<input type="text" placeholder="bottom text" />
			</div>
			<button onClick={getImg}>Get a new meme image 👀</button>

			<div className="container">
				<img src={img} />
			</div>
		</main>
	);
}
