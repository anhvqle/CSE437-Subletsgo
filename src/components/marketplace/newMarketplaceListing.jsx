import NavigationBar from "../NavigationBar";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext"
import CurrencyInput from 'react-currency-input-field';
import createHousing from "../../data/housing"
import FileUploader from "../FileUploader";

const NewMarketplaceListing = () => {

    const [description, setDescription] = useState("");

    const submitNewMarketplaceListing = async () => {
        console.log("submit");
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
                        defaultValue={1000}
                        prefix="$"
                    />
                    <br />

                    <label className="format-form">Categories:</label>
                    <select defaultValue={"apparel"} data-type="numBath">
                        <option value="apparel">Apparel</option>
                        <option value="vehicle">Vehicles</option>
                        <option value="furniture">Furniture</option>
                        <option value="electronic">Electronics</option>
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
                    <select defaultValue={"new"} data-type="numBath">
                        <option value="new">New</option>
                        <option value="used">Used</option>
                        <option value="refurbished">Refurbished</option>
                    </select>
                    <br />
                    <br />

                    <label className="format-form">Description</label>
                    <input className="input-50" type="text" onChange={(e) => { setDescription(e.target.value); }} name="description" required />

                </div>
                <button className="main_button" id="signup_btn" onClick={submitNewMarketplaceListing}>POST</button>
            </Container>
        </div>
    )
}

export default NewMarketplaceListing;