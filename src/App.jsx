import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Contact from './Components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Routepath path="/" element={<Navigate to="/home" />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
