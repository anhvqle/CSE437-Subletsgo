import { useEffect, useState, useContext } from "react";
import UserContext from "../../context/UserContext"
import { useParams, useNavigate } from "react-router-dom";
import { getDetailHousing, deleteHousing } from "../../data/housing"
import { Container, Button } from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import { Carousel } from "react-bootstrap";

function formatPhoneNumber(s) {
    let text = s?.toString()
    return "(" + text?.substring(0, 3) + ") " + text?.substring(3, 6) + "-" + text?.substring(6, 10);
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

const HousingDetail = () => {
    let { currUser } = useContext(UserContext);
    let { id: housingId } = useParams();
    let [housingDetail, setHousingDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    let [errMessage, setErrMessage] = useState(null);
    let [deleteErrMessage, setDeleteErrMessage] = useState(null);
    let navigate = useNavigate();
    useEffect(() => {
        const fetchHousingDetail = async () => {
            setLoading(true);
            let response = await getDetailHousing(housingId);
            setLoading(false);
            if (response.status <= 299 || response.status === 304) {
                setErrMessage(null);
                setHousingDetail(response.data);
            }
            else {
                setErrMessage(response.data?.message || response.data)
            }
        }
        fetchHousingDetail()
    }, [housingId])

    const onDeleteClicked = async () => {
        const housingId = housingDetail?.id;
        let response = await deleteHousing(housingId)
        if (response.status <= 299 || response.status === 304) {
            setDeleteErrMessage(null);
            navigate("/");
        }
        else {
            setDeleteErrMessage(response.data?.message || response.data)
        }
    }
    const isOwner = currUser.id == housingDetail?.user?.id;
    const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";

    return (
        <>
            <NavigationBar />
            <Container>
                {errMessage && <p className="error">Error: {errMessage}</p>}
                {loading && <div className="middle-spinner loader"></div>}
                {
                    housingDetail &&
                    <>
                        <div className="margin-top">
                            <h2>Housing details</h2>
                            <div className="medium_size"><strong>Price: </strong> ${housingDetail.price}</div>
                            <div className="medium_size"><strong>Number of Bed: </strong> {housingDetail.numBed}</div>
                            <div className="medium_size"><strong>Number of Bath:</strong> {housingDetail.numBath}</div>
                            <div className="medium_size"><strong>Air Conditioner:</strong> {housingDetail.airConditioner === 1 ? "Yes" : "No"}</div>
                            <div className="medium_size"><strong>Laundry:</strong> {housingDetail.laundry === 1 ? "Yes" : "No"}</div>
                            <div className="medium_size"><strong>Balcony:</strong> {housingDetail.balcony === 1 ? "Yes" : "No"}</div>
                            <div className="medium_size"><strong>Pet Friendly:</strong> {housingDetail.petFriendly === 1 ? "Yes" : "No"}</div>
                            <div className="medium_size"><strong>Elevator:</strong> {housingDetail.elevator === 1 ? "Yes" : "No"}</div>
                            {housingDetail['housing-address'] && <div className="medium_size"><strong>Address:</strong> {housingDetail['housing-address'].label}</div>}

                            {housingDetail['housing-images'] && housingDetail['housing-images'].length > 0 ?
                                (
                                    <Carousel className="width-50">
                                        {housingDetail['housing-images'].map((imgSrc, index) => (
                                            <Carousel.Item>
                                                <img className="d-block w-100" key={`img-${index}`} src={imgSrc} alt={index} />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                ) : (
                                    <img className="width-20" key="no-img-available" src={defaultImg} alt="no-img-available" />
                                )
                            }

                            <br />
                            {isOwner && <>
                                {deleteErrMessage && <p className="error">Error: {deleteErrMessage}</p>}
                                <Button className="btn-danger" onClick={onDeleteClicked}>Delete this listing</Button>
                            </>}
                        </div>
                        <Contact user={housingDetail.user} />
                    </>
                }
            </Container>

        </>
    )
}

export default HousingDetail;