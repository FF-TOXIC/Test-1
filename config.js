global.owner = ["6283831945469", "6287869975929"];
global.mods = ["6287869975929"]; // Moderator
global.prems = ["6287869975929"]; // Premium
// YANG ATAS ITU UBAH JADI NOMOR LU
// & YG BAWAH INI, NOMOR,NAMA,EMAIL LU
global.fsizedoc = "45000000000"; // default 10TB
global.fpagedoc = "19";
global.numberbot = "6287869975929";
global.namedoc = "Akiraa Bot Whatsapp Multi device";
global.nameowner = "𝗕𝗮𝗻𝗴 𝘀𝘆𝗮𝗶𝗶";
global.nomorown = "6287869975929";
global.dana = "6287776600135";
global.pulsa = "6283842839555";
global.ovo = "6283842839555";
global.saweria = "https://saweria.co/BangSyaii";
global.namebot = "𝗔𝗸𝗶𝗿𝗮𝗮-𝗕𝗼𝘁";
global.sgc = "https://chat.whatsapp.com/DQYx0cW0XV33nJjobm7Sk9";
global.sourceUrl = "https://chat.whatsapp.com/DQYx0cW0XV33nJjobm7Sk9";
global.sig = "https://chat.whatsapp.com/DQYx0cW0XV33nJjobm7Sk9";
global.swa = "wa.me/6287869975929";
global.gif = " "; //Ini buat gif yang di menu
global.icon = "https://a.uguu.se/bsTaWwgW.jpg";
global.thumb = "https://telegra.ph/file/6114b89ce52b7c925771d.jpg";
global.version = "19.0";
global.wm = "© AkiraaBot 2023-2024";
global.watermark = wm;
global.lann = "p8ADYJib";
global.wm2 = "𝗔𝗸𝗶𝗿𝗮𝗮-𝗕𝗼𝘁";
global.wm3 = namebot;
global.isPairing = true;
global.wm4 = namebot;
global.fla =
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=";
global.wait = "*[ PLEASE WAIT... ]*";
global.eror = "*[ SYSTEM ERROR ]*";
global.done = "```© Akiraa-Bot 2023-2024```";
global.salah = "Salah\n";
global.web = global.sourceUrl;
global.APIs = {};
global.APIKeys = {};
global.packname = "[ STICKER BY AKIRAA-BOT ]";
global.author = ``;
global.domain = "https://syaiipanel.pannelkuu.biz.id";

global.apikey = "ptla_bFyeP32l9RbrFZ02sMHX9W59sMdDo5WDnhgbMxfrdkj";

global.multiplier = 100;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✉️",
      money: "💵",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

global.danied = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363144038483540@newsletter",
      newsletterName: "🟢 AKIRAA-BOT MULTI DEVICE",
      serverMessageId: -1,
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `[ x ] Your Acces has Danied`,
      body: null,
      thumbnailUrl: "https://telegra.ph/file/02989972e9117495fe747.jpg",
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
};
let fs = require("fs");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update config.js");
  delete require.cache[file];
  require(file);
});