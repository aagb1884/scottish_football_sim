import { GameContext } from "../context/game-context";
import styles from "../styles/splash.module.css";
import { useContext } from "react";

export default function Splash({ heading = "You won!", type = "" }) {
  const { startGame } = useContext(GameContext);

  const playAgain = () => {window.location.reload()}

  return (
    <div className={`${styles.splash} ${type === "won" && styles.win}`}>
      <div>
        <h1>{heading}</h1>
        <button className={styles.button} onClick={playAgain}>
          Play again
        </button>
      </div>
    </div>
  );
}
