import React from "react";
import ReactDOM from "react-dom";
import CARD from "./Cards";
import Data from "./Data";
import "./index.css";

// function aGun(val) {
//   return (
//     <CARD
//     imgsrc={val.img}
//     Gname={val.name}
//     link={val.Link}
//     title={val.Title}
//     />
//   );
// }
ReactDOM.render(
  <>
    <h1 className="heading">Let's Play with some Airguns</h1>
    {Data.map((val, index) => {
      console.log(index);
      return (
        <CARD
          imgsrc={val.img}
          Gname={val.name}
          link={val.Link}
          title={val.Title}
        />
      );
    })}
    <footer
      style={{
        fontSize: "14px",
        color: "skyblue",
        textAlign: "center",
        marginTop: "20px",
        padding: "10px 0",
        backgroundColor: "black"
      }}
    >
      NO LICENCE REQUIRED
    </footer>
  </>,
  document.getElementById("root")
);
