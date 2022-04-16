import NavigationBar from "../NavigationBar";
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext"
import CurrencyInput from 'react-currency-input-field';
import newMarketplaceListing from "../../data/marketplace";
import FileUploader from "../FileUploader";

const NewMarketplaceListing = () => {

    let navigate = useNavigate();
    let { currUser } = useContext(UserContext);
    let { id: userId } = currUser;

    let [errMessage, setErrMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        userId,
        price: 0,
        category: "apparel",
        condition: "new",
        description: "stateDescription",
        images: [],
    });

    const handlePriceChange = (value) => {
        const clonedData = { ...data };
        clonedData.price = +value;
        setData(clonedData);
    }

    const handleOptionChange = (e) => {
        const clonedData = { ...data };
        clonedData[e.target.dataset.type] = e.target.value;
        setData(clonedData);
    }

    const handleDescriptionChange = (description) => {
        const clonedData = { ...data };
        clonedData.description = description;
        setData(clonedData);
    }

    const submitNewMarketplaceListing = async () => {
        setLoading(true);
        const response = await newMarketplaceListing(data);
        setLoading(false);
        if (response.status <= 299) {
            setErrMessage(null);
            navigate("/marketplace");
        } else {
            setErrMessage(response.data?.message);
        }
    }

    const getImagesBase64OnChange = (images) => {
        const clonedData = { ...data };
        clonedData.images = images;
        setData(clonedData);
    }

    return (
        <div>
            <NavigationBar />
            <Container>
                <div className="margin-top">
                    <label className="format-form">Price</label>
                    <CurrencyInput
                        id="housing-price"
                        name="housing-price"
                        placeholder="Please enter housing price"
                        className="input-50"
                        defaultValue={0}
                        prefix="$"
                        onValueChange={handlePriceChange}
                    />
                    <br />

                    <label className="format-form">Categories:</label>
                    <select defaultValue={"apparel"} data-type="category" onChange={handleOptionChange}>
                        <option value="apparel">Apparel</option>
                        <option value="vehicle">Vehicles</option>
                        <option value="furniture">Furniture</option>
                        <option value="electronics">Electronics</option>
                        <option value="office">Offices</option>
                        <option value="free">Free Stuff</option>
                        <option value="musical">Musical Instruments</option>
                        <option value="sport">Sporting Goods</option>
                        <option value="toy-game">Toys & Games</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <br />

                    <label className="format-form">Conditions:</label>
                    <select defaultValue={"new"} data-type="condition" onChange={handleOptionChange}>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                        <option value="refurbished">Refurbished</option>
                    </select>
                    <br />
                    <br />

                    <label className="format-form">Description</label>
                    <input className="input-50" type="text" onChange={(e) => { handleDescriptionChange(e.target.value); }} name="description" required />
                    <br />

                    <label className="format-form">Images</label>
                    <FileUploader imgHeight="300" getImagesBase64OnChange={getImagesBase64OnChange} />

                </div>
                {loading && <div className="middle-spinner loader"></div>}
                <p></p>
                <button type="button" className="btn btn-primary main_button" id="new_marketplace_btn" onClick={submitNewMarketplaceListing}>POST</button>
                {errMessage && <p className="error">Error: {errMessage}</p>}
            </Container>
        </div>
    )
}

export default NewMarketplaceListing;