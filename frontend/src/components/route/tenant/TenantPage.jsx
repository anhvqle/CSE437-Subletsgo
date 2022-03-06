import AuthNavigationBar from "../../AuthNavBar";
import { Container, Col, Row } from "react-bootstrap";

function Tenant() {
    return (
        <div>
            <AuthNavigationBar />
            <Container>
                <Row className="layout">
                    <Col sm={8}></Col>
                    <Col>
                        <a className="link-styling" href="/newTenantListing">
                            <button type="button" className="center btn btn-primary rounded-corner rounded-pill">Create a Listing</button>
                        </a>
                    </Col>
                </Row>
                <Row className="layout">
                    <Col sm={8}>
                        <p>LISTINGS</p>
                    </Col>
                    <Col>
                        <p>FILTERS</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tenant;