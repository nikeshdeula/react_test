import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";
import MainHeader from "./MainHeader";
import Search from "./Search";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/About/:fname/:lname" element={<About />} />
          <Route path="/Contact/:Call/:Us" element={<Contact />} />
          <Route path="/Search" element={<Search />} />
          <Route  element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
