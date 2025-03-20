const express = require('express');
const cors = require('cors');
const path = require('path');
const contactRoute = require('./routes/contact');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

console.log('✅ Loading routes...');
app.use('/api/contact', contactRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: ['POST', 'GET'],
    credentials: true
}));
