import { useEffect, useState, useContext } from "react";
import UserContext from "../../context/UserContext"
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import { Carousel } from "react-bootstrap";
import { getMarketplaceDetail, deleteMarketplace } from "../../data/marketplace";

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function formatPhoneNumber(s) {
    let text = s.toString()
    return "(" + text.substring(0, 3) + ") " + text.substring(3, 6) + "-" + text.substring(6, 10);
}

const Contact = ({ user }) => {
    const { firstName, lastName, phoneNumber, email } = user;
    const fullname = `${firstName} ${lastName}`
    return (<div>
        <hr />
        <h2>Contact Information</h2>
        <div className="medium_size"><strong>Full name: </strong> {fullname}</div>
        <div className="medium_size"><strong>Phone Number: </strong> {formatPhoneNumber(phoneNumber)}</div>
        <div className="medium_size"><strong>Email: </strong> {email}</div>
    </div>)
}

const MarketplaceDetail = () => {
    let { currUser } = useContext(UserContext);
    let { id: marketplaceId } = useParams();
    let [marketplaceDetail, setMarketplaceDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    let [errMessage, setErrMessage] = useState(null);
    let [deleteErrMessage, setDeleteErrMessage] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchHousingDetail = async () => {
            setLoading(true);
            let response = await getMarketplaceDetail(marketplaceId);
            setLoading(false);

            console.log(response);

            if (response.status <= 299 || response.status === 304) {
                setErrMessage(null);
                setMarketplaceDetail(response.data);
            }
            else {
                setErrMessage(response.data?.message || response.data)
            }
        }
        fetchHousingDetail()
    }, [marketplaceId]);

    const onDeleteClicked = async () => {
        const marketplaceId = marketplaceDetail?.id;
        let response = await deleteMarketplace(marketplaceId)
        if (response.status <= 299 || response.status === 304) {
            setDeleteErrMessage(null);
            navigate("/marketplace");
        }
        else {
            setDeleteErrMessage(response.data?.message || response.data)
        }
    }

    const isOwner = currUser.id == marketplaceDetail?.user?.id

    return (
        <>
            <NavigationBar />
            <Container>
            {errMessage && <p className="error">Error: {errMessage}</p>}
                {loading && <div className="middle-spinner loader"></div>}
                {
                    marketplaceDetail &&
                    <>
                        <div className="margin-top">
                            <h2>Item details</h2>
                            <div className="medium_size"><strong>Price: </strong> {marketplaceDetail.price}$</div>
                            <div className="medium_size"><strong>Category: </strong> {capitalizeFirstLetter(marketplaceDetail.category)}</div>
                            <div className="medium_size"><strong>Condition:</strong> {capitalizeFirstLetter(marketplaceDetail.condition)}</div>
                            <div className="medium_size"><strong>Description:</strong> {marketplaceDetail.description}</div>
                            
                            <Carousel className="width-50">
                                {marketplaceDetail['marketplace-images'].map((imgSrc, index) => (
                                    <Carousel.Item>
                                        <img className="d-block w-100" key={`img-${index}`} src={imgSrc} alt={index}/>
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                            <br />
                            {isOwner && <>
                                {deleteErrMessage && <p className="error">Error: {deleteErrMessage}</p>}
                                <Button className="btn-danger" onClick={onDeleteClicked}>Delete</Button>
                            </>}
                        </div>
                        <Contact user={marketplaceDetail.user} />
                    </>
                }
            </Container>
        </>
    )
}

export default MarketplaceDetail;