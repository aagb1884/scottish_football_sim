import "./da_footer.css";

function DAFooter() {
  return (
    <div className="da=-footer-container">
      <a
        className="da-footer-link"
        href="https://github.com/aagb1884/derek_adams_simulator"
        target="_blank"
        rel="noopener noreferrer"
      >
        Version 1.1.0
      </a>
      <br />
      <a
        className="da-footer-link"
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

export default DAFooter;
