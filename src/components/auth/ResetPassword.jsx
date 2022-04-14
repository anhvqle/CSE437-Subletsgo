import NavigationBar from "../NavigationBar";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import resetPassword from "../../data/resetPassword";

function ResetPassword() {
    let navigate = useNavigate();
    let { currUser, setUser } = useContext(UserContext);
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [resetPwMessage, setResetPwMessage] = useState("");

    useEffect(() => {
        (async () => {
            if (currUser) {
                navigate("/housing");
            }
            if (!sessionStorage.getItem("email") || !sessionStorage.getItem("code")) {
                navigate("/forgetPassword");
            }
        })();
    }, [currUser]);
    const handleResetPassword = async () => {
        let correctCode = sessionStorage.getItem("code")
        let email = sessionStorage.getItem("email")
        const res = await resetPassword(correctCode === code, email, password);
        if (res.status === 200) {
            sessionStorage.removeItem("email")
            sessionStorage.removeItem("code")
        }
        setResetPwMessage(res.data.message);
    }

    const handleCancel = async () => {
        sessionStorage.removeItem("email")
        sessionStorage.removeItem("code")
        navigate("/login");
    }

    return (
        <div>
            <NavigationBar />
            <div className="forget-pw margin-top center">
                <h2>Find Your Account</h2>
                <hr />
                <p>Please enter your 6-digit code below</p>
                <input className="input-100" type="text" onChange={(e) => { setCode(e.target.value); }} name="code" placeholder="6-digit code" required />
                <p>Please enter your new password</p>
                <input className="input-100" type="password" onChange={(e) => { setPassword(e.target.value); }} name="password" placeholder="New Password" required />
                <hr />
                <button className="btn forget btn-secondary" onClick={handleCancel}>Cancel</button>
                <button onClick={handleResetPassword} className="btn forget btn-primary">Reset</button>
                <br /><br />
                <p className="message">{resetPwMessage}</p>
            </div>
        </div>
    )
}

export default ResetPassword;