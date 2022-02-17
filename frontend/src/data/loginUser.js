import axios from "axios";

const login = async (email, password) => {
    const url = `${process.env.REACT_APP_API_HOST}/login`;

    let axiosConfig = {
        withCredentials: true,
        headers: {"Content-Type":"application/json"}
    }

    try {
        const res = await axios.post(url, {
            email: email,
            password: password,
        }, axiosConfig);
        
        return res;
    } catch (err) {
        return err.response;
    }
};

export default login;
