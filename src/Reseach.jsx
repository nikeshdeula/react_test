import React from 'react';

const Research = (props) => {

    
const img = `https://source.unsplash.com/600*600/${props.name}`;

    return (
        <>
        <div>
            <img src={img}/>
        </div>
        </>
    );
}

export default Research;