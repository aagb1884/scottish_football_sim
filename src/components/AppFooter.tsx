import { Link } from "react-router-dom";

function AppFooter() {
  return (

<div className="footer-links">
<a
className="footer-link"
href="https://andrewblair.co.uk/"
target="_blank"
rel="noopener noreferrer"
>
Andrew Blair</a>

<Link className="footer-link" to="/">
Home
</Link>
<Link className="footer-link" to="/about">
About
</Link>

<a href='https://ko-fi.com/W7W1URM7B' target='_blank'><img height='36' 
src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>
</div>

);
}

export default AppFooter;