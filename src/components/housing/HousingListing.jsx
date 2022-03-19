import { Container, Row, Col } from "react-bootstrap";

const HousingListing = ({ housings }) => {
    const Housing = ({ housing }) => {
        const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
        return (
            <Container fluid>
                <Row className="layout">
                    <Col sm={4}>
                        <img src={housing["housing-images"] || defaultImg} alt={housing.id} width="200" />
                    </Col>
                    <Col sm={8}>
                        <div className="medium_size"><strong>Price: </strong> {housing.price}$</div>
                        <div className="medium_size"><strong>Number of Bed: </strong> {housing.numBed}</div>
                        <div className="medium_size"><strong>Number of Bath:</strong> {housing.numBath}</div>
                        <div className="medium_size"><strong>Air Conditioner:</strong> {housing.airConditioner === 1 ? "Yes" : "No"}</div>
                        <div className="medium_size"><strong>Laundry:</strong> {housing.laundry === 1 ? "Yes" : "No"}</div>
                        <div className="medium_size"><strong>Balcony:</strong> {housing.balcony === 1 ? "Yes" : "No"}</div>
                        <div className="medium_size"><strong>Pet Friendly:</strong> {housing.petFriendly === 1 ? "Yes" : "No"}</div>
                        <div className="medium_size"><strong>Elevator:</strong> {housing.elevator === 1 ? "Yes" : "No"}</div>
                        {housing['housing-address'] && <div className="medium_size"><strong>Address:</strong> {housing['housing-address'].label}</div>}
                    </Col>
                </Row>
                <hr />
            </Container>
        )
    }

    return housings.map(housing => <Housing housing={housing} key={housing.id} />)
}

export default HousingListing;