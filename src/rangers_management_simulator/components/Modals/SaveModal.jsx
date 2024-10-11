import { useNavigate } from "react-router-dom";
import './modal.css'
function SaveModal ({setModalOpen, id}) {

    const navigate = useNavigate();

    return (
        <div
        className="modal-wrapper"
        onClick={() => navigate('/game')}
      >
        <div
          className="modal"
          onClick={e => e.stopPropagation()}
        >
        <section className="text">
            <p>Okay so this isn't <i>really</i> a save function, but:</p> 
        
            <p>Put this number - <b>{id}</b> - into the Load function on the main game page.</p> 
            <p>This will take you to back to this stage of the game.</p>
        </section>
        <button className="modalExit-btn" onClick={() => setModalOpen(false)}>
            Click Here to Return To Game
        </button>
        
        </div>
        
        </div>
    )
};

export default SaveModal;