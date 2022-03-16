import NavigationBar from "../NavigationBar";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext"
import CurrencyInput from 'react-currency-input-field';
import { Autocomplete } from '@lob/react-address-autocomplete'

const NewHousing = () => {
    const [address, setAddress] = useState({})


    const handleAddressSelect = (selected) => {
        console.log(selected);
        setAddress(selected);
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
                        onValueChange={(value, name) => console.log(value, name)}
                    />
                    <br />

                    <label className="format-form">Address</label>
                    <Autocomplete
                        apiKey="test_pub_7451af19963513e13b1e76a5e974d51"
                        onSelection={handleAddressSelect}
                        delaySearch={true}
                        className="input-50"
                    />
                    <br />

                    <label className="format-form">Number of bed:</label>
                    <select defaultValue={"1"} name="gender">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6+">6+</option>
                    </select>
                    <br />
                    <br />

                    <label className="format-form">Number of bath:</label>
                    <select defaultValue={"1"} name="gender">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6+">6+</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="heating" className="format-form"> Heating</label>
                    <input type="checkbox" id="heating" name="heating" value="heating" />
                    <br />
                    <br />

                    <label htmlFor="cooling" className="format-form"> Cooling</label>
                    <input type="checkbox" id="cooling" name="cooling" value="cooling" />
                    <br />
                    <br />

                    <label htmlFor="parking" className="format-form"> Parking</label>
                    <input type="checkbox" id="parking" name="parking" value="parking" />
                    <br />
                    <br />

                </div>

                <button className="main_button" id="signup_btn">POST</button>
            </Container>
        </div>
    )
}

export default NewHousing;