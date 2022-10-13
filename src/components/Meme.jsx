import { useState, useEffect } from "react";

//API -> "https://api.imgflip.com/get_memes"

export default function Meme() {
	
	// Set the meme state
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImg: "http://i.imgflip.com/1bij.jpg",
	});

	// initialize the all Memes Data state
	const [allMemesData, setallMemesData] = useState("");


	// Initialize the useEffect to run anytime the meme state changes.
	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(data => setallMemesData(data.data.memes))
	}, [meme])


	// Getting a random img from the allMemesData array
	function getMemeImg(){
		const imgUrl = allMemesData[Math.floor(Math.random() * allMemesData.length)].url;

		// Change the current state with the new img
		setMeme(prevMeme => ({
			...prevMeme,
			randomImg: imgUrl
		}))
	}

	// Set the meme top and bottom text
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
