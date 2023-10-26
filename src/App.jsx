import { useState } from "react";
import "./App.css";

import Signup from "./components/signup";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Combined from "./components/Combined";
import Login from "./components/Login";
<<<<<<< HEAD
import Welcome_back from "./components/Welcome_back";
import Admin_login from "./components/Admin_login";
=======
import { useLocation } from "react-router-dom";
>>>>>>> main

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Combined />} />
          <Route path="/combined" element={<Combined />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Welcome_back" element={<Welcome_back/>}/>
          <Route path="/Admin_login" element={<Admin_login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
