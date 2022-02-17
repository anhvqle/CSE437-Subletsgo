import axios from "axios";

const signup = async (firstName, lastName, email, password) => {
    const url = `${process.env.REACT_APP_API_HOST}/signup`;

    let axiosConfig = {
        withCredentials: true,
        headers: {"Content-Type":"application/json"}
    }

    try {
        const res = await axios.post(url, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }, axiosConfig);
        
        return res;
    } catch (err) {
        return err.response;
    }
};

export default signup;
