import { useEffect, useState, useContext } from "react";
import UserContext from "../../context/UserContext"
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import NavigationBar from "../NavigationBar"
import { getMarketplaceDetail } from "../../data/marketplace";

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
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

            if (response.status <= 299 || response.status === 304) {
                setErrMessage(null);
                setMarketplaceDetail(response.data);
            }
            else {
                setErrMessage(response.data?.message || response.data)
            }
        }
        fetchHousingDetail()
    }, [marketplaceId])

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
                            <h2>Housing details</h2>
                            <div className="medium_size"><strong>Price: </strong> {marketplaceDetail.price}$</div>
                            <div className="medium_size"><strong>Category: </strong> {capitalizeFirstLetter(marketplaceDetail.category)}</div>
                            <div className="medium_size"><strong>Condition:</strong> {capitalizeFirstLetter(marketplaceDetail.condition)}</div>
                            <div className="medium_size"><strong>Description:</strong> {marketplaceDetail.description}</div>
                            {marketplaceDetail['marketplace-images'].map((imgSrc, index) => (
                                <img key={`img-${index}`} src={imgSrc} alt={index} height="300" />
                            ))}
                        </div>
                        {/* <Contact user={marketplaceDetail.user} /> */}
                    </>
                }
            </Container>
        </>
    )
}

export default MarketplaceDetail;