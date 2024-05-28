let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*• Example :* ${usedPrefix + command} *[Instagram url]*`;
  if (!Func.isUrl(text))
    throw `*• Example :* ${usedPrefix + command} *[Instagram url]`;
  m.reply(wait);
  try {
    let media = await Scraper["Download"].igdl(text);
    if (media.length === 0) throw "*[ NO MEDIA FOUND ]*";
    let url = media.map((a) => a.url);
    for (let i of url) {
      m.reply("*[ INSTAGRAM DOWNLOADER ]*", i);
    }
  } catch (e) {
    throw eror;
  }
};
handler.help = ["ig", "igdl"].map((a) => a + " *[Instagram url]*");
handler.tags = ["downloader"];
handler.command = ["ig", "igdl"];
module.exports = handler;
