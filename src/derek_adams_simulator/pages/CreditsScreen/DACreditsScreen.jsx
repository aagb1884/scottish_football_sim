import { Link } from "react-router-dom";
import DAFooter from "../../components/Footer/DAFooter";
import "./creditsScreen.css";

function DACreditsScreen() {
  return (
    <section className="creditsScreen-container">
      <h1 className="creditsScreen-header">Derek Adams Simulator Credits</h1>
      <div className="creditsScreen-block">
        <h2 className="creditsScreen-text">Written and developed by{" "}<a
        className="creditsScreen-personalLink"
        href="https://andrewblair.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >Andrew Blair
      </a>
      </h2>
      </div>
      <br />
      <div className="creditsScreen-content"> 
        
        <br />
        
        <ul className="imageCreditsList">
        <h2 className="creditsScreen-text">Image credits</h2>
          <li><a className="creditsScreen-pictureCredit"
                href="https://en.m.wikipedia.org/wiki/File:Tynecastle_Park,_January_2018.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Tynecastle by Paul Henery</a> on <a href="https://creativecommons.org/licenses/by/4.0/deed.en">Creative Commons 4.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:GlobalEnergyStadiumDingwall.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Victoria Park by Euan Nelson</a> on <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">Creative Commons 2.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:St._Mirren_Park,_Paisley_-_geograph.org.uk_-_3950186.jpg"
                target="_blank"
                rel="noopener noreferrer">
          St Mirren Park by G Laird</a> on <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">Creative Commons 2.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Celtic_park_2.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Celtic Park by Zhi Yong Lee</a> on <a href="https://creativecommons.org/licenses/by/2.0/deed.en">Creative Commons 2.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Almondvale_Stadium_from_the_air_(geograph_5829416).jpg"
                target="_blank"
                rel="noopener noreferrer">
          Almondvale Stadium by Thomas Nugent</a> on <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">Creative Commons 2.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="hhttps://commons.wikimedia.org/wiki/File:Knee_Kick_to_Groin.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Knee Kick to Groin by Bill Valentine</a> on <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons 3.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Walll_PANCH!.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Wall PANCH! by Qəribə oğlan</a> on <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">Creative Commons 4.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Giulio_del_Torre_Zwei_raufende_Buben_1927.jpg"
                target="_blank"
                rel="noopener noreferrer">
          'Zwei raufende Buben' (Two Boys Fighting) by Giulio del Torren</a>. Public domain.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:The_Laws_of_Hywel_Dda_(f.15.v)_hair_pulling_(cropped).png"
                target="_blank"
                rel="noopener noreferrer">
          Laws of Hywel Dda (f.15.v). National Library of Wales</a> on <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">Creative Commons 1.0 Deed</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://en.m.wikipedia.org/wiki/File:F._21r._Wyvern.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Laws of Hywel Dda (f.21.r). National Library of Wales</a> on <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">Creative Commons 1.0 Deed</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://www.deviantart.com/tbh-1138/art/TV-Static-214352630"
                target="_blank"
                rel="noopener noreferrer">
          TV Static by TBH-1138</a>. 
          </li>
          All image editing done with <a href="https://www.gimp.org/">GIMP</a>.
        </ul>
        <br />
        <ul className="audioCreditsList">
        <h2 className="creditsScreen-text">Audio credits</h2>
        <li><a className="creditsScreen-audioCredit"
                href="https://freesound.org/people/PantherK/sounds/585783/"
                target="_blank"
                rel="noopener noreferrer">
          Static fade out by PantherK</a> on <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons 1.0 Licence</a>. 
          </li>
        <li><a className="creditsScreen-audioCredit"
                href="https://freesound.org/people/MKzing/sounds/474266/"
                target="_blank"
                rel="noopener noreferrer">
          Bells with Crows by MKzing</a> on <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons 1.0 Licence</a>. 
          </li>
        <li><a className="creditsScreen-audioCredit"
                href="https://www.looperman.com/loops/detail/309162/pad-dimlit-115bpm-dmin-free-115bpm-ambient-pad-loop"
                target="_blank"
                rel="noopener noreferrer">
          PAD - DimLit 115BPM Dmin by 121Ayem</a>.
          </li>
        <li><a className="creditsScreen-audioCredit"
                href="https://freesound.org/people/Anthousai/sounds/398815/"
                target="_blank"
                rel="noopener noreferrer">
          Vinyl Crackle 02 by Anthousai</a> on <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons 1.0 Licence</a>. 
          </li>
          All audio editing done with <a href="https://www.audacityteam.org/">Audacity</a>.
        </ul>
        </div>
      <br />
      <br />
          
      <Link className="creditsScreen-screenLink" to="/derekadams">
      {">"} Game Menu
      </Link>
      <Link className="creditsScreen-screenLink" to="/">
      {">"} Home
      </Link>
      <Link className="creditsScreen-screenLink" to="/about">
      {">"} About
      </Link>
      <DAFooter />
    </section>
  );
}

export default DACreditsScreen;
