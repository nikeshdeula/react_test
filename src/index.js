import React from 'react';
import ReactDOM from 'react-dom';

// Image showing using jsx

const fullName = "Random Generated Image";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/202/300";
const img3 = "https://picsum.photos/201/300";

ReactDOM.render(
    <>
<h1>Name: {fullName}</h1>;
<img src={img1} alt='ramdom images'/>
    <a href='Flamingo Tech'>
        <img src= {img2}/>
    </a>
    <a href='Flamingo Tech'>
        <img src= {img3}/>
    </a>

    </>,
    document.getElementById("root")
);




