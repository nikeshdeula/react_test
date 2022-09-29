import React from 'react';
import { useParams } from 'react-router-dom'




const About = () => {
   const {fname, lname} = useParams();


return (
   <>
   <h1>i am {fname} {lname}</h1>
   </>
);
}

export default About;