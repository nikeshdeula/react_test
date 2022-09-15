import React from "react";

function Card(props) {
  return (
    <>
    <div className="cards">
      <div className="card">
        <div className="card_img">
          <img src= {props.image} alt="" />
          <div className="card_info">
            <h3 className="card_title">{props.mname}</h3>
            <a href={props.link}><button>Watch Now</button></a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;
