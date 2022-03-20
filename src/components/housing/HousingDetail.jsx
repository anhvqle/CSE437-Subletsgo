import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailHousing } from "../../data/housing"
import { Container } from "react-bootstrap";
import NavigationBar from "../NavigationBar"

const HousingDetail = () => {
    let { id: housingId } = useParams();
    let [housingDetail, setHousingDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    let [errMessage, setErrMessage] = useState(null);
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
    return (
        <>
            <NavigationBar />
            <Container>
                {errMessage && <p className="error">Error: {errMessage}</p>}
                {loading && <div className="middle-spinner loader"></div>}
                {
                    housingDetail &&
                    <div>
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
                    </div>
                }
            </Container>
        </>
    )
}

export default HousingDetail;