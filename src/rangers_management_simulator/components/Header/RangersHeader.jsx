import { Link } from "react-router-dom";
import "./rangersheader.css";


function RangersHeader() {

  return (
    <div className="gers-header-container">
      <Link className="gers-header-link" to="/">
        Home
      </Link>
            
      <Link className="gers-header-link" to="/rangers">
        Game Menu
      </Link>

      <Link className="gers-header-link" to="/about">
        About
      </Link>

      <Link className="gers-header-link" to="/rangers/credits">
        Credits
      </Link>
  
    </div>
  );
}

export default RangersHeader;
