import axios from "axios";

const getProfilePage = async () => {
    const url = "/api//profile";

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

const getUserTenantListing = async (userId) => {
    const url = `/api/getUserTenantListingApi/${userId}`;

    let axiosConfig = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
    }

    try {
        return await axios.get(url, axiosConfig,
            {"params": { userId }}
        );
    } catch (err) {
        return err.response;
    }
}

const getUserHousingListing = async (userId) => {
    const url = `/api/getUserHousingListingApi/${userId}`;

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

const getUserMarketplaceListing = async (userId) => {
    const url = `/api/getUserMarketplaceListingApi/${userId}`;

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

export default getProfilePage;
export { getUserTenantListing, getUserHousingListing, getUserMarketplaceListing };