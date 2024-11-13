const cityService = require('../services/Cityservices');

const getCities = async (req, res) => {
    const stateId = req.params.stateId;

    try {
        const cities = await cityService.getCities(stateId);
        res.status(200).json(cities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const getAllCities = async (req, res) => {

    try {
        const cities = await cityService.getAllCities();
        res.status(200).json(cities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getCities, getAllCities };
