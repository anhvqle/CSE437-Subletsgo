import NavigationBar from "../NavigationBar";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Login() {
    let navigate = useNavigate();
    let { currUser, setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");

    useEffect(() => {
        (async () => {
            if (currUser) {
                navigate("/housing");
            }
        })();
    }, [currUser]);

    const handleForgetPassword = async () => {
        console.log(email);
    };

    return (
        <div>
            <NavigationBar />
            <div className="forget-pw margin-top center">
                <h2>Find Your Account</h2>
                <hr />
                <p>Please enter your email address below and we will send you information to change your password.</p>
                <input className="input-100" type="text" name="email" onChange={(e) => { setEmail(e.target.value); }} placeholder="Enter Your Email Here" required />
                <hr />
                <a href="/login"><button className="btn forget btn-secondary">Cancel</button></a>
                <button onClick={handleForgetPassword} className="btn forget btn-primary">Reset</button>
            </div>
        </div>
    )
}

export default Login;