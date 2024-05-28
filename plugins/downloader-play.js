const ytdl = require("ytdl-core");
const yts = require("yt-search");
const fs = require("fs");
const { pipeline } = require("stream");
const { promisify } = require("util");
const streamPipeline = promisify(pipeline);
const os = require("os");

const handler = async (m, { conn, command, text, usedPrefix }) => {
  conn.play = conn.play || {};
  if (!text) throw `*• Example :* ${usedPrefix + command} *[query]*`;
  m.reply(wait);

  let url;

  try {
    const search = await yts(text);
    if (!search) throw "Not Found, Try Another Title";
    const vid = search.videos[0];
    const { title, thumbnail, views, ago, url: videoUrl, seconds } = vid;
    if (seconds > 3600)
      return m.reply(
        "*[ DURATION TOO LONG ]*\nI cannot download media that exceeds *1 hour* duration.",
      );

    url = videoUrl;
    const caption = `*[ YOUTUBE PLAY ]*\n*• Caption:* ${title}\n*• Views:* ${views}\n*• Ago:* ${ago}\n*• Duration:* ${seconds} seconds\n*• Thumbnail:* ${thumbnail}\n*• Source Yt:* ${videoUrl}`;
  if (menu === "button") {
    conn.sendButton(m.chat,[["Download Video",`.ytv ${url}`]], m, {
body: caption
})
} else m.reply(caption)
    const audioStream = ytdl(videoUrl, {
      filter: "audioonly",
      quality: "highestaudio",
    });

    const tmpDir = os.tmpdir();
    const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

    await streamPipeline(audioStream, writableStream);

    let doc = {
      audio: { url: `${tmpDir}/${title}.mp3` },
      mimetype: "audio/mp4",
      fileName: title,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: videoUrl,
          title: title,
          sourceUrl: videoUrl,
          thumbnail: (await conn.getFile(thumbnail)).data,
        },
      },
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });

    fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
      if (err) console.error(`Failed to delete audio file: ${err}`);
      else console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    });
  } catch (error) {
    throw error;
  }
};

handler.help = ["play *[query]*"];
handler.tags = ["downloader"];
handler.command = /^(play)$/i;

module.exports = handler;