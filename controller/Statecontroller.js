const stateService = require('../services/Stateservices');

const getStates = async (req, res) => {
    try {
        const states = await stateService.getStates();
        res.status(200).json(states);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getStates };
