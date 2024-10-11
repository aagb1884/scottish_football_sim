import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import './modal.css'

function LoadModal ({setLoadModalOpen}) {
    const [idNumber, setIdNumber] = useState(1);
    const navigate = useNavigate();

    const highWarning = idNumber > 138 ? 'Too high. Stop it.' : '';
    const lowWarning = idNumber < 0 ? 'Too low. Stop it.' : '';

    return (
        <div
        className="modal-wrapper"
        onClick={() => navigate('/')}
      >
        <div
          className="modal"
          onClick={e => e.stopPropagation()}
        >
        <section className="text">
            <p>Enter the ID number for the game stage you want here (1-138):</p>
            <div className="warning">
            <p>{lowWarning}{highWarning}</p>
            <input 
            id="id-input"
            type="number"
            min="1"
            max="138"
            placeholder="Enter ID number here"
            onChange={e => setIdNumber(e.target.value)}
            name="load-game"/>
            <NavLink
            to="/rangers/game"
            state={{ game_id: idNumber }}>
            <button className="load-game-btn">Load Game</button>
            </NavLink>
            </div>
        </section>
        <button className="modalExit-btn" onClick={() => setLoadModalOpen(false)}>
            Click Here to Return to Game Page
        </button>
        
        </div>
        
        </div>
    )
};

export default LoadModal;