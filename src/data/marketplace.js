import axios from 'axios';

const newMarketplaceListing = async (data) => {
    const url = "/api/newMarketplaceApi";

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
}

export default newMarketplaceListing;