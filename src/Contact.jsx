import { Button } from '@mui/material';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';



const Contact = () => {
const {Call, Us} = useParams();
const location =useLocation();
    
   
    return (
    <>
    <h1>Its contact page 
        for more info {Call} {Us}</h1>
        <p>I am {location.pathname}</p>
        {location.pathname === `/Contact/Nikesh/Premium` ? (
            <button onClick={()=> {alert(`It's $9999`)}}>Purchase Now</button> 
         ) : null}
        </>
    );
}

export default Contact;














// void push (int stack[ ] , int x , int n) {
//     if ( top == n-1 ) {         //If the top position is the last of position in a stack, this means that the stack is full
//        cout << “Stack is full.Overflow condition!” ;
//        }
//        else{
//            top = top +1 ;            //Incrementing top position 
//            stack[ top ] = x ;       //Inserting element on incremented position  
//        }
//    }