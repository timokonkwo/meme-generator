import trollface from "../assets/img/troll-face.png";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={trollface} alt="" />
                Meme Generator
			</div>

            <p>React Course - Project 3</p>
		</div>
	);
}
