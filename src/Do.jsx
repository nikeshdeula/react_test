import React, { useState } from 'react';
import ListItem  from './ListItem';
import AcUnitIcon from '@mui/icons-material/AcUnit';




const Do = () => {

   const [item, setItem] = useState("");
   const [newItem, setNewItem]= useState([]);

   const itemEvent = (event) => {
    setItem(event.target.value)
   };

   const List = () => {
    setNewItem((preValue) => {
        return (
            [...preValue, item]
        );
    })
    setItem(" ")
   }

    return (
        <>
        <h1>Order Listing</h1>
        <br />
        <input type="text" onChange={itemEvent} value={item} />
        <button onClick={List}>
        
        </button>
        <br />
        <ul>
           {newItem.map((val, index) => {
            return (
            <ListItem key = {val}
            text = {val}/>
            );
            
           })} 
        </ul>
        </>
    );
}

export default Do;