import { useEffect, useState, useContext } from "react";
import UserContext from "../../context/UserContext"
import { useParams, useNavigate } from "react-router-dom";
import { getDetailHousing, deleteHousing } from "../../data/housing"
import { Container, Button } from "react-bootstrap";
import NavigationBar from "../NavigationBar"

const Contact = ({ user }) => {
    const { firstName, lastName, phoneNumber, email } = user;
    const fullname = `${firstName} ${lastName}`
    return (<div>
        <hr />
        <h2>Contact Information</h2>
        <div className="medium_size"><strong>Full name: </strong> {fullname}</div>
        <div className="medium_size"><strong>Phone Number: </strong> {phoneNumber}</div>
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
    const isOwner = currUser.id == housingDetail?.user?.id

    return (
        <>
            <NavigationBar />
            <Container>
                {errMessage && <p className="error">Error: {errMessage}</p>}
                {loading && <div className="middle-spinner loader"></div>}
                {
                    housingDetail &&
                    <>
                        <div>
                            <h2>Housing details</h2>
                            <div className="medium_size"><strong>Price: </strong> {housingDetail.price}$</div>
                            <div className="medium_size"><strong>Number of Bed: </strong> {housingDetail.numBed}</div>
                            <div className="medium_size"><strong>Number of Bath:</strong> {housingDetail.numBath}</div>
                            <div className="medium_size"><strong>Air Conditioner:</strong> {housingDetail.airConditioner === 1 ? "Yes" : "No"}</div>
                            <div className="medium_size"><strong>Laundry:</strong> {housingDetail.laundry === 1 ? "Yes" : "No"}</div>
                            <div className="medium_size"><strong>Balcony:</strong> {housingDetail.balcony === 1 ? "Yes" : "No"}</div>
                            <div className="medium_size"><strong>Pet Friendly:</strong> {housingDetail.petFriendly === 1 ? "Yes" : "No"}</div>
                            <div className="medium_size"><strong>Elevator:</strong> {housingDetail.elevator === 1 ? "Yes" : "No"}</div>
                            {housingDetail['housing-address'] && <div className="medium_size"><strong>Address:</strong> {housingDetail['housing-address'].label}</div>}
                            {housingDetail['housing-images'].map((imgSrc, index) => (
                                <img key={`img-${index}`} src={imgSrc} alt={index} height="300" />
                            ))}
                            <br />
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