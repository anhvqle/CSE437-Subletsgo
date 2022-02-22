
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/route/Login";
import Signup from "./components/route/Signup";
import WelcomePage from "./components/route/WelcomePage";
import Housing from "./components/route/Housing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/housing" element={<Housing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
