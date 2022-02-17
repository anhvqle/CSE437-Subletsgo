import AuthNavigationBar from "../AuthNavBar";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginUser = async () => {
        console.log("Login Pressed");
    }
    return (
        <div>
            <AuthNavigationBar />
            <div className="center">
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
                <button onClick={handleLoginUser} className="main_button" id="signup_btn">Sign Up</button>
            </div>
        </div>
    )
}

export default Login;