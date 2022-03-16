import NavigationBar from "../NavigationBar";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import HousingListing from './HousingListing';
import HousingFilter from './HousingFilter';

function Housing() {
    let { currUser, setUser } = useContext(UserContext);

    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row className="layout">
                    <Col sm={8}></Col>
                    <Col>
                        <button type="button" className="center btn btn-primary monospace rounded-pill">
                            <a className="link-styling" href="/newHousing">Create a Listing</a>
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