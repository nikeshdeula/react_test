import React from 'react'

const Saree = (props)=> {
  return (
    <>

    <div className="cards">
      <div className="card">
        <div className="card_img">
          <img src= {props.simg} alt="" />
          <div className="card_info">
            <h3 className="card_title">{props.sname} hell</h3>
            <h3 className="card_title">{props.sprice}</h3>
            <a href={props.slink}><button>Watch Now</button></a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Saree;