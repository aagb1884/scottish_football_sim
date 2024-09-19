import './error.css'
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="errorScreen-container">
            <h1>404 - Error</h1>
        <div className="errorScreen-cover">
        <div className="errorScreen-image"></div>
        <div className="errorScreen-image"></div>
        <div className="errorScreen-image"></div>

        </div>
        <div className='error-text'>
        <p>There's no page with that address, sorry.</p>
        <br />
        <Link classname="error-home" to="/"
        style={{color: 'white'}}>
          Home
        </Link>
        </div>
      </div>
    )
}

export default Error;