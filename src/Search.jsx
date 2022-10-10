import React, { useState } from 'react';
import Research from './Reseach';


const Search = () => {

    const [img, SetImg] = useState();

    const inputEvent = (event) => {
      const data = event.target.value;
      console.log(data);
      SetImg(data);
    }


    return (
        <>
        <input type="text" value={img} onChange={inputEvent} />
        <Research name={img} />
        
        </>

    );

}

export default Search;