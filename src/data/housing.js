import axios from "axios";


const createHousing = async (data) => {
    const url = "/api/newHousingApi";

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

const getAllHousing = async () => {
    const url = "/api/getAllHousingApi";

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        return await axios.get(url, axiosConfig);
    } catch (err) {
        return err.response;
    }
}

const getDetailHousing = async (houseingId) => {
    const url = `/api/getDetailHousingApi/${houseingId}`;

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        return await axios.get(url, axiosConfig);
    } catch (err) {
        return err.response;
    }
}

export { getAllHousing, getDetailHousing };
export default createHousing;