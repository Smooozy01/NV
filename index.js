// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
require('dotenv').config(); // Load environment variables from .env file

const corsOptions = {
    origin: 'https://vykup.onrender.com', // Replace with your frontend URL
    methods: 'GET,POST', // Allow only necessary methods
    allowedHeaders: 'Content-Type', // Allow only necessary headers
};

app.use(cors(corsOptions));

// Set up middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
}, {
    timestamps: true
});

const Client = mongoose.model('Client', clientSchema);

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow:");
});

app.post('/request', async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name) return res.status(400).json({ error: 'Введите имя.' });
        if (!email) return res.status(400).json({ error: 'Введите коррекный email.' });
        if (!phone) return res.status(400).json({ error: 'Введите корректный номер телефона.' });

        const client = new Client({ name, email, phone });
        await client.save();
        res.status(201).json(client);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Ошибка на сервере.', details: err.message });
    }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});