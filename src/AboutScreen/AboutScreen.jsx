import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./aboutScreen.css";
import DescriptionScreen from "./DescriptionScreen/DescriptionScreen";

function AboutScreen() {
  return (
    <div className="aboutScreen-container">
      <h1 className="aboutScreen-title">Scottish Football Simulators</h1>
      <h2>Reasonably Interactive Text-Adventure Games</h2>
      <DescriptionScreen />
        <div className="aboutScreen-linksContainer">

        <Link className="aboutScreen-link" to="/">
          {">"} Home
        </Link>
      </div>
      
      <div className="about-footer-div">
      <Footer />
      </div>
     
    </div>
  );
}

export default AboutScreen;
