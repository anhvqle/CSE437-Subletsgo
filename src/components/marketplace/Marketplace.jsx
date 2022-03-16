import NavigationBar from "../NavigationBar";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

function Marketplace() {
    let { currUser, setUser } = useContext(UserContext);

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