
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import WelcomePage from "./components/WelcomePage";
import Housing from "./components/HousingPage";
import Tenant from "./components/tenant/TenantPage";
import NewTenantListing from "./components/tenant/NewTenantListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/housing" element={<Housing/>}/>
        <Route path="/tenant" element={<Tenant/>}/>
        <Route path="/newTenantListing" element={<NewTenantListing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
