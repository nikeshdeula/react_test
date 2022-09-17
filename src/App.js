import React from "react";
import Card from "./Card";
import Jdata from "./Jdata";
import Saree from "./Saree";
import Sdata from "./Sdata";


const App = () => {
  return (
    <>

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
      })}
    </>
  );
};

export default App;
