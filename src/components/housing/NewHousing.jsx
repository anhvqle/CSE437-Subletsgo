import NavigationBar from "../NavigationBar";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext"
import CurrencyInput from 'react-currency-input-field';

const NewHousing = () => {

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

                    <label className="format-form">Phone Number</label>
                    <input className="input-50" type="text" name="phone_number" required />
                    <br />

                    <label className="format-form">Email</label>
                    <input className="input-50" type="text" name="email" required />
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


                    <label className="format-form">Class Standing:</label>
                    <select defaultValue={"Freshman"} name="class_standing" >
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="master">Master Student</option>
                        <option value="PhD">PhD Student</option>
                    </select>
                    <br />
                    <br />

                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label>

                </div>

                <button className="main_button" id="signup_btn">POST</button>
            </Container>
        </div>
    )
}

export default NewHousing;