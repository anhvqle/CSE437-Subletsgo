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

const getAllMarketplace = async () => {
    const url = "/api/getAllMarketplaceApi";

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

const getMarketplaceDetail = async (marketplaceId) => {
    const url = `/api/getMarketplaceDetailApi/${marketplaceId}`;

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

const deleteMarketplace = async (marketplaceId) => {
    const url = `/api/deleteMarketplaceApi/${marketplaceId}`;

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        return await axios.delete(url, axiosConfig);
    } catch (err) {
        return err.response;
    }
}

export { getAllMarketplace, getMarketplaceDetail, deleteMarketplace };
export default newMarketplaceListing;