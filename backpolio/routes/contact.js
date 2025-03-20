const express = require('express');
const router = express.Router();
const { pool } = require('../db'); // Fix path

router.get('/', (req, res) => {
    res.send('Contact API is working!');
});

router.post('/', async (req, res) => {
    console.log('Received data:', req.body); // ✅ Debugging line
    const { name, email, countryCode, phoneNumber, message } = req.body;

    if (!name || !email || !countryCode || !phoneNumber || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO contacts (name, email, country_code, phone_number, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, email, countryCode, phoneNumber, message]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error saving data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;
