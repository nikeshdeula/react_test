import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Mdata from "./Mdata";

function App() {
  return (
    <>
      <Navbar />
      {Mdata.map((val,index) => {
        console.log(index);
        return(
        <Card image={val.image} mname={val.mname} link={val.link} />);
      })}   

    </>
  );
}

export default App;
