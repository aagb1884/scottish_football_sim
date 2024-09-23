import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
import "./rangersStartScreen.css";

function StartScreen() {
  return (
    <div className="gers-startScreen-container">
      
      <h1 className="gers-startScreen-title">You are the Rangers Manager</h1><div className="startScreen-cover">
        <div className="gers-startScreen-image"></div>
        <div className="gers-startScreen-image"></div>
        <div className="startScreen-image"></div>
      </div>
      <h2 className="gers-startScreen-subtitle">A Scottish football simulator.</h2>
      <h2 className="gers-startScreen-title">COMING SOON</h2>
      <div className="gers-startScreen-menu">
        <Link className="startScreen-btn" to="/">
          Home
        </Link>
        <Link className="startScreen-btn" to="/about">
          About
        </Link>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default StartScreen;