import "./descriptionScreen.css";

function DescriptionScreen() {
  return (
    <div className="descriptionScreen-container">
      
      <div className="descriptionScreen-text">
        
        <div>
          I made these games in React JS after reading an article about making text adventure games in React.
          More info about it can be found{" "}
          <a
                className="descriptionScreen-link"
                href="https://medium.com/@dimterion/making-an-interactive-text-adventure-game-with-react-779667cca2cb"
                target="_blank"
                rel="noopener noreferrer"
              >
            here
          </a>
          .
        </div>
        <br />
        <div>
          These are text based/roguelike/Choose-Your-Own-Adventure-style football management games, though to be clear there isn't a huge amount of football management in them.
        </div>
        <br />
        <div>
          They are aimed at Scottish football fans and the terminally online.
        </div>
        <br />
      </div>
        <br />
        <div>
          <h3 className="descriptionScreen-subHeader">Tech Stack</h3>
          <ul className="techStack-list">
            <li><a href="https://react.dev/">React</a></li>
            <li><a href="https://v5.reactrouter.com/">React Router</a></li>
            <li>CSS</li>
          </ul>
        </div>
     
    </div>
  );
}

export default DescriptionScreen;
