const uploadImage = require("../lib/uploadFile");
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let text;
  if (args.length >= 1) {
    text = args.slice(0).join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else return m.reply("• *Example :* .gemini halo");
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  let { key } = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });
if (!mime) {
     try {
        let res = await Query(text);
         await conn.sendMessage(
      m.chat,
      { text: `*[ GEMINI RESPONSE ]*\n${res.result.data}`, edit: key },
      { quoted: m },
    );
    } catch (e) {
      throw e;
    }
  } else {
    let media = await q.download();
    let isTele = /image\/(png|jpe?g)/.test(mime);
    let link = await Uploader.catbox(media);
    let res = await Image(text, link);
    await conn.sendMessage(
      m.chat,
      { text: `*[ GEMINI RESPONSE ]*\n${res.result.data}`, edit: key },
      { quoted: m },
    );
  }
};
handler.help = ["gemini"].map((a) => a + " *[query]*");
handler.tags = ["ai"];
handler.command = /^(gemini|g)$/i;
handler.premium = true;
module.exports = handler;

async function Query(query) {
  return Func.fetchJson("https://api.onesytex.my.id/api/gemini?text= " + query);
}

async function Image(query, url) {
  return Func.fetchJson(
    `https://api.onesytex.my.id/api/gemini-vision?text=${query}&url=${url}`,
  );
}