require('dotenv/config');
const twilio = require('twilio');

class Twilio {
    phoneNumber = process.env.PHONE_NUMBER;
    phoneNumberSid = process.env.PHONE_NUMBER_SID;
    tokenSid = process.env.API_SID;
    tokenSecret = process.env.API_SECRET;
    accountSid = process.env.ACCOUNT_SID;
    verify = process.env.VERIFY_SERVICE_ID;
    client;

    constructor() {
        this.client = twilio(this.tokenSid, this.tokenSecret, { accountSid: this.accountSid });
    }

    getTwilio() {
        this.client;
    }

    async sendVerifyAsync(to, channel) {
        const data = await this.client.verify.services(this.verify).verifications.create({
            to,
            channel
        });
        console.log('sendVerify: ', data)
        return data;
    }

    async verifyCodeAsync(to, code) {
        const data = await this.client.verify.services(this.verify).verificationChecks.create({
            to,
            code
        });
        console.log('verifyCode ', data);
        return;
    }
}

const instance = new Twilio();
Object.freeze(instance);

module.exports = instance;