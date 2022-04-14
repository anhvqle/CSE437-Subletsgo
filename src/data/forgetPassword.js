import axios from "axios";

const forgetPassword = async (email) => {
    const url = "/api/forgetPassword";

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        const res = await axios.post(url, {
            email: email,
        }, axiosConfig);

        return res;
    } catch (err) {
        return err.response;
    }
}

export default forgetPassword;