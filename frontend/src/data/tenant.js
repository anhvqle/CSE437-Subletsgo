import axios from "axios";

const createTenantList = async (fullName, phoneNumber, email, occupation, company, description) => {
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
            occupation : occupation,
            company : company,
            description: description,
        }, axiosConfig);
        
        return res;
    } catch (err) {
        return err.response;
    }
};

export default createTenantList;
