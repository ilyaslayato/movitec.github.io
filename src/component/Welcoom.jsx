import React, { useEffect, useState } from "react";
import "../style/Welcoom.css";
import { Link } from 'react-router-dom';
import vd from '../img/videoplayback (1).mp4'
function Welcoom() {


  const [titleIndex, setTitleIndex] = useState(0);

  const titles = ["G", "GP", "GPS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) =>
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-container">
      <div className="vedio">
        <video className="video" src={vd} autoPlay loop muted />
      </div>
      <div className="content">
        <h1 className="elementor-heading-title elementor-size-default">Movitec<br />{titles[titleIndex]}</h1>
        {/* <button className="btn3" onClick={handleClick}>Demande</button> */}
        <Link to="/demand">
  <button className="btn3">Demande</button>
</Link>
        
      </div>
    </div>
  );
}

export default Welcoom;