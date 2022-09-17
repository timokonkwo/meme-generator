import memesData from "../assets/memesData";
import { useState } from "react";


export default function Meme() {
	function getMemeImg(){
		const memeImgs = memesData.data.memes;
		const imgUrl = memeImgs[Math.floor(Math.random() * memeImgs.length)].url;

		setMeme(prevMemeState => ({
			...prevMemeState,
			randomImg: imgUrl
		}))
	}

	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImg: "http://i.imgflip.com/1bij.jpg"
	});

	return (
		<main className="container">
			<div className="input-container">
				<input type="text" placeholder="top text" />
				<input type="text" placeholder="bottom text" />
			</div>
			<button onClick={getMemeImg}>Get a new meme image 👀</button>

			<div className="container">
				<img src={meme.randomImg} />
			</div>
		</main>
	);
}
