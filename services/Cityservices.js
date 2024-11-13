const City = require('../model/City');

const getCities = async (stateId) => {
    try {
        const cities = await City.getCitiesByState(stateId);
        return cities;
    } catch (err) {
        throw new Error('Error fetching cities');
    }
};
const getAllCities = async () => {
    try {
        const cities = await City.getCities();
        return cities;
    } catch (err) {
        throw new Error('Error fetching cities');
    }
};

module.exports = { getCities, getAllCities };
