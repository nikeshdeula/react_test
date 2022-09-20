import React, { createContext } from 'react';
import ComA from "./ComA";


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
  );
};

export default App;
export {FirstName, LastName};