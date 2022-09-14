import React from "react";
import Heading from "./Heading";
import Content from "./Content";

function App() {
  return (
    <>
      <Heading />
      <Content />
    </>
  );
}

export default App;



// import React from 'react';
// import ReactDOM from 'react-dom';

// function App(){

// let currDate = new Date();
// currDate = currDate.getHours();
// let greeting = "";
// let cssstyle = {};

// if(currDate >= 8 || currDate <12){
//     greeting = "good Morning";
//     cssstyle.color = "green";
// }
// else if(currDate >= 12 || currDate < 5){
//     greeting = "good Evening";
//     cssstyle.color = "pink";
// }
// else {
//     greeting = "good Night";
//     cssstyle.color = "red";
// }

// return (
// <>
//   <div>
//   <h1>hello sir/madam <span style={cssstyle}> {greeting} </span></h1>
//   </div>
//   </>)

// };

// export default App;
