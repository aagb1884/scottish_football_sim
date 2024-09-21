import Board from "../components/board";
import Score from "../components/score";
import styles from "../styles/index.module.css";
import '../styles/globals.css';
import { Link } from "react-router-dom";

export default function HibsMergePage() {
  return (
    <div className={styles.twenty48}>

      <div className="hibs-header">
        <h1 style={{color: 'var(--primary-text-color)'}}>Who's in the Hibs dugout?</h1>
        <Score />
      </div>
      <main className="hibs-merge-main">
        <Board />
      </main>
     
      <footer className="hibs-merge-footer">
        
        <div>Based on{" "} 
        <a
            href="https://mateuszsokola.github.io/2048-in-react/"
            target="_blank"
            rel="noopener"
          >
            this 2048 game
        </a> by{" "} 
        <a
            href="https://github.com/mateuszsokola/2048-in-react"
            target="_blank"
            rel="noopener"
          >
            Matéush Zsokola
          </a>.
        </div>
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

      </footer>
    </div>
  );
}
