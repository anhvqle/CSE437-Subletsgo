import NavigationBar from "../NavigationBar";
import { useState } from "react";
import signup from "../../data/signupUser";

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
            // TODO: Redirect to Login
        }
    }

    return (
        <div>
            <NavigationBar />
            <div className="center center-block">
                <p className="antiquewhite">First Name
                    <input className="input-100" type="text" onChange={(e) => {setFirstName(e.target.value);}} name="first_name" placeholder="First Name" required/>
                </p>

                <p className="antiquewhite">Last Name
                    <input className="input-100" type="text" onChange={(e) => {setlastName(e.target.value);}} name="last_name" placeholder="Last Name" required/>
                </p>

                <p className="antiquewhite">Email*
                    <input className="input-100" type="text" onChange={(e) => {setEmail(e.target.value);}} name="email" placeholder="Email" required/>
                </p>

                <p className="antiquewhite">Password*
                    <input className="input-100" type="password"onChange={(e) => {setPassword(e.target.value);}} name="password" placeholder="Password" required/>
                </p>
                <ul id="pw-req">
                    <li>Your password must contain at least 8 characters.</li>
                    <li>Your password must contain at least 1 special character.</li>
                    <li>Your password can’t be entirely numeric.</li>
                </ul>
                <br />
                
                <button onClick={handleSignupUser} className="center auth_button" id="signup_btn">Signup</button>
                <p className="message">{signupMsg}</p>
            </div>
        </div>
    )
}

export default Signup;