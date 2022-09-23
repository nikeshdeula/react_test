import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';


const App = () => {
  return (
<BrowserRouter>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
</BrowserRouter>
    
  );
};

export default App;
