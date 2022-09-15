import React from "react";
import Heading from "./Heading";
import Content from "./Content";

//Calling imaging using js functions
=======
import Navbar from "./Navbar";
import Card from "./Card";
import Mdata from "./Mdata";


function App() {
  return (
    
      <Heading />
      <Content />
=======
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

