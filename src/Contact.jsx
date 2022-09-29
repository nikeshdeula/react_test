import React from 'react';
import { useParams } from 'react-router-dom';



const Contact = () => {
const {Call, Us} = useParams();
    

    return (
    <>
    <h1>Its contact page 
        for more info {Call} {Us}</h1>
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