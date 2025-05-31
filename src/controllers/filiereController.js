import db from '../config/db.js';


const getAllFilieres = async (req, res) => {
    const sql = 'SELECT * FROM filiere';

    try {
        const [results] = await db.query(sql);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export default {
    getAllFilieres,
}