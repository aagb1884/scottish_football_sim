import { useState } from "react";
import DAHeader from "../Header/DAHeader"
import DAFooter from "../Footer/DAFooter";
import "./mainComponent.css";



function MainComponent({
  text,
  date,
  btnLeft,
  btnRight,
  setOption,
  idLeft,
  idRight,
  image,
  alt,
  }) {
    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenuToggle = () => {
      setMenuToggle(!menuToggle);
    };

  return (
    <>
    {menuToggle && <DAHeader />}
    <div className="mainComponent-container">
      
      <h1>You are Derek Adams</h1>
      
        <div className="mainComponent-imageAndText">
        <label className="mainComponent-menuBtn" htmlFor="menuToggle">
      <input
        type="checkbox"
        id="menuToggle"
        className="menuToggle"
        checked={menuToggle}
        onChange={handleMenuToggle}
      />
    </label>
        <img className="mainComponent-image" src={image} alt={alt} />
        <p className="mainComponent-text">
          <b>{date}</b>
          <br />
          <br />
          {text}</p>
        </div>
        <div className="mainComponent-options">
          <div className="mainComponent-buttons">
          <button
            onClick={() => setOption(idLeft)}
            className="mainComponent-leftBtn"
          >
            {btnLeft}
          </button>
          <button
            onClick={() => setOption(idRight)}
            className="mainComponent-rightBtn"
          >
            {btnRight}
          </button>
        </div>
      </div>
      <DAFooter />
    </div>
   </>
  );
}

export default MainComponent;
