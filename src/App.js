
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import WelcomePage from "./components/WelcomePage";
import Housing from "./components/HousingPage";
import Tenant from "./components/tenant/TenantPage";
import NewTenantListing from "./components/tenant/NewTenantListing";
import UserContext from "./context/UserContext"
import jwtDecode from "jwt-decode";


function App() {
    const [currUser, setUser] = useState(null);

    useEffect(() => {

        (async () => {
            let user = null;
            let authtoken = localStorage.getItem('authtoken')
            if (authtoken) {
                user = jwtDecode(authtoken);
            }
            setUser(user);
        })();
    }, []);


    return (
        <UserContext.Provider value={{ currUser, setUser }}>
            <Router>
                <Routes>
                    <Route path="/" exact element={<WelcomePage />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/signup" exact element={<Signup />} />
                    <Route path="/housing" exact element={<Housing />} />
                    <Route path="/tenant" exact element={<Tenant />} />
                    <Route path="/newTenantListing" exact element={<NewTenantListing />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
