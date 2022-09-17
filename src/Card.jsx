import React from "react";

const Card = (props)=> {
  return (
    <>

    <div className="cards">
      <div className="card">
        <div className="card_img">
          <img src= {props.imgsrc} alt="" />
          <div className="card_info">
            <h3 className="card_title">{props.jname} hell</h3>
            <h3 className="card_title">{props.jprice}</h3>
            <a href={props.jlink}><button>Watch Now</button></a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}


export default Card;
