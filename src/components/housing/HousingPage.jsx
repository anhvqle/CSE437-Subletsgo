import NavigationBar from "../NavigationBar";
import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect, } from "react";
import { Container, Col, Row } from "react-bootstrap";
import HousingListing from './HousingListing';
import HousingFilter from './HousingFilter';
import { getAllHousing } from "../../data/housing"

function HousingPage() {
    let { currUser, setUser } = useContext(UserContext);
    const [housings, setHousings] = useState([]);
    let [errMessage, setErrMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState({
        price: [0, 1000],
        numBed: {
            "1": false,
            "2": false,
            "3": false,
            "4+": false
        },
        numBath: {
            "1": false,
            "2": false,
            "3": false,
            "4+": false
        },
        amenities: {
            airConditioner: false,
            laundry: false,
            balcony: false,
            petFriendly: false,
            elevator: false,
        }
    });

    useEffect(() => {
        (async () => {
            setLoading(true);
            let response = await getAllHousing();
            setLoading(false);
            if (response.status <= 299 || response.status === 304) {
                setErrMessage(null);
                setHousings(response.data);
            }
            else {
                setErrMessage(response.data?.message)
            }
        })();
    }, []);

    useEffect(() => {
        const prices = housings.map((housing) => housing.price);
        let clonedSelectedFilter = { ...selectedFilter }
        clonedSelectedFilter.price = [Math.min(...prices), Math.max(...prices)]
        setSelectedFilter(clonedSelectedFilter)
    }, [housings]);

    let initialPriceRange = [1, 1000];
    if (housings.length > 0) {
        const prices = housings.map((housing) => housing.price);
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

    const filterHousing = () => {
        // Filter by price
        let filteredHousings = housings.filter((housing) => housing.price <= selectedFilter.price[1] && housing.price >= selectedFilter.price[0])
        let clonedFilter = { ...selectedFilter }
        delete clonedFilter.price
        for (const [category, option] of Object.entries(clonedFilter)) {
            let selectedSubcategory = []
            for (const [subCategory, checked] of Object.entries(option)) {
                if (checked) selectedSubcategory.push(subCategory)
            }
            if (selectedSubcategory.length === 0) continue;
            if (category === "amenities") {
                for (const option of selectedSubcategory) {
                    filteredHousings = filteredHousings.filter((t) => t[option])
                }
            } else {
                filteredHousings = filteredHousings.filter((t) => selectedSubcategory.includes(t[category]))
            }
        }
        return filteredHousings;
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
                        <a className="link-styling" href="/newHousing">
                            <button type="button" className="center btn btn-primary monospace rounded-pill">Create New Housing Listing</button>
                        </a>
                    </Col>
                </Row>
                <Row className="layout">
                    <Col sm={8}>
                        <HousingListing housings={filterHousing()} />
                    </Col>
                    <Col>
                        <HousingFilter
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

export default HousingPage;