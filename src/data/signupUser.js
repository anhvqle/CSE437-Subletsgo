import axios from "axios";

const signup = async (firstName, lastName, phoneNumber, email, password, isCodeCorrect) => {
    const url = "/api/signup";
    console.log({ isCodeCorrect });

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
            isCodeCorrect: isCodeCorrect,
        }, axiosConfig);

        return res;
    } catch (err) {
        return err.response;
    }
};

export default signup;
