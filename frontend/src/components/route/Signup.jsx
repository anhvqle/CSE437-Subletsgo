import AuthNavigationBar from "../AuthNavBar";
import { useState } from "react";
import signup from "../../data/signupUser";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignupUser = async () => {
        const res = await signup(firstName, lastName, email, password);
    }

    return (
        <div>
            <AuthNavigationBar />
            <div className="center">
                <p>First Name</p>
                <input 
                    type="text"
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    name="first_name" placeholder="First Name" required
                />

                <p>Last Name</p>
                <input 
                    type="text"
                    onChange={(e) => {
                        setlastName(e.target.value);
                    }}
                    name="last_name"
                    placeholder="Last Name"
                    required
                />

                <p>Email</p>
                <input 
                    type="text"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    name="email" placeholder="Email" required
                />

                <p>Password</p>
                <input type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    name="password" placeholder="Password" required
                />
                <br />
                <button onClick={handleSignupUser} className="main_button" id="signup_btn">Signup</button>
            </div>
        </div>
    )
}

export default Signup;