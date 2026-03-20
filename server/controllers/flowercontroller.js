const db = require("../config/db");

const getAllFlowers = (req, res) => {
    db.query("SELECT * FROM flowers", (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching flowers" });
        }

        return res.status(200).json(result);
    });
};

module.exports = { getAllFlowers };