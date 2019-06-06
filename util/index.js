const crypto = require('crypto');

function handleAsyncExceptions() {
    if (handleAsyncExceptions.hooked === false) {
        process.on('unhandledRejection', (err) => {
            throw err;
        });

        handleAsyncExceptions.hooked = true;
    }
}

handleAsyncExceptions.hooked = false;

async function createPassword(length, chars) {
    if (!chars) {
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    }
    return new Promise((resolve, reject) => {
        const charsLength = chars.length;
        if (charsLength > 256) {
            reject('parm chars length greater than 256 characters' +
                ' masks desired key unpredictability');
        }
        const randomBytes = crypto.randomBytes(length);
        const result = new Array(length);
        let cursor = 0;
        for (let i = 0; i < length; i++) {
            cursor += randomBytes[i];
            result[i] = chars[cursor % charsLength];
        }
        resolve(result.join(''));
    });
}

module.exports = {
    handleAsyncExceptions,
    createPassword
};