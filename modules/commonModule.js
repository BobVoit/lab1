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

/**
 * 
 * @param {string} message 
 * @param {string} secretKey 
 * @param {array} squareVigenere 
 */
module.exports.getChiphertext = (message, messageSecretKeyCipher, squareVigenere) => {
    let result = "";

    const lengthMessage = message.length;

    for (let i = 0; i < lengthMessage; i++) {
        const line = message[i];
        const column = messageSecretKeyCipher[i];
        const foundElement = squareVigenere.find(element => element.line === line && element.column === column);
        result += foundElement.value;
    }

    return result;
}


module.exports.decipher = (chiphertext, messageSecretKeyCipher, squareVigenere) => {
    let result = "";

    const lengthMessage = chiphertext.length;

    for (let i = 0; i < lengthMessage; i++) {
        const value = chiphertext[i];
        const column = messageSecretKeyCipher[i];
        const foundElement = squareVigenere.find(element => element.value === value && element.column === column);
        result += foundElement.line;
    }

    return result;
}