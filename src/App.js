
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import WelcomePage from "./components/WelcomePage";
import Housing from "./components/Housing";
import Tenant from "./components/tenant/Tenant";
import NewTenantListing from "./components/tenant/NewTenantListing";
import UserContext from "./context/UserContext"
import jwtDecode from "jwt-decode";
import Marketplace from "./components/Marketplace";


function App() {
    let authtoken = localStorage.getItem('authtoken')
    const [currUser, setUser] = useState(authtoken ? jwtDecode(authtoken) : null);


    return (
        <UserContext.Provider value={{ currUser, setUser }}>
            <Router>
                <Routes>
                    <Route path="/" exact element={<WelcomePage />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/signup" exact element={<Signup />} />
                    <Route path="/housing" exact element={<Housing />} />
                    <Route path="/tenant" exact element={<Tenant />} />
                    <Route path="/marketplace" exact element={<Marketplace />} />
                    <Route path="/newTenantListing" exact element={<NewTenantListing />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
