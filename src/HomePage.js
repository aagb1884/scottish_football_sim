import { Link } from "react-router-dom";
import deek from './derek_adams_simulator/images/d-adams.jpeg';
import jason from './images/we_ve_got_jason_cummings_by_broomieart_dc1jjpg-fullview.jpg';
import stramash from './images/stramash.png';
import Footer from "./components/Footer";
import './homepage.css'
import Title from "./components/Title";

function HomePage() {
  
    return (
      
      <div className="home-page-container">
        <div className="home-page-animation"></div>
          <div className="home-page-content">
      <h1 className="website-title-c1"><Title /></h1>
    
      <div className="hp-links-c2">
      <div className="hp-row1">
        <div className="hp-button-div">
         
      <Link className="home-page-link" to="/derekadams"> 
        <img    
        src={deek} 
        alt="Derek Adams Simulator link"
        title="Derek Adams Simulator" 
        border="0"
        className="hp-button-image"/>
        <div className="hp-button-text1">Derek Adams Simulator</div>                 
      </Link>
        </div>

        <div className="hp-button-div">
        <Link className="home-page-link" to="/hibs-merger"> 
        <div className="hp-button-div-hibs">
         <div className="hp-button-text1">The Hibs Manager Merger</div> 
        </div>
        </Link>
        </div>
        </div>

        <div className="hp-row2">
        <div className="hp-button-div">
      <Link className="home-page-link" to="/rangers">
      <img    
        src={jason} 
        alt="Rangers Management Simulator link"
        title="Rangers Management Simulator" 
        border="0"
        className="hp-button-image"/>
        <div className="hp-button-text2">Rangers Management Simulator</div>   
      </Link>
        </div>

        <div className="hp-button-div">
      <Link className="home-page-link" to="/stramash">
      <img    
        src={stramash} 
        alt="Stramash link"
        title="Stramash! It's not not Scottish Football Wordle" 
        border="0"
        className="hp-button-image"/>
        {/* <div className="hp-button-text2">Rangers Management Simulator</div>    */}
      </Link>
        </div>
        </div>

      </div>

          </div>
          <div className="footer-div">
        <Footer />
          </div>
      </div>
    );
  }
  
  export default HomePage;