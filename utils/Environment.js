require('dotenv').config({
    path: './config/qa.env'
});

module.exports = {

    baseUrl: process.env.BASE_URL

};