
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import WelcomePage from "./components/WelcomePage";
import HousingPage from "./components/housing/HousingPage";
import Tenant from "./components/tenant/Tenant";
import NewTenantListing from "./components/tenant/NewTenantListing";
import UserContext from "./context/UserContext";
import jwtDecode from "jwt-decode";
import Marketplace from "./components/marketplace/Marketplace";
import NewHousing from "./components/housing/NewHousing";
import NewMarketplaceListing from "./components/marketplace/newMarketplaceListing";
import HousingDetail from "./components/housing/HousingDetail"
import Profile from "./components/profile/Profile";

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
                    <Route path="/profile" exact element={
                        currUser ? <Profile /> : <Navigate replace to="/" />
                    } />
                    <Route path="/housing" exact element={
                        currUser ? <HousingPage /> : <Navigate replace to="/" />
                    } />
                    <Route path="/housing/:id" exact element={
                        currUser ? <HousingDetail /> : <Navigate replace to="/" />
                    } />
                    <Route path="/tenant" exact element={
                        currUser ? <Tenant /> : <Navigate replace to="/" />
                    } />
                    <Route path="/marketplace" exact element={
                        currUser ? <Marketplace /> : <Navigate replace to="/" />
                    } />
                    <Route path="/newTenantListing" exact element={
                        currUser ? <NewTenantListing /> : <Navigate replace to="/" />
                    } />
                    <Route path="/newHousing" exact element={
                        currUser ? <NewHousing /> : <Navigate replace to="/" />
                    } />
                    <Route path="/newMarketplaceListing" exact element={
                        currUser ? <NewMarketplaceListing /> : <Navigate replace to="/" />
                    } />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
