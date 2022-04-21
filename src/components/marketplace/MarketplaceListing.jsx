import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function formatPhoneNumber(s) {
    let text = s?.toString()
    return "(" + text?.substring(0, 3) + ") " + text?.substring(3, 6) + "-" + text?.substring(6, 10);
}

const Owner = ({ owner }) => {
    const { firstName, lastName, phoneNumber, email } = owner;

    return (<div>
        <h5>Posted By:</h5>
        <div className="medium_size"><strong>Full name: </strong> {`${firstName} ${lastName}`}</div>
        <div className="medium_size"><strong>Phone Number: </strong> {formatPhoneNumber(phoneNumber)}</div>
        <div className="medium_size"><strong>Email: </strong> {email}</div>
    </div>)
}

const MarketplaceListing = ({ marketplaces }) => {
    const [page, setPage] = useState(1);
    const PAGE_SIZE = 5;
    const begin = (page - 1) * PAGE_SIZE;
    const end = Math.min(marketplaces.length, begin + PAGE_SIZE);

    const Marketplace = ({ marketplace }) => {
        const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
        return (
            <Container fluid>
                <Row className="layout">
                    <Col sm={4}>
                        <img src={marketplace["marketplace-images"] || defaultImg} alt={marketplace.id} width="300" />
                    </Col>
                    <Col sm={4}>
                        <div className="medium_size"><strong>Price: </strong> {marketplace.price}$</div>
                        <div className="medium_size"><strong>Category: </strong> {capitalizeFirstLetter(marketplace.category)}</div>
                        <div className="medium_size"><strong>Condition:</strong> {capitalizeFirstLetter(marketplace.condition)}</div>
                        <div className="medium_size"><strong>Description:</strong> {marketplace.description}</div>
                        <a href={`marketplace/${marketplace.id}`}>More details</a>
                    </Col>
                    <Col sm={4}>
                        <div className="medium_size"><Owner owner={marketplace.user} /></div>
                    </Col>
                </Row>
                <hr />
            </Container>
        )
    }

    return <>
        <div>
            {marketplaces && marketplaces.length > 0 ?
                (marketplaces.slice(begin, end).map(marketplace => <Marketplace marketplace={marketplace} key={marketplace.id} />)
                ) : (
                    <div>There are currently no marketplace listings available</div>
                )}
        </div>
        <div className="center">
            <ReactPaginate
                pageCount={Math.ceil(marketplaces.length / PAGE_SIZE)}
                pageRangeDisplayed={1}
                marginPagesDisplayed={5}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
                onPageChange={(page) => {
                    setPage(page.selected + 1);
                }}
            />
        </div>
    </>
}

export default MarketplaceListing;