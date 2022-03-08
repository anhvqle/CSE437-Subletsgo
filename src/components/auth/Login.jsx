import NavigationBar from "../NavigationBar";
import { useState, useEffect, useContext } from "react";
import login from "../../data/loginUser";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Login() {
    let navigate = useNavigate();
    let { currUser, setUser } = useContext(UserContext);
    console.log({ currUser });

    useEffect(() => {
        (async () => {
            if (currUser) {
                navigate("/housing");
            }
        })();
    }, [currUser]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginMsg, setLoginMsg] = useState("");

    const handleLoginUser = async () => {
        const res = await login(email, password);

        setLoginMsg(res.data.message);

        if (parseInt(res.status) === 200) {
            // TODO: Redirect to HousingPage
            let token = res.data.token;
            localStorage.setItem('authtoken', token);
            setUser(token);
            navigate("/housing");
        }
    }
    return (
        <div>
            <NavigationBar />
            <div className="center">
                <p className="antiquewhite">Email
                    <input className="input-100" type="text" onChange={(e) => { setEmail(e.target.value); }} name="email" placeholder="Email" required />
                </p>

                <p className="antiquewhite">Password
                    <input className="input-100" type="password" onChange={(e) => { setPassword(e.target.value); }} name="password" placeholder="Password" required />
                </p>

                <button onClick={handleLoginUser} className="center auth_button" id="signup_btn">Login</button>
                <p className="message">{loginMsg}</p>
            </div>
        </div>
    )
}

export default Login;