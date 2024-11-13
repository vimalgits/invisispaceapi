const db = require('../config/db');

const getAllStates = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM States', (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

module.exports = { getAllStates };
