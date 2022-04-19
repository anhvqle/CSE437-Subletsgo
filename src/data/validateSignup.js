import axios from "axios";

const validateSignup = async (phoneNumber, email, password) => {
    const url = "/api/validateSignup";

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        const res = await axios.post(url, {
            phoneNumber: phoneNumber,
            email: email,
            password: password,
        }, axiosConfig);

        return res;
    } catch (err) {
        return err.response;
    }
};

export default validateSignup;