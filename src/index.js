import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
let cssstyle = {};


if(currDate >= 8 || currDate <12){
    greeting = "good Morning";
    cssstyle.color = "green";
}
else if(currDate >= 12 || currDate < 5){
    greeting = "good Evening";
    cssstyle.color = "pink";
}
else {
    greeting = "good Night";
    cssstyle.color = "red";
}




ReactDOM.render(
<>
<div>
<h1>hello sir/madam <span style={cssstyle}> {greeting} </span></h1>
</div>
</>,
document.getElementById("root")
);



