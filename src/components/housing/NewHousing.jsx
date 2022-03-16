import NavigationBar from "../NavigationBar";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import createTenantList from '../../data/tenant';
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext"

function NewHousing() {

    return (
        <div>
            <NavigationBar />
            <h1>Hello new housing</h1>
        </div>
    )
}

export default NewHousing;