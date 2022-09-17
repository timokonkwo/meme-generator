import trollface from "../assets/img/troll-face.png";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={trollface} alt="" />
                Meme Generator
			</div>

            <p>
				<a href="https://github.com/timokonkwo/meme-generator">
					
				<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="github-icon"/>
					View on github
					</a> 

				</p>
		</div>
	);
}
