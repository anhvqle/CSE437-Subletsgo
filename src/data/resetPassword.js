import axios from "axios";

const resetPassword = async (isCorrectCode, email, password) => {
    const url = "/api/resetPassword";

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        console.log({
            isCorrectCode
        });
        const res = await axios.post(url, {
            isCorrectCode,
            password,
            email
        }, axiosConfig);

        return res;
    } catch (err) {
        return err.response;
    }
}

export default resetPassword;