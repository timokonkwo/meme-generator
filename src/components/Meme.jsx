import memesData from "../assets/memesData";
import { useState } from "react";


export default function Meme() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImg: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMemeImages, setAllMemeImages] = useState(memesData);

	function getMemeImg(){
		const memeImgs = memesData.data.memes;
		const imgUrl = memeImgs[Math.floor(Math.random() * memeImgs.length)].url;

		setMeme(prevMeme => ({
			...prevMeme,
			randomImg: imgUrl
		}))
	}

	function setMemeText(e){
		const {name, value} = e.target;
		setMeme(prev => (
			{
				...prev,
				[name]: value,
			}
		))
	}

	return (
		<main className="container">
			<div className="input-container">
				<input 
				type="text" 
				name="topText" 
				placeholder="top text" 
				onChange={setMemeText}
				value={meme.topText}
				/>

				<input 
				type="text" 
				name="bottomText" 
				placeholder="bottom text" 
				onChange={setMemeText}
				value={meme.bottomText}

				/>
			</div>
			<button onClick={getMemeImg}>Get a new meme image 👀</button>

			<div className="container">
				<div className="meme">
					<img src={meme.randomImg} className="meme-img"/>
					<p className="topText">{meme.topText}</p>
					<p className="bottomText">{meme.bottomText}</p>
				</div>
					
			</div>
		</main>
	);
}
