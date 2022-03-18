import NavigationBar from "../NavigationBar";
import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import HousingListing from './HousingListing';
import HousingFilter from './HousingFilter';
import { getAllHousing } from "../../data/housing"

function Housing() {
    let { currUser, setUser } = useContext(UserContext);
    const [housings, setHousings] = useState([]);
    let [errMessage, setErrMessage] = useState(null);
    const [loading, setLoading] = useState(false);

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
                            <a className="link-styling" href="/newHousing">Create a Housing Listing</a>
                        </button>
                    </Col>
                </Row>
                <Row className="layout">
                    <Col sm={8}>
                        <HousingListing housings={housings} />
                    </Col>
                    <Col>
                        <HousingFilter />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Housing;