import NavigationBar from "../NavigationBar";
import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext"
import CurrencyInput from 'react-currency-input-field';
import { Autocomplete } from '@lob/react-address-autocomplete'
import createHousing from "../../data/housing"
import FileUploader from "../FileUploader";

const NewHousing = () => {
    let { currUser } = useContext(UserContext);
    let { id: userId } = currUser
    let navigate = useNavigate();
    let [errMessage, setErrMessage] = useState(null);
    const [data, setData] = useState({
        userId,
        price: 1000,
        address: {},
        images: [],
        numBed: "1",
        numBath: "1",
        airConditioner: false,
        laundry: false,
        balcony: false,
        petFriendly: false,
        elevator: false
    });
    const [loading, setLoading] = useState(false);


    const handleAddressSelect = (selected) => {
        const clonedData = { ...data };
        clonedData.address = selected
        setData(clonedData);
    }

    const handlePriceChange = (value, name) => {
        const clonedData = { ...data };
        clonedData.price = +value
        setData(clonedData);
    }

    const onOptionChange = (e) => {
        const clonedData = { ...data };
        clonedData[e.target.dataset.type] = e.target.value;
        setData(clonedData);
    }

    const onCheckboxChange = (e) => {
        const clonedData = { ...data };
        clonedData[e.target.dataset.type] = e.target.checked;
        setData(clonedData);
    }

    const submitNewHousing = async () => {
        setLoading(true);
        const response = await createHousing(data);
        setLoading(false);
        if (response.status <= 299) {
            setErrMessage(null);
            navigate("/");
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
                        defaultValue={1000}
                        prefix="$"
                        onValueChange={handlePriceChange}
                    />
                    <br />

                    <Row>
                        <Col sm={1}><label className="format-form">Address</label></Col>
                        <Col sm={11}>
                            <Autocomplete
                                apiKey="test_pub_7451af19963513e13b1e76a5e974d51"
                                onSelection={handleAddressSelect}
                                delaySearch={true}
                                className="input-50"
                            />
                        </Col>
                    </Row>
                    <br />

                    <label className="format-form">Images</label>
                    <FileUploader imgHeight="300" getImagesBase64OnChange={getImagesBase64OnChange} />
                    <br />
                    <br />

                    <label className="format-form">Number of bed:</label>
                    <select defaultValue={"1"} data-type="numBed" onChange={onOptionChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </select>
                    <br />
                    <br />

                    <label className="format-form">Number of bath:</label>
                    <select defaultValue={"1"} data-type="numBath" onChange={onOptionChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                    </select>

                    <div className="sub-heading">Amenities available</div>
                    <br />
                    <label className="format-form"> Air Conditioning</label>
                    <input type="checkbox margin-top-50" className="checkbox" data-type="airConditioner" onChange={onCheckboxChange} />
                    <br />
                    <br />

                    <label className="format-form" > In Unit Washer & Dryer</label>
                    <input type="checkbox margin-top-50" className="checkbox" data-type="laundry" onChange={onCheckboxChange} />
                    <br />
                    <br />

                    <label className="format-form" > Balcony</label>
                    <input type="checkbox margin-top-50" className="checkbox" data-type="balcony" onChange={onCheckboxChange} />
                    <br />
                    <br />

                    <label className="format-form"> Pet Friendly</label>
                    <input type="checkbox margin-top-50" className="checkbox" data-type="petFriendly" onChange={onCheckboxChange} />
                    <br />
                    <br />

                    <label className="format-form"> Elevator</label>
                    <input type="checkbox margin-top-50" className="checkbox" data-type="elevator" onChange={onCheckboxChange} />
                    <br />
                    <br />

                </div>
                {loading && <div class="loader"></div>}
                {errMessage && <p className="error">Error: {errMessage}</p>}
                <button className="main_button" id="signup_btn" onClick={submitNewHousing}>POST</button>
            </Container>
        </div>
    )
}

export default NewHousing;