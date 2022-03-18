import { Navbar, Nav, Container } from "react-bootstrap";
import UserContext from "../context/UserContext"
import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const AuthNavigationBar = () => {

    let { currUser, setUser } = useContext(UserContext);
    let navigate = useNavigate();

    const logoutClicked = () => {
        setUser(null);
        localStorage.removeItem('authtoken');
        navigate("/");
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="navbar-title" href="/">Subletsgo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    {
                        currUser && (<Nav className="me-auto d-flex flex-row">
                            <NavLink className={({isActive}) => isActive ? "active" : "nav-item"} to="/tenant">Tenant</NavLink>
                            <NavLink className={({isActive}) => isActive ? "active" : "nav-item"} to="/housing">Housing</NavLink>
                            <NavLink className={({isActive}) => isActive ? "active" : "nav-item"} to="/marketplace">Marketplace</NavLink>
                        </Nav>)
                    }
                    {
                        currUser
                            ? <button className="btn btn-outline-light btn-lg" onClick={logoutClicked}>Logout</button>
                            : (<Nav>
                                <NavLink className={({isActive}) => isActive ? "active" : "nav-item"} to="/signup">Signup</NavLink>
                                <NavLink className={({isActive}) => isActive ? "active" : "nav-item"} to="/login">Login</NavLink>
                            </Nav>)
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AuthNavigationBar;
