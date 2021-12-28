"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelegramBot = require('node-telegram-bot-api');
const token = '5089790868:AAEIKdu9i28YZLwZDf0zodgFuFa5X1zvb-M';
const bot = new TelegramBot(token, { polling: true });
class sendFile {
    constructor() {
        this.chatID = '-689223314';
        this.code = 'iauwdkajshaiwdhkjs';
        bot.on('message', (msg) => {
            const chatID = msg.chat.id;
            const chatMSG = msg.text.toString().toLowerCase();
            if (chatMSG === this.code) {
                this.chatID = chatID;
            }
        });
    }
}
new sendFile();
