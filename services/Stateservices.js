const State = require('../model/State');

const getStates = async () => {
    try {
        const states = await State.getAllStates();
        return states;
    } catch (err) {
        throw new Error('Error fetching states');
    }
};

module.exports = { getStates };
