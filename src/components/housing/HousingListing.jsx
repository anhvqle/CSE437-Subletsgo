import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const HousingListing = ({ housings }) => {
    const [page, setPage] = useState(1);
    const PAGE_SIZE = 5;
    const begin = (page - 1) * PAGE_SIZE;
    const end = Math.min(housings.length, begin + PAGE_SIZE);

    const Housing = ({ housing }) => {
        const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
        return (
            <Container fluid>
                <Row className="layout">
                    <Col>
                        <img src={housing["housing-images"] || defaultImg} alt={housing.id} width="300" />
                    </Col>
                    <Col>
                        <div className="medium_size"><strong>Price: </strong> ${housing.price}</div>
                        <div className="medium_size"><strong>Number of Bed: </strong> {housing.numBed}</div>
                        <div className="medium_size"><strong>Number of Bath:</strong> {housing.numBath}</div>
                        <div className="medium_size"><strong>Air Conditioner:</strong> {housing.airConditioner === 1 ? "Yes" : "No"}</div>
                        <div className="medium_size"><strong>Laundry:</strong> {housing.laundry === 1 ? "Yes" : "No"}</div>
                        <div className="medium_size"><strong>Balcony:</strong> {housing.balcony === 1 ? "Yes" : "No"}</div>
                        <div className="medium_size"><strong>Pet Friendly:</strong> {housing.petFriendly === 1 ? "Yes" : "No"}</div>
                        <div className="medium_size"><strong>Elevator:</strong> {housing.elevator === 1 ? "Yes" : "No"}</div>
                        {housing['housing-address'] && <div className="medium_size"><strong>Address:</strong> {housing['housing-address'].label}</div>}
                        <div className="medium_size"><strong>Owner:</strong> {housing.user.firstName} {housing.user.lastName}</div>
                        <a href={`housing/${housing.id}`}>See more</a>
                    </Col>
                </Row>
                <hr />
            </Container>
        )
    }

    return <>
        <div>
            {housings && housings.length > 0 ? 
                (
                    <>
                    {housings.slice(begin, end).map(housing => <Housing housing={housing} key={housing.id} />)}
                    <div className="center">
                        <ReactPaginate
                            pageCount={Math.ceil(housings.length / PAGE_SIZE)}
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
                ) : (
                    <div>There are no housing listings available</div>
                )}
        </div>
    </>
}

export default HousingListing;