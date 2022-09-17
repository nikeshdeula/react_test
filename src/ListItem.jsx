import React, { useState } from 'react';

const ListItem = (props) => {
const [line, setLine] = useState(false);


const Cut = () => {
    setLine(true);
}


    return (
    <>
    <span onClick={Cut} ><i class="fa fa-remove" aria-hidden="true"></i></span>
    <li style={{textDecoration : line ? "Line-through": "none" }}>{props.text}</li>

    </>
    );
}

export default ListItem;