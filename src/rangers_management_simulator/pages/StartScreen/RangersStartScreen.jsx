import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Footer/RangersFooter";
import LoadModal from "../../components/Modals/LoadModal";
import "./rangersStartScreen.css";
import '../../gers-index.css'

function RangersStartScreen() {
  const [loadModalOpen, setLoadModalOpen] = useState(false)
  return (
    <div className="gers-startScreen-container">
      
      <h1 className="gers-startScreen-title">You are the Rangers Manager</h1><div className="gers-startScreen-cover">
        <div className="gers-startScreen-image"></div>
        <div className="gers-startScreen-image"></div>
        <div className="gers-startScreen-image"></div>
      </div>
      <h2 className="gers-startScreen-subtitle">A Scottish football simulator.</h2>
      <div className="gers-startScreen-menu">
        <Link className="gers-startScreen-btn" to="/rangers/game">
          Start
        </Link>
        <Link className="gers-startScreen-btn" to="/">
          Home
        </Link>
        <Link className="gers-startScreen-btn" to="/rangers/credits">
          Credits
        </Link>
        <button className="gers-startScreen-btn" onClick={() => setLoadModalOpen(true)}>
          Load Game
        </button>
        {loadModalOpen && (
          <LoadModal
          setLoadModalOpen={setLoadModalOpen} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default RangersStartScreen;
