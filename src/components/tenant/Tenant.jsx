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

    const [excludeMyPost, setExcludeMyPost] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState({
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
            PhD: false
        }
    });

    const deleteTenantFrontEnd = (id) => {
        let clonedTenant = tenants.filter((t) => {
            console.log(t.id);
            console.log({ id });
            return +t.id !== +id
        });
        console.log();
        setTenants(clonedTenant)
    }
    const filterTennants = () => {
        let filteredTennants = tenants;
        if (excludeMyPost) {
            filteredTennants = filteredTennants.filter((t) => t.userId !== currUser.id)
        }
        for (const [category, optionContainer] of Object.entries(selectedFilter)) {
            let selectedSubcategory = []
            for (const [subCategory, checked] of Object.entries(optionContainer)) {
                if (checked) selectedSubcategory.push(subCategory)
            }
            if (selectedSubcategory.length === 0) continue;
            filteredTennants = filteredTennants.filter((t) => selectedSubcategory.includes(t[category]))
        }
        return filteredTennants;
    }

    const changeOption = (optionId, checked) => {
        let clonedFilter = { ...selectedFilter };
        let [category, option] = optionId.split("-");
        clonedFilter[category][option] = checked;
        setSelectedFilter(clonedFilter);
    }

    const changeExcludeMyPost = (checked) => {
        setExcludeMyPost(checked);
    }

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
                        <TenantListing tenants={filterTennants()} deleteTenantFrontEnd={deleteTenantFrontEnd} />
                    </Col>
                    <Col>
                        <TenantFilter changeOption={changeOption} changeExcludeMyPost={changeExcludeMyPost} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tenant;