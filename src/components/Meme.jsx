import memesData from "../assets/memesData";

export default function Meme() {
	const memes = memesData.data.memes;
	const imgUrl = memes[Math.floor(Math.random() * memes.length)].url;
	console.log(imgUrl)
	return (
		<main className="container">
			<div className="input-container">
				<input type="text" placeholder="top text" />
				<input type="text" placeholder="bottom text" />
			</div>
			<button>Get a new meme image 👀</button>

			<div className="container">
				<img src={imgUrl} />
			</div>
		</main>
	);
}
