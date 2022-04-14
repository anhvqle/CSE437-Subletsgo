import NavigationBar from "../NavigationBar";
import { useState, useEffect, useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import UserContext from "../../context/UserContext";
import { getUserTenantListing, getUserHousingListing, getUserMarketplaceListing } from "../../data/profile";
import TenantListing from "../tenant/TenantListing";
import HousingListing from "../housing/HousingListing";
import MarketplaceListing from "../marketplace/MarketplaceListing";

function Profile() {
    let { currUser } = useContext(UserContext);
    let userId = currUser.id;

    const [tenants, setTenants] = useState([]);
    const [housings, setHousings] = useState([]);
    const [marketplaces, setMarketplaces] = useState([]);
    const [loading, setLoading] = useState(false);

    let activeState = {tenant: true, housing: false, marketplace: false};
    const [active, setActive] = useState(activeState);

    useEffect(() => {
        (async () => {
            setLoading(true);
            let tenants = await getUserTenantListing(userId);
            let housings = await getUserHousingListing(userId);
            let marketplaces = await getUserMarketplaceListing(userId);
            setLoading(false);
            setTenants(tenants.data.tenants);
            setHousings(housings.data);
            setMarketplaces(marketplaces.data);
        })();
    }, []);

    const getUserTenantListings = () => {
        let activeTenant = {tenant: true, housing: false, marketplace: false};
        setActive(activeTenant);
    }

    const getUserHousingListings = () => {
        let activeHousing = {tenant: false, housing: true, marketplace: false};
        setActive(activeHousing);
    }

    const getUserMarketplaceListings = () => {
        let activeMarketplace = {tenant: false, housing: false, marketplace: true};
        setActive(activeMarketplace);
    }

    const deleteTenantFrontEnd = (id) => {
        let clonedTenant = tenants.filter((t) => {
            return +t.id !== +id
        });
        setTenants(clonedTenant)
    }

    return (
        <div>
            <NavigationBar />
            {loading && <div className="middle-spinner loader"></div>}
            <Container fluid>
                <Row className="layout">
                    <Col>
                        <h4 className="title">
                            <a className={`title-styling ${active.tenant && 'steelBlue'}`} onClick={getUserTenantListings}>Tenant</a>
                        </h4>
                        <h4 className="title">
                            <a className={`title-styling ${active.housing && 'steelBlue'}`} onClick={getUserHousingListings}>Housing</a>
                        </h4>
                        <h4 className="title">
                            <a className={`title-styling ${active.marketplace && 'steelBlue'}`} onClick={getUserMarketplaceListings}>Marketplace</a>
                        </h4>
                    </Col>
                    <Col sm={9}>
                        <h4 className="title">Your Listings</h4>
                        <hr />
                        {active.tenant && <TenantListing tenants={tenants} deleteTenantFrontEnd={deleteTenantFrontEnd} />}
                        {active.housing && <HousingListing housings={housings} />}
                        {active.marketplace && <MarketplaceListing marketplaces={marketplaces}/>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile;