const { SECRET_KEY } = require('../settings');


/**
 * 
 * @param {string} message - сообщение
 * @param {string} secretKey - секретный ключ
 * @returns {string}
 */
module.exports.createMessageSecretKeyCipher = (message, secretKey) => {

    let result = "";

    const secretKeyLength = secretKey.length;

    let currentSecretKeySymbol = 0;

    for (let i = 0; i < message.length; i++) {
        if (currentSecretKeySymbol === secretKeyLength) {
            currentSecretKeySymbol = 0;
        }
        
        result += secretKey[currentSecretKeySymbol];

        currentSecretKeySymbol++;
    }

    return result;
}