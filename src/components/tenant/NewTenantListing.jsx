import NavigationBar from "../NavigationBar";
import { useState } from "react";
import { Container } from "react-bootstrap";
import createTenantList from '../../data/tenant';
import { useNavigate } from "react-router-dom";
function NewTenantListing() {
    let navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const [campus, setCampus] = useState("");
    const [classStanding, setClassStanding] = useState("");
    const [description, setDescription] = useState("");

    const handleCreateTenantListing = async () => {
        console.log(fullName, phoneNumber, email, gender, campus, classStanding, description);
        const res = await createTenantList(fullName, phoneNumber, email, gender, campus, classStanding, description);

        if (parseInt(res.status) === 200) {
            navigate("/tenant");
        }
    }

    return (
        <div>
            <NavigationBar />
            <Container>
                <div className="margin-top">
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

                    <form onChange={(e) => setCampus(e.target.value)}>
                        <p className="beige">Which campus affiliation best describes you?</p>
                            <div className="beige radio">
                                <label><input type="radio" name="campus" value="danforth"/> Danforth Campus</label>
                            </div>
                            <div className="beige radio">
                                <label><input type="radio" name="campus" value="wusm"/> WUSM Campus</label>
                            </div>
                    </form>
                    <br />

                    <label className="format-form">Class Standing:</label>
                    <select defaultValue={"Freshman"} name="class_standing" onChange={(e) => setClassStanding(e.target.value)}>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="master">Master Student</option>
                        <option value="PhD">PhD Student</option>
                    </select>
                    <br />
                    <br />

                    <label className="format-form">Description</label>
                    <input className="input-50" type="text" onChange={(e) => {setDescription(e.target.value);}} name="description" required/>
                    
                </div>

                <button onClick={handleCreateTenantListing} className="main_button" id="signup_btn">POST</button>
            </Container>
        </div>
    )
}

export default NewTenantListing;