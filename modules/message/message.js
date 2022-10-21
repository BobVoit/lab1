const fs = require('fs');
const { PATH_TO_DIR, FILE_MESSAGE_NAME } = require('../../settings');


/**
 * 
 * @returns {string | null} - if read file was successfully, else
 */
module.exports.readMessage = () => {
    try {  
        var data = fs.readFileSync(`${PATH_TO_DIR}${'\\'}modules\\message${'\\'}${FILE_MESSAGE_NAME}`, 'utf8');
        return data.toString(); 
    } catch(e) {
        console.log('Error:', e.stack);
        return null;
    }
}