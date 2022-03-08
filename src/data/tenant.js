import axios from "axios";


const createTenantList = async (fullName, phoneNumber, email, gender, campus, classStanding, description, userId) => {
    const url = "/api/newTenantListingApi";

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        const res = await axios.post(url, {
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            gender: gender,
            campus: campus,
            classStanding: classStanding,
            description: description,
            userId
        }, axiosConfig);

        return res;
    } catch (err) {
        return err.response;
    }
};

const getTenant = async () => {
    const url = "api/getTenantListing";

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    };

    try {
        const res = await axios.get(url, axiosConfig);
        return res;
    } catch (err) {
        return err.response;
    }
};

const deleteTenant = async (id, userId) => {
    const url = "api/deleteTenantListing";
    let axiosConfig = {
        data: { id, userId },
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        const res = await axios.delete(url, axiosConfig);
        return res;
    } catch (err) {
        return err.response;
    }
}

export default createTenantList;
export { getTenant, deleteTenant };