const db = require('../config/db');

const getCitiesByState = (stateId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Cities WHERE stateid = ?', [stateId], (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};
const getCities = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Cities', (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

module.exports = { getCitiesByState, getCities };
