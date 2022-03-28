import { Container, Row, Col } from "react-bootstrap";

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const Owner = ({ owner }) => {
    const { firstName, lastName, phoneNumber, email } = owner;

    return (<div>
        <h5>Posted By:</h5>
        <div className="medium_size"><strong>Full name: </strong> {`${firstName} ${lastName}`}</div>
        <div className="medium_size"><strong>Phone Number: </strong> {phoneNumber}</div>
        <div className="medium_size"><strong>Email: </strong> {email}</div>
    </div>)
}

const MarketplaceListing = ({ marketplaces }) => {
    const Marketplace = ({ marketplace }) => {
        const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
        return (
            <Container fluid>
                <Row className="layout">
                    <Col sm={4}>
                        <img src={marketplace["marketplace-images"] || defaultImg} alt={marketplace.id} width="200" />
                    </Col>
                    <Col sm={4}>
                        <div className="medium_size"><strong>Price: </strong> {marketplace.price}$</div>
                        <div className="medium_size"><strong>Category: </strong> {capitalizeFirstLetter(marketplace.category)}</div>
                        <div className="medium_size"><strong>Condition:</strong> {capitalizeFirstLetter(marketplace.condition)}</div>
                        <div className="medium_size"><strong>Description:</strong> {marketplace.description}</div>
                    </Col>
                    <Col sm={4}>
                        <div className="medium_size"><Owner owner={marketplace.user} /></div>
                    </Col>
                </Row>
                <hr />
            </Container>
        )
    }

    return marketplaces.map(marketplace => <Marketplace marketplace={marketplace} key={marketplace.id} />)
}

export default MarketplaceListing;