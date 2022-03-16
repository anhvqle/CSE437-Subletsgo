import axios from "axios";


const createHousing = async (data) => {
    const url = "/api/newHousing";

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        const res = await axios.post(url, data, axiosConfig);
        return res;
    } catch (err) {
        return err.response;
    }
};

export default createHousing;