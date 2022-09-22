import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";


const Poke = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setmoves] = useState();

    useEffect(()=> {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data);
            setName(res.data.name);
            setmoves(res.data.moves.length);

        }
        getData();
        
    })

return (
    <>
  <h1> it's <span style={{color: 'purple'}}>{num}</span> </h1>
  <h1> it's Name <span style={{color: 'purple'}}> {name}</span></h1>
  <h1> it's moves  <span style={{color: 'purple'}}>{moves}</span> </h1>

  <select value={num} onChange={(event) => {
setNum(event.target.value);
  }} >
    <option value="1">1</option>
    <option value="5">5</option>
    <option value="20">20</option>
    <option value="25">25</option>
    <option value="8">8</option>
  </select>
  </>
);

}

export default Poke;