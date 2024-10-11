import { useState } from "react";
import RangersHeader from "../Header/RangersHeader";
import RangersFooter from "../Footer/RangersFooter";
import "./rangersMainComponent.css";
import SaveModal from "../Modals/SaveModal";


function RangersMainComponent({
  id,
  text,
  date,
  btnLeft,
  btnRight,
  setOption,
  idLeft,
  idRight,
  image,
  alt
  }) {
    const [menuToggle, setMenuToggle] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
   
      const handleMenuToggle = () => {
      setMenuToggle(!menuToggle);
    };

    console.log('id', id)

  return (
    <>
    {menuToggle && <RangersHeader />}
    <div className="gers-mainComponent-container">
      
      <h1>You are the Rangers Manager</h1>
      
        <div className="gers-mainComponent-imageAndText">
        <label className="gers-mainComponent-menuBtn" htmlFor="menuToggle">
      <input
        type="checkbox"
        id="menuToggle"
        className="menuToggle"
        checked={menuToggle}
        onChange={handleMenuToggle}
      />
    </label>
        <img className="gers-mainComponent-image" src={image} alt={alt} />
        <p className="gers-mainComponent-text">
          <b>{date}</b>
          <br />
          <br />
          {text}</p>
        </div>
  
        <div className="gers-mainComponent-options">

          {idLeft === null && idRight === null ? <></> :
          <>
          <div className="gers-mainComponent-buttons">

          <button
            onClick={() => setOption(idLeft)}
            className="gers-mainComponent-leftBtn"
          >
            {btnLeft}
          </button>
          <button
            onClick={() => setOption(idRight)}
            className="gers-mainComponent-rightBtn"
          >
            {btnRight}
          </button>

          </div>
        <div>
          <button className="gers-startScreen-btn" onClick={() => setModalOpen(true)}>
            Save Game
          </button>
          {modalOpen && (
          <SaveModal
          id={id}
          setModalOpen={setModalOpen} />
        )}
        </div>
        </>
          }
      </div>
      <RangersFooter />
    </div>
   </>
  );
}

export default RangersMainComponent;
