import React from "react";
import drawers from "./images/drawers.jpg";
import avatar from "./images/avatar-michelle.jpg";
import share from "./images/icon-share.svg";
import "./index.css";

function App() {
  return (
    <section className="container">
      <div className="img-section">
        <img src={drawers} alt="drawers" className="drawers" />
      </div>
      <div className="contents">
        <h2 className="text1">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <h3 className="text2">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </h3>
      
      <div className="bottom">
        <img src={avatar} alt="michelle" className="avatar-mich" />
        <p className="texts">
          <h3 className="text3">Michelle Appleton</h3>
          <h4 className="text4">28 June 2020</h4>
        </p>
        <img src={share} alt="share-logo" className="share-btn" />
      </div>
      </div>
    </section>
  );
}

export default App;
