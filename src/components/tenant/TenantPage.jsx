import NavigationBar from "../NavigationBar";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { getTenant } from '../../data/tenant';
import TenantListing from "./TenantListing";

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
                        <TenantListing tenants={tenants} />
                    </Col>
                    <Col>
                        <div>FILTERS</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tenant;