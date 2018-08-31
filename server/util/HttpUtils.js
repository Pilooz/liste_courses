'use strict';

const http = require('http');
const https = require('https');

module.exports = {
  /**
   * Send an http/https request
   *
   * @param {string} host
   * @param {string} path
   * @param {string} method
   * @param {string} auth
   * @param {any} stringData
   * @param {boolean} secured
   * @returns {Promise}
   */
  sendRequest: function(host, port, path, method, auth, stringData, secured) {
    // Define if http or https
    const protocol = secured ? https : http;
    // Promise for query
    return new Promise((resolve, reject) => {
      // Request options
      const options = {
        host: host,
        port: port,
        path: path,
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Content-Length': stringData ? Buffer.byteLength(stringData) : '0',
        },
      };
      // Add authorization if present
      if (auth) {
        // Classic Authorization header
        if (typeof auth === 'string') {
          options.headers.Authorization = auth;
        }
        // RocketChat custom headers
        if (typeof auth === 'object') {
          for (let header in auth) {
            options.headers[header] = auth[header];
          }
        }
      }
      // Request
      const request = protocol.request(options, function(res) {
        res.setEncoding('utf8');
        if (Math.trunc(res.statusCode / 100) !== 2) {
          // Error (!= 2XX status code)
          res.on('data', function(chunk) {
            reject(chunk);
          });
          res.on('end', function() {
            reject(`Server ${host} returned code : ${res.statusCode} when trying to ${method} ${path}`);
          });
          res.on('error', function(err) {
            reject(err);
          });
        } else {
          // Success
          var response = '';
          res.on('data', function(chunk) {
            response += chunk;
          });
          res.on('end', function() {
            resolve(response);
          });
          res.on('error', function(err) {
            reject(err);
          });
        }
      });

      if (stringData) {
        request.write(stringData);
      }
      request.end();
    });
  },
};
