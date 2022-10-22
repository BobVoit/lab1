const filesWork = require('./modules/files/filesWork');
const commonModule = require('./modules/commonModule');
const settings = require('./settings');
const vigenere = require('./modules/vigenere/vigenere');

const { SECRET_KEY } = settings;

const SQUEARE_VIGENERE = vigenere.getSquareVigenere();
const chiphertext = filesWork.readChiphertext();

if (chiphertext === null) {
    console.error('Ошибка при чтение файла сообщения');
    process.exit(1);
}

const messageSecretKeyCipher = commonModule.createMessageSecretKeyCipher(chiphertext, SECRET_KEY);

const message = commonModule.decipher(chiphertext, messageSecretKeyCipher, SQUEARE_VIGENERE);

console.log(message);

filesWork.writeDecryptText(message);