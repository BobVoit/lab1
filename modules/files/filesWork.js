const fs = require('fs');
const { PATH_TO_DIR, FILE_MESSAGE_NAME, FILE_CHIPHERTEXT_NAME } = require('../../settings');


/**
 * 
 * @returns {string | null} - if read file was successfully, else
 */
module.exports.readMessage = () => {
    try {  
        const data = fs.readFileSync(`${PATH_TO_DIR}${'\\'}${FILE_MESSAGE_NAME}`, 'utf8');
        return data.toString(); 
    } catch(e) {
        console.log('Error:', e.stack);
        return null;
    }
}

/**
 * 
 * @param {*} text - записываемый текст
 */
module.exports.writeChiphertext = (text) => {
    try {  
        fs.writeFileSync(`${PATH_TO_DIR}${'\\'}${FILE_CHIPHERTEXT_NAME}`, text);
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

/**
 * 
 * @param {string} text 
 * @returns {string | null} - зашифрованная строка
 */
module.exports.readChiphertext = () => {
    try {  
        const data = fs.readFileSync(`${PATH_TO_DIR}${'\\'}${FILE_CHIPHERTEXT_NAME}`);
        return data.toString();
    } catch(e) {
        console.log('Error:', e.stack);
        return null;
    }
}