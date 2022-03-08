import { Navbar, Nav, Container } from "react-bootstrap";

const AuthNavigationBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="auth-navbar-title" href="/">Subletsgo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link className="auth-navbar" href="/signup">Signup</Nav.Link>
                        <Nav.Link className="auth-navbar" href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AuthNavigationBar;
