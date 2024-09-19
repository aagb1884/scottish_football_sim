import { Link } from "react-router-dom";
import "./da_header.css";


function DAHeader() {

  return (
    <div className="header-container">
      <Link className="header-link" to="/">
        Home
      </Link>

      <Link className="header-link" to="/derekadams">
        Game Menu
      </Link>
            
      <Link className="header-link" to="/about">
        About
      </Link>

      <Link className="header-link" to="/derekadams/credits">
        Credits
      </Link>

      
  
    </div>
  );
}

export default DAHeader;
