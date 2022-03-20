import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailHousing } from "../../data/housing"

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
        <div>
            {errMessage && <p className="error">Error: {errMessage}</p>}
            {loading && <div className="middle-spinner loader"></div>}
            <h1>This is Housing detail for {housingId}</h1>
        </div>
    )
}

export default HousingDetail;