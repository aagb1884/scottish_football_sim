import Board from "../components/board";
import Score from "../components/score";
import styles from "../styles/index.module.css";
import '../styles/globals.css';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HibsMergePage() {
  const [instructionsVisible, setInstructionsVisible] = useState(false)

  return (
    <div className={styles.twenty48}>

      <div className="hibs-header">
        <h1 style={{color: 'var(--primary-text-color)'}}>Who's in the Hibs dugout?</h1>
        <Score />
      </div>
      <div className="instructions-container">
        <button className={styles.button} onClick={() => setInstructionsVisible(!instructionsVisible)}>How do I play this?</button>
        {instructionsVisible && (
          <div className="instructions">
          <p>You have a 4 x 4 grid, starting with two tiles showing a picture of Pat Fenlon.</p>
          <p>You can either use the arrow keys on the keyboard or flick your touchscreen in the direction you want all the tiles to move.</p>
          <p>If two identical tiles collide, they will merge into a new tile showing the next Hibs manager.</p>
          <p>The aim of the game is to reach David Gray.</p>
          </div>
        )}
      </div>
      <br />
      <main className="hibs-merge-main">
        <Board />
      </main>
     
      <footer className="hibs-merge-footer">
        
        <div>All the actual clever bits of coding come from{" "} 
        <a
            className="credit"
            href="https://mateuszsokola.github.io/2048-in-react/"
            target="_blank"
            rel="noopener"
          >
            this 2048 game
        </a> by{" "} 
        <a
            className="credit"
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
