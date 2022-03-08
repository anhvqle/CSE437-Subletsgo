import NavigationBar from "../NavigationBar";
import { useState } from "react";
import { Container } from "react-bootstrap";
import createTenantList from '../../data/tenant';
function NewTenantListing() {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [gender, setGender] = useState("male");

    const handleCreateTenantListing = async () => {
        const res = await createTenantList(fullName, phoneNumber, email, gender, occupation, company, description);

        if (parseInt(res.status) === 200) {
            // TODO: Redirect to TenantPage
        }
    }

    return (
        <div>
            <NavigationBar />
            <Container>
                <form className="margin-top">
                    <label className="format-form">Full Name</label>
                    <input className="input-50" type="text" onChange={(e) => {setFullName(e.target.value);}} name="full_name" required/>
                    <br />

                    <label className="format-form">Phone Number</label>
                    <input className="input-50" type="text" onChange={(e) => {setPhoneNumber(e.target.value);}} name="phone_number" required/>
                    <br />

                    <label className="format-form">Email</label>
                    <input className="input-50" type="text" onChange={(e) => {setEmail(e.target.value);}} name="email" required/>
                    <br />

                    <label className="format-form">Gender:</label>
                    <select defaultValue={"male"} name="gender" onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <br />

                    <label className="format-form">Occupation</label>
                    <input className="input-50" type="text" onChange={(e) => {setOccupation(e.target.value);}} name="occupation" required/>
                    <br />

                    <label className="format-form">Company</label>
                    <input className="input-50" type="text" onChange={(e) => {setCompany(e.target.value);}} name="company" required/>
                    <br />

                    <label className="format-form">Description</label>
                    <input className="input-50" type="text" onChange={(e) => {setDescription(e.target.value);}} name="description" required/>
                    
                </form>

                <button onClick={handleCreateTenantListing} className="main_button" id="signup_btn">POST</button>
            </Container>
        </div>
    )
}

export default NewTenantListing;