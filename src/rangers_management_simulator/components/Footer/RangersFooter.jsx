import "./rangersfooter.css";

function RangersFooter() {
  return (
    <div className="gers-footer-container">
      <a
        className="gers-footer-link"
        href="https://github.com/aagb1884/rangers_management_simulator"
        target="_blank"
        rel="noopener noreferrer"
      >
        Version 1.0.0
      </a>
      <br />
      <a
        className="gers-footer-link"
        href="https://andrewblair.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by Andrew Blair</a>
        <br />
        <a href='https://ko-fi.com/W7W1URM7B' target='_blank'><img height='36' 
        src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
    </div>
  );
}

export default RangersFooter;
