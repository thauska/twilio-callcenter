require('dotenv/config')
const express = require('express');
const twilio = require('./Twilio');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 3001;
app.get('/test', (req, res) => {
    res.send('Welcome to Twilio!!!')
});

app.post('/login', async (req, res) => {
    console.log('loging in ');
    const {to, username, channel } = req.body;
    const data = await twilio.sendVerifyAsync(to, channel);
    res.send(data);
});

app.get('/verify', async (req, res) => {
    console.log('Verifing code ')
    const data = await twilio.verifyCodeAsync(process.env.MOBILE_PHONE_NUMBER, req.query.code);
    return data;
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
});