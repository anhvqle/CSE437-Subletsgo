import NavigationBar from "../../NavigationBar";
import { useState } from "react";
import { Container } from "react-bootstrap";
import createTenantList from '../../../data/tenant';

function NewTenantListing() {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");

    const handleCreateTenantListing = async () => {
        const res = await createTenantList(fullName, phoneNumber, email, occupation, company, description);

        if (parseInt(res.status) === 200) {
            // Redirect to TenantPage
        }
    }

    return (
        <div>
            <NavigationBar />
            <Container>
                <p>Full Name
                    <input type="text" onChange={(e) => {setFullName(e.target.value);}} name="full_name" required/>
                </p>

                <p>Phone Number
                    <input type="text" onChange={(e) => {setPhoneNumber(e.target.value);}} name="phone_number" required/>
                </p>

                <p>Email
                    <input type="text" onChange={(e) => {setEmail(e.target.value);}} name="email" required/>
                </p>

                <p>Occupation
                    <input type="text" onChange={(e) => {setOccupation(e.target.value);}} name="occupation" required/>
                </p>

                <p>Company
                    <input type="text" onChange={(e) => {setCompany(e.target.value);}} name="company" required/>
                </p>

                <p>Description
                    <input type="text" onChange={(e) => {setDescription(e.target.value);}} name="description" required/>
                </p>

                <button onClick={handleCreateTenantListing} className="main_button" id="signup_btn">POST</button>
            </Container>
        </div>
    )
}

export default NewTenantListing;