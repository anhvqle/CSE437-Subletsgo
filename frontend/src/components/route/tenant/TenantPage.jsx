import NavigationBar from "../../NavigationBar";
import { useState, useEffect } from "react";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { getTenant } from '../../../data/tenant';

function Tenant() {
    const[tenants, setTenants] = useState([]);

    useEffect(() => {
        (async () => {
            let tenants = await getTenant();
            setTenants(tenants.data.tenants);
        })();
    }, []);

    return (
        <div>
            <NavigationBar />
            <Container fluid>
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
                        <ListGroup as="ol" numbered>
                            {tenants && tenants.map(function (t, index) {
                                return (
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" action variant="light" key={t.id}>
                                        <Container fluid>
                                            <Row>
                                                <Col sm={8}>
                                                    <div className="fw-bold">{t.fullName}</div>
                                                    {`${t.occupation} @ ${t.company}`}
                                                    <ul>
                                                        <li>{t.description}</li>
                                                    </ul>
                                                </Col>
                                                <Col>
                                                    <div className="bigger_size"><i className="fw-bold fa fa-phone"></i> {t.phoneNumber}</div>
                                                    <div className="bigger_size"><i className="fw-bold fa fa-envelope"></i> {t.email}</div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
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