import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";
import "./index.css"

ReactDOM.render(
<>
<App/>
</>,
document.getElementById("root")
); 
=======
import "./index.css";

// Image showing using jsx

const fullName = "Random Generated Image";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/202/300";
const img3 = "https://picsum.photos/201/300";
const link = "https://nickwalkerior.blogspot.com/";

ReactDOM.render(
    <>
<h1 className='heading'>Name: {fullName}</h1>;

<div className='image_box'>
    
<img src={img1} alt='ramdom images' />
    <a href={link} target="_blank">
        <img src= {img2}/>
    </a>
    <a href={link} target="_blank">
        <img src= {img3}/>
    </a>
    
</div>

    </>,
    document.getElementById("root")
);




