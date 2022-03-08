import axios from "axios";

const createTenantList = async (fullName, phoneNumber, email, gender, occupation, company, description) => {
    const url = `${process.env.REACT_APP_API_HOST}/newTenantListingApi`;

    let axiosConfig = {
        withCredentials: true,
        headers: {"Content-Type":"application/json"}
    }

    try {
        const res = await axios.post(url, {
            fullName: fullName,
            phoneNumber : phoneNumber,
            email : email,
            gender : gender,
            occupation : occupation,
            company : company,
            description: description,
        }, axiosConfig);
        
        return res;
    } catch (err) {
        return err.response;
    }
};

const getTenant = async () => {
    const url = `${process.env.REACT_APP_API_HOST}/getTenantListing`;

    let axiosConfig = {
        withCredentials: true,
        headers: {"Content-Type":"application/json"}
    };

    try {
        const res = await axios.get(url, axiosConfig);
        return res;
    } catch (err) {
        return err.response;
    }
};

export default createTenantList;
export {getTenant};