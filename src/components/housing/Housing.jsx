import NavigationBar from "../NavigationBar";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import HousingListing from './HousingListing';
import HousingFilter from './HousingFilter';

function Housing() {
    let navigate = useNavigate();
    let { currUser, setUser } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            if (!currUser) {
                navigate("/");
            }
        })();
    }, [currUser]);

    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row className="layout">
                    <Col sm={8}></Col>
                    <Col>
                        <button type="button" className="center btn btn-primary monospace rounded-pill">
                            <a className="link-styling" href="/newTenantListing">Create a Listing</a>
                        </button>
                    </Col>
                </Row>
                <Row className="layout">
                    <Col sm={8}>
                        <HousingListing />
                    </Col>
                    <Col>
                        <HousingFilter />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Housing;