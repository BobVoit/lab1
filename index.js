const vigenere = require('./modules/vigenere/vigenere');
const settings = require('./settings');
const message = require('./modules/message/message');
const commonModule = require('./modules/commonModule');


const SQUEARE_VIGENERE = vigenere.getSquareVigenere();
const { SECRET_KEY } = settings;
 
const a = 4;
const messageText =  message.readMessage();

if (messageText === null) {
    console.error('Ошибка при чтение файла сообщения');
    process.exit(1);
}

const messageSecretKeyCipher = commonModule.createMessageSecretKeyCipher(messageText, SECRET_KEY);

const chiphertext = commonModule.getChiphertext(messageText, messageSecretKeyCipher, SQUEARE_VIGENERE);

console.log(chiphertext);