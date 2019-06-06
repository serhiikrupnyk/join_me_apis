require('dotenv').config();

module.exports = {
    server: {
        host: process.env.HOST,
        port: process.env.PORT
    },

    baseUrl: process.env.BASE_URL,

    db: {
        mongo: {
            url:  process.env.DB_MONGO_URL
        },
    },

    auth: {
        tokenLifetime: 7200000
    },

    headers: {
        authToken: 'auth-token'
    },
    smtp: {
        service: 'gmail',
        auth: {
            user: process.env.SMTP_AUTH_USER,
            pass: process.env.SMTP_AUTH_PASS
        }
    },
    facebook: {
        FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
        FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
    },
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    emailSender: process.env.EMAIL_SENDER,
    secret: process.env.APP_SECRET
};
