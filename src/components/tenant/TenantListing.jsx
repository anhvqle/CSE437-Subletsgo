import { Container, Col, Row, ListGroup } from "react-bootstrap";

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function getCampusName(s) {
    if (s === "danforth")
        s = capitalizeFirstLetter(s);
    else
        s = s.toUpperCase();
    return s + " Campus";
}

function TenantListing(props) {
    return (
        <div>
            {props.tenants && props.tenants.length > 0 ? (
                <ListGroup as="ol" numbered>
                    {props.tenants.map(function (t, index) {
                        return (
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" action variant="light" key={t.id}>
                                <Container fluid>
                                    <Row>
                                        <Col sm={8}>
                                            <div className="fw-bold">{t.fullName}</div>
                                            {`${capitalizeFirstLetter(t.classStanding)} @ ${getCampusName(t.campus)}`}
                                            <ul>
                                                <li>{(t.description === undefined) ? "No description available" : t.description}</li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <div className="bigger_size">
                                                <i className={t.gender === 'other' ? "fw-bold fa fa-genderless" : `fw-bold fa fa-${t.gender}`}></i> {capitalizeFirstLetter(t.gender)}
                                            </div>
                                            <div className="bigger_size"><i className="fw-bold fa fa-phone"></i> {t.phoneNumber}</div>
                                            <div className="bigger_size"><i className="fw-bold fa fa-envelope"></i> {t.email}</div>
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            ) : (
                <div>There is currently no tenant listings available / match your search</div>
            )}
        </div>
    )
}

export default TenantListing;