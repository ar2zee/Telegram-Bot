const TeleBot = require("telebot");
const bot = new TeleBot("580454495:AAHiHTeIzd-5OP2ymBSa4I5Sh_WbRqDPXis");

let arrayforMax = [
  'Так короче не беси меня тут, лучше иди побегай ',
  'Почему какаето программа умнее чем этот парень сверху?',
  'Ты что толстый? Ой прости это не вопрос.',
  'Ты видать забыл кто тебе свет в будку провел !',
  'А по интереснее можешь что-то рассказать пожалуйста ?',
  'Прости но наверное тебе надо будет выйти с этой групы тут не место толстым ;)',
  'ИДИ НА УЛИЦУ ПОММОГИ МАМЕ!!!',
  'Ладно, прости меня я всего навсего набор цифр',
  'Мне нравится тебя бесить',
  'Давай 1 на 1 за гаражами , я тебя порву!!!',
  'НУ ты вообще что ли, думаешь что говоришь?'
]

function insertImage () {
    return Math.floor(Math.random() * 5000) + 1;
}

function insertAudio () {
    return Math.floor(Math.random() * 13) + 1;
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
            //  msg.reply.photo("./assets/img/Vit.jpg");
            break;
          case "Artur":
            msg.reply.text(`ты тут тоже особо не выдеывайся`);
            // msg.reply.voice(`./assets/audio/${insertAudio()}.ogg`, { asReply: false });
            //  msg.reply.photo("./assets/img/Vit.jpg");
            break;
          case "Mr Robot":
            msg.reply.voice(`./assets/audio/${insertAudio()}.ogg`, { asReply: false });
            msg.reply.photo("./assets/img/Vanya.jpg");
            break;
          case "Maxim":
              if (msg.text.includes("привет") || msg.text.includes("Hello") || msg.text.includes("Hi")) {
                msg.reply.text(`${msg.text} ${msg.from.first_name}джан`);
              } else if (msg.text.includes("Ааааааа") || msg.text.includes(" ААА") || msg.text.includes("АААА")) {
                msg.reply.text(`ЧЕ ТЫ КРИЧИШЬ ???`);
                msg.reply.photo(`https://memegenerator.net/img/images/${insertImage()}.jpg`);
              } else if (msg.text.includes("лох") || msg.text.includes(" жопа") || msg.text.includes("бот")) {
                msg.reply.text(`ТЫ СЕБЯ ВИДЕЛ ???`);
                msg.reply.photo(`https://memegenerator.net/img/images/${insertImage()}.jpg`);
              } else {
                msg.reply.text(arrayforMax[Math.floor(Math.random() * 7) + 1]);
                msg.reply.photo(`https://memegenerator.net/img/images/${insertImage()}.jpg`);
            }
            break;
          default:
            msg.reply.voice(`./assets/audio/${insertAudio()}.ogg`, { asReply: false });
            msg.reply.photo(`https://memegenerator.net/img/images/${insertImage()}.jpg`);
        }
    }
})

bot.on("edit", msg => {
  return msg.reply.text("Ты зачем сообщения исправил ?", { asReply: true });
});



bot.on("voice", msg => {
  msg.reply.voice(`./assets/audio/${insertAudio()}.ogg`, { asReply: false });
  msg.reply.photo(`https://memegenerator.net/img/images/${insertImage()}.jpg`);
});

bot.on("sticker", msg => {
     msg.reply.text("В жопу засунь свой стикер! Вот тебе фотка с инета", { asReply: true });
     msg.reply.photo(`https://memegenerator.net/img/images/${insertImage()}.jpg`);
});

bot.start();