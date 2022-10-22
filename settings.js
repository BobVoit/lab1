const path = require('path');

const settings = {
    SECRET_KEY: "нога",
    PATH_TO_DIR: path.dirname(__filename),
    FILE_MESSAGE_NAME: "message.txt",
    FILE_CHIPHERTEXT_NAME: "chiphertext.txt",
    FILE_DECRYPT_TEXT_NAME: "decrypt_text.txt"
}


module.exports = settings;