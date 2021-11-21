'use strict';
// const sdk = require('indy-sdk');
// const indy = require('../../index.js');
// const config = require('../../../config');
const request = require('request-promise');

// FIXME: Assumption: Their endpoint did has an endpoint attribute
exports.sendMessage = function (endpoint, message) {
    
    let requestOptions = {
        method: 'POST',
        uri: `http://${endpoint}/indy`,
        body: {
            message: message
        },
        json: true
    };
    return request(requestOptions);
};