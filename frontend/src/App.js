
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/route/authorization/Login";
import Signup from "./components/route/authorization/Signup";
import WelcomePage from "./components/route/WelcomePage";
import Housing from "./components/route/HousingPage";
import Tenant from "./components/route/tenant/TenantPage";
import NewTenantListing from "./components/route/tenant/NewTenantListing";

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
