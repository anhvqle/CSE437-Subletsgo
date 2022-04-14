import axios from "axios";

const resetPassword = async (code, password) => {
    const url = "/api/resetPassword";

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        const res = await axios.post(url, {
            code: code,
            password: password,
        }, axiosConfig);

        return res;
    } catch (err) {
        return err.response;
    }
}

export default resetPassword;