import "./App.css"
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";

export default function App(){
  return (
    <div className="wrapper">
      <Navbar />
      <Meme />
    </div>
  )
}