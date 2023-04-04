import React from "react";
function CARD(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="not Available" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.Gname}</h3>
            <a href={props.link} target="_blank">
              <button>Watch</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default CARD;
