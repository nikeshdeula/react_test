
import React, { createContext } from 'react';
import ComA from "./ComA";
=======
import React from "react";

=======
import Heading from "./Heading";
import Content from "./Content";

//Calling imaging using js functions
=======
import Navbar from "./Navbar";

import Card from "./Card";
import Jdata from "./Jdata";
import Saree from "./Saree";
import Sdata from "./Sdata";




const App = () => {

  const FirstName = createContext();
  const LastName = createContext();
  return (
    <>

    <FirstName.provider value = {"Nikesh"}>
      <LastName.provider value={"Deula"}>
    <ComA />
    </LastName.provider>
    </FirstName.provider>   
   </>
=======

   <h1 className="jackets">Jackets</h1>

      {Jdata.map((Gdata, index) => {
        return (
          <Card
            imgsrc={Gdata.imgsrc}
            jname={Gdata.jname}
            jprice={Gdata.jprice}
            jlink={Gdata.jlink}
          />
        );
      })}

   
      
      
      <h1 className="saree">Saree</h1>
      
      {Sdata.map((saree) => {
        return( <Saree
        simg = {saree.simg}
        sname = {saree.sname}
        sprice = {saree.sprice}
        slink = {saree.slink} />
        );
=======
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
};

export default App;

export {FirstName, LastName};
=======


