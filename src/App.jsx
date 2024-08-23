import React from "react";
import User from "./Components/User";
import Product from "./Components/Product";
import Home from "./Components/Home";
import { Route,  Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<User />} />
      <Route path="/Products" element={<Product />} />
    </Routes>
      
    <Footer/>

    </div>
    
  );
};

export default App;
