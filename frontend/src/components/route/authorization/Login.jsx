import AuthNavigationBar from "../../AuthNavBar";
import { useState } from "react";
import login from "../../../data/loginUser";

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
                <p>Email
                    <input type="text" onChange={(e) => {setEmail(e.target.value);}} name="email" placeholder="Email" required/>
                </p>

                <p>Password
                    <input type="password"onChange={(e) => {setPassword(e.target.value);}} name="password" placeholder="Password" required/>
                </p>

                <button onClick={handleLoginUser} className="main_button" id="signup_btn">Login</button>
                <p className="message">{loginMsg}</p>
            </div>
        </div>
    )
}

export default Login;