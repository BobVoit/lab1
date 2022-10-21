const vigenere = require('./modules/vigenere/vigenere');
const settings = require('./settings');
const message = require('./modules/message/message');
const commonModule = require('./modules/commonModule');


const QUERE_VIGENERE = vigenere.getQueryVigenere();
const { SECRET_KEY } = settings;

process.argv 
const a = 4;
const messageText =  message.readMessage();

if (messageText === null) {
    console.error('Ошибка при чтение файла сообщения');
    process.exit(1);
}

const messageSecretKeyCipher = commonModule.createMessageSecretKeyCipher(messageText, SECRET_KEY);

let g = 5;