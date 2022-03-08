import axios from "axios";

const createTenantList = async (fullName, phoneNumber, email, gender, occupation, company, description) => {
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
            occupation: occupation,
            company: company,
            description: description,
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

export default createTenantList;
export { getTenant };