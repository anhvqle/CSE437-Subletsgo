import NavigationBar from "../../NavigationBar";
import { useState } from "react";
import signup from "../../../data/signupUser";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signupMsg, setSignupMsg] = useState("");

    const handleSignupUser = async () => {
        const res = await signup(firstName, lastName, email, password);

        setSignupMsg(res.data.message);

        if (parseInt(res.status) === 2000) {
            // Redirect to Login
        }
    }

    return (
        <div>
            <NavigationBar />
            <div className="center center-block">
                <p>First Name
                    <input  type="text" onChange={(e) => {setFirstName(e.target.value);}} name="first_name" placeholder="First Name" required/>
                </p>

                <p>Last Name
                    <input type="text" onChange={(e) => {setlastName(e.target.value);}} name="last_name" placeholder="Last Name" required/>
                </p>

                <p>Email*
                    <input type="text" onChange={(e) => {setEmail(e.target.value);}} name="email" placeholder="Email" required/>
                </p>

                <p>Password*
                    <input type="password"onChange={(e) => {setPassword(e.target.value);}} name="password" placeholder="Password" required/>
                </p>
                
                <button onClick={handleSignupUser} className="main_button" id="signup_btn">Signup</button>
                <p className="message">{signupMsg}</p>
            </div>
        </div>
    )
}

export default Signup;