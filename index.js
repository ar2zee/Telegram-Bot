const TeleBot = require("telebot");
const bot = new TeleBot("580454495:AAHiHTeIzd-5OP2ymBSa4I5Sh_WbRqDPXis");
const API_KEY = "100c73ae-ac54-40f5-9862-1d0fc9cb0345";


function insertImage () {
    return Math.floor(Math.random() * 5000) + 1;
}

function insertAudio () {
    return Math.floor(Math.random() * 10) + 1;
}

// bot.on("text", data => console.log(data));
bot.on("text", msg => {
    if (msg.text.includes("привет") || msg.text.includes("Hello") || msg.text.includes("Hi")) {
      msg.reply.text(`${msg.text} ${msg.from.first_name}джан`);
    } else {
        var name = msg.from.first_name;
        switch (name) {
          case "Remontada":
            msg.reply.voice(`./assets/audio/${insertAudio()}.ogg`, { asReply: false });
            msg.reply.photo("./assets/img/Vit.jpg");
            break;
          case "Mr Robot":
            msg.reply.voice(`./assets/audio/${insertAudio()}.ogg`, { asReply: false });
            msg.reply.photo("./assets/img/Vanya.jpg");
            break;
          case "Maxim":
            msg.reply.text(`Что тебе надо толстый ? Вот тебе фоточка с интернета`);
            msg.reply.photo(`https://memegenerator.net/img/images/${insertImage()}.jpg`);
            break;
          default:
            msg.reply.photo(`https://memegenerator.net/img/images/${insertImage()}.jpg`);
            msg.reply.voice(`./assets/audio/${insertAudio()}.ogg`, { asReply: false });
        }
    }
})

bot.on("edit", msg => {
  return msg.reply.text("Ты зачем сообщения исправил ?", { asReply: true });
});

bot.on("sticker", msg => {
     msg.reply.text("В попу засунь свой стикер! Вот тебе фотка с инета", { asReply: true });
     msg.reply.photo(`https://memegenerator.net/img/images/${insertImage()}.jpg`);
});

bot.start();