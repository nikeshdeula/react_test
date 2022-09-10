import React from 'react';
import ReactDOM from 'react-dom';

// Date and time


const fname = "nikesh";
const lname = "Deula";
const currdate =  new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
<h1>My Name is {fname+" "+ lname}</h1>
<p>Todays Date {currdate}</p>
<p>Current Time {currtime}</p>

</>,
document.getElementById("root")
);




