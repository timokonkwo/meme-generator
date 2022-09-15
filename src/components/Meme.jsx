export default function Meme() {
	return (
		<main className="container">
			<form>
				<div className="input-container">
					<input 
                        type="text"
                        placeholder="top text"
                     />
					<input 
                        type="text" 
                        placeholder="bottom text"
                    />
				</div>
				<button>Get a new meme image</button>
			</form>
		</main>
	);
}
