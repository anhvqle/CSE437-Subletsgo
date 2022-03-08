import NavigationBar from "../NavigationBar";
import { useState, useEffect, useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { getTenant } from '../../data/tenant';
import TenantListing from "./TenantListing";
import TenantFilter from "./TenantFilter";
import UserContext from "../../context/UserContext"
import { useNavigate } from "react-router-dom";

function Tenant() {
    let navigate = useNavigate();
    const [tenants, setTenants] = useState([]);
    let { currUser, setUser } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            console.log(currUser);
            if (!currUser) {
                navigate("/");
            }
        })();
    }, [currUser]);

    useEffect(() => {
        (async () => {
            let tenants = await getTenant();
            console.log(tenants);
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
                        <TenantFilter />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tenant;