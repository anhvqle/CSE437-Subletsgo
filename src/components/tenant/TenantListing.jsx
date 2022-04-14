import { Container, Col, Row, ListGroup, Button } from "react-bootstrap";
import UserContext from "../../context/UserContext"
import { useContext } from "react";
import { useState } from "react";
import { deleteTenant } from "../../data/tenant"
import ReactPaginate from "react-paginate";


function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function formatPhoneNumber(s) {
    let text = s.toString()
    return "(" + text.substring(0, 3) + ") " + text.substring(3, 6) + "-" + text.substring(6, 10);
}

function getCampusName(s) {
    if (s === "danforth")
        s = capitalizeFirstLetter(s);
    else
        s = s.toUpperCase();
    return s + " Campus";
}

function TenantListing(props) {
    const { currUser } = useContext(UserContext);
    const { id: userId } = currUser;
    const { deleteTenantFrontEnd } = props
    const [page, setPage] = useState(1);
    const PAGE_SIZE = 10;
    const begin = (page - 1) * PAGE_SIZE;
    const end = Math.min(props.tenants.length, begin + PAGE_SIZE);
    const onDeleteClicked = (e) => {
        let id = e.target.dataset.tenantId;
        deleteTenant(id, userId)
        deleteTenantFrontEnd(id)
    }

    return (
        <div>
            {props.tenants && props.tenants.length > 0 ? (
                <ListGroup as="ol" numbered>
                    {props.tenants.slice(begin, end).map(function (t, index) {
                        return (
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" action variant="light" key={t.id}>
                                <Container fluid>
                                    <Row>
                                        <Col sm={8}>
                                            <div className="fw-bold">{t.fullName}</div>
                                            {`${capitalizeFirstLetter(t.classStanding)} @ ${getCampusName(t.campus)}`}
                                            <ul>
                                                <li>{(t.description === undefined) ? "No description available" : t.description}</li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <div className="bigger_size">
                                                <i className={t.gender === 'other' ? "fw-bold fa fa-genderless" : `fw-bold fa fa-${t.gender}`}></i> {capitalizeFirstLetter(t.gender)}
                                            </div>
                                            <div className="bigger_size"><i className="fw-bold fa fa-phone"></i> {formatPhoneNumber(t.phoneNumber)}</div>
                                            <div className="bigger_size"><i className="fw-bold fa fa-envelope"></i> {t.email}</div>
                                        </Col>
                                        {
                                            userId === t.userId &&
                                            < Col sm={1}>
                                                <Button className="btn-danger" data-tenant-id={t.id} onClick={onDeleteClicked}>X</Button>
                                            </Col>
                                        }
                                    </Row>
                                </Container>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            ) : (
                <div>There are currently no tenant listings available</div>
            )
            }
            <br />
            <ReactPaginate
                pageCount={props.tenants.length / PAGE_SIZE}
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
        </div >
    )
}

export default TenantListing;