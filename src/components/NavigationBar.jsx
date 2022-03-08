import { Navbar, Nav, Container } from "react-bootstrap";
import UserContext from "../context/UserContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
                <Navbar.Brand className="auth-navbar-title" href="/">Subletsgo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    {
                        currUser && (<Nav className="me-auto d-flex flex-row">
                            <Nav.Link className="auth-navbar" href="/tenant">Tenant</Nav.Link>
                            <Nav.Link className="auth-navbar" href="/housing">Housing</Nav.Link>
                            <Nav.Link className="auth-navbar" href="/marketplace">Marketplace</Nav.Link>
                        </Nav>)
                    }
                    {
                        currUser
                            ? <button className="btn btn-outline-light btn-lg" onClick={logoutClicked}>Logout</button>
                            : (<Nav>
                                <Nav.Link className="auth-navbar" href="/signup">Signup</Nav.Link>
                                <Nav.Link className="auth-navbar" href="/login">Login</Nav.Link>
                            </Nav>)
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AuthNavigationBar;
