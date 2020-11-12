require('dotenv/config')
const express = require('express');
const twilio = require('./Twilio');

const app = express();
const client = twilio.client;
const PORT = 3001;

app.get('/test', (req, res) => {
    res.send('Welcome to Twilio!!!')
});

app.get('/login', (req, res) => {
    console.log('loging in ')
});

app.get('/verify', (req, res) => {
    console.log('Verifing code ')
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
});