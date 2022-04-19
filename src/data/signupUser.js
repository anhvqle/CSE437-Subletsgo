import axios from "axios";

const signup = async (firstName, lastName, phoneNumber, email, password, code) => {
    const url = "/api/signup";

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        const res = await axios.post(url, {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            code: code,
        }, axiosConfig);

        return res;
    } catch (err) {
        return err.response;
    }
};

export default signup;
