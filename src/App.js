//  import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './components/header';
import Register from './Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/home';
import NoPage from './pages/NoPage';

console.log("App is rendering..");//проверявам, дали излиза резултата  в console-ата;




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
