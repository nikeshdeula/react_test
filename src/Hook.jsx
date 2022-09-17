import React from 'react';
import { useState } from 'react';


const Hook = () => {
    const state = useState();

    const [count, setCount] = useState(5);

    const Increase = () => {
       setCount(count - 100000);
    };

    return(
        <>
    <div className="Heading">
        <h1>{count}</h1>
        <button  onClick={Increase}>Click Me</button>
        
    </div>
    </>
    );
}

export default Hook;

