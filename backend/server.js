require('dotenv/config')
const express = require('express');
const twilio = require('./Twilio');

const app = express();
const PORT = 3001;

app.get('/test', (req, res) => {
    res.send('Welcome to Twilio!!!')
});

app.get('/login', async (req, res) => {
    console.log('loging in ');
    const data = await twilio.sendVerifyAsync(process.env.MOBILE_PHONE_NUMBER, 'sms')
    res.send(data)
});

app.get('/verify', async (req, res) => {
    console.log('Verifing code ')
    const data = await twilio.verifyCodeAsync(process.env.MOBILE_PHONE_NUMBER, req.query.code);
    return data;
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
});