import { Link } from "react-router-dom";
import "./descriptionScreen.css";

function DescriptionScreen() {
  return (
    <div className="gers-descriptionScreen-container">
      
      <div className="gers-descriptionScreen-text">
        
        <div>
          I made this game in React JS after reading an article about making text adventure games in React.
          More info about it can be found{" "}
          <Link
                className="gers-descriptionScreen-link"
                href="https://medium.com/@dimterion/making-an-interactive-text-adventure-game-with-react-779667cca2cb"
                target="_blank"
                rel="noopener noreferrer"
              >
            here
          </Link>
          .
        </div>
        <br />
        <div>
          The game is a text based Choose-Your-Own-Adventure-style football management game based (quite loosely) on the recent succession of managers at Glasgow Rangers F.C. If you aren't familiar with Scottish football or the works of H.P. Lovecraft you're probably gonna struggle here.
        </div>
        <br />
        <div>
          The game is aimed at Scottish football fans and the terminally online.
        </div>
        <br />
      </div>
        <br />
        <div>
          <h3 className="gers-descriptionScreen-subHeader">Tech Stack</h3>
          <ul className="gers-techStack-list">
            <li><Link href="https://react.dev/">React</Link></li>
            <li><Link href="https://v5.reactrouter.com/">React Router</Link></li>
            <li>CSS</li>
          </ul>
        </div>
     
    </div>
  );
}

export default DescriptionScreen;
