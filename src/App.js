// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import  React, { useReF } from 'react';
import Home from "./pages/home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Header from "./components/header";
import Register from './Register';

console.log("App is rendering..");

export default function App(){
  return(
   <Router>
   <Header />
<Routes>
  <Route index element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path ='/register' element={<Register />} />
  <Route path="*" element={<NoPage />} />
</Routes>
</Router>



  );
}
