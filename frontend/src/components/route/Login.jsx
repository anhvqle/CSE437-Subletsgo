import AuthNavigationBar from "../AuthNavBar";
import { useState } from "react";
import login from "../../data/loginUser";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginMsg, setLoginMsg] = useState("");

    const handleLoginUser = async () => {
        const res = await login(email, password);

        setLoginMsg(res.data.message);
    }
    return (
        <div>
            <AuthNavigationBar />
            <div className="center">
                <p>Email</p>
                <input 
                    type="email"
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
                <br /><br />
                <button onClick={handleLoginUser} className="main_button" id="signup_btn">Login</button>
                <p className="message">{loginMsg}</p>
            </div>
        </div>
    )
}

export default Login;