import AuthNavigationBar from "../AuthNavBar";
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
    }

    return (
        <div>
            <AuthNavigationBar />
            <div className="center center-block">
                <p>First Name</p>
                <input 
                    type="text"
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    name="first_name" required
                />

                <p>Last Name</p>
                <input 
                    type="text"
                    onChange={(e) => {
                        setlastName(e.target.value);
                    }}
                    name="last_name" required
                />

                <p>Email*</p>
                <input 
                    type="text"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    name="email" required
                />

                <p>Password*</p>
                <input type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    name="password" required
                />
                <br /><br />
                <button onClick={handleSignupUser} className="main_button" id="signup_btn">Signup</button>
                <p className="message">{signupMsg}</p>
            </div>
        </div>
    )
}

export default Signup;