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
        })();
    }, [currUser]);

    const handleResetPassword = async () => {
        console.log(code, password);
        const res = await resetPassword(code, password);

        setResetPwMessage(res.data.message);
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
                <a href="/login"><button className="btn forget btn-secondary">Cancel</button></a>
                <button onClick={handleResetPassword} className="btn forget btn-primary">Reset</button>
                <br /><br />
                <p className="message">{resetPwMessage}</p>
            </div>
        </div>
    )
}

export default ResetPassword;