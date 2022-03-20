import NavigationBar from "../NavigationBar";
import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import MarketplaceListing from './MarketplaceListing';
import MarketplaceFilter from './MarketplaceFilter';
import { getAllMarketplace } from "../../data/marketplace";

function Marketplace() {
    let { currUser, setUser } = useContext(UserContext);
    let [errMessage, setErrMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const [marketplaces, setMarketplaces] = useState([]);

    const [selectedFilter, setSelectedFilter] = useState({
        price: [0, 1000],
        category: {
            apparel: false,
            vehicle: false,
            furniture: false,
            electronic: false,
            office: false,
            free: false,
            musical: false,
            sport: false,
            toyGame: false,
            other: false,
        },
        condition: {
            new: false,
            used: false,
            refurbished: false,
        },
    });

    useEffect(() => {
        (async () => {
            setLoading(true);
            let response = await getAllMarketplace();
            setLoading(false);

            if (response.status <= 299 || response.status === 304) {
                setErrMessage(null);
                setMarketplaces(response.data);
            }
            else {
                setErrMessage(response.data?.message)
            }
        })();
    }, []);

    let initialPriceRange = [1, 1000];
    if (marketplaces.length > 0) {
        const prices = marketplaces.map((marketplace) => marketplace.price);
        initialPriceRange = [Math.min(...prices), Math.max(...prices)]
    }

    const changeOption = (category, option, checked) => {
        let clonedSelectedFilter = { ...selectedFilter }
        clonedSelectedFilter[category][option] = checked
        setSelectedFilter(clonedSelectedFilter)
    }

    const changePrice = (newPrice) => {
        let clonedSelectedFilter = { ...selectedFilter }
        clonedSelectedFilter.price = newPrice
        setSelectedFilter(clonedSelectedFilter)
    }

    const filterMarketplace = () => {
        let filteredMarketplaces = marketplaces.filter((marketplace) => marketplace.price <= selectedFilter.price[1] && marketplace.price >= selectedFilter.price[0])
        let clonedFilter = { ...selectedFilter }
        delete clonedFilter.price
        for (const [category, option] of Object.entries(clonedFilter)) {
            let selectedSubcategory = []
            for (const [subCategory, checked] of Object.entries(option)) {
                if (checked)
                    selectedSubcategory.push(subCategory)
            }
            if (selectedSubcategory.length === 0)
                continue;
            filteredMarketplaces = filteredMarketplaces.filter((t) => selectedSubcategory.includes(t[category]))
        }
        
        return filteredMarketplaces;
    }

    return (
        <div>
            <NavigationBar />
            {errMessage && <p className="error">Error: {errMessage}</p>}
            {loading && <div className="middle-spinner loader"></div>}
            <Container fluid>
                <Row className="layout">
                    <Col sm={8}></Col>
                    <Col>
                        <button type="button" className="center btn btn-primary monospace rounded-pill">
                            <a className="link-styling" href="/newMarketplaceListing">Create New Listing</a>
                        </button>
                    </Col>
                </Row>
                <Row className="layout">
                    <Col sm={8}>
                        <MarketplaceListing marketplaces={filterMarketplace()}/>
                    </Col>
                    <Col>
                        <MarketplaceFilter 
                            initialPriceRange={initialPriceRange}
                            changeOption={changeOption}
                            changePrice={changePrice}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Marketplace;