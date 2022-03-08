import NavigationBar from "./NavigationBar";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

function Marketplace() {
    let navigate = useNavigate();
    let { currUser, setUser } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            if (!currUser) {
                navigate("/");
            }
        })();
    }, [currUser]);

    return (
        <div>
            <NavigationBar />
            <div className="center">
                <p>This is Marketplace Page</p>
            </div>
        </div>
    )
}

export default Marketplace;