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
            if (!currUser) {
                navigate("/");
            }
        })();
    }, [currUser]);

    useEffect(() => {
        (async () => {
            let tenants = await getTenant();
            setTenants(tenants.data.tenants);
        })();
    }, []);

    const [selectedFilter, setSelectedFilter] = useState({
        useFilter: false,
        gender: {
            male: false,
            female: false,
            other: false
        },
        campus: {
            danforth: false,
            wusm: false
        },
        classStanding: {
            freshman: false,
            sophomore: false,
            junior: false,
            senior: false,
            master: false,
            phd: false
        }
    });

    const filterTennants = () => {
        if (!selectedFilter.useFilter) return tenants;
        let filteredTennants = tenants;
        let selectedFilterNoUseFilter = {
            ...selectedFilter
        }
        delete selectedFilterNoUseFilter.useFilter
        for (const [category, optionContainer] of Object.entries(selectedFilterNoUseFilter)) {
            let selectedSubcategory = []
            for (const [subCategory, checked] of Object.entries(optionContainer)) {
                if (checked) selectedSubcategory.push(subCategory)
            }
            filteredTennants = filteredTennants.filter((t) => selectedSubcategory.includes(t[category]))
        }
        return filteredTennants;
    }

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
                        <TenantListing tenants={filterTennants()} />
                    </Col>
                    <Col>
                        <TenantFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tenant;