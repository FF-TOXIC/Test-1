const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    throw `*• Example:* ${usedPrefix + command} *[question]*`;
  }
  try {
    const simiResponse = await fetch(
      `https://itzpire.site/ai/simi-chat?lang=id&text=${text}&toxic=true`,
    );
    const simiData = await simiResponse.json();
    let hasil = ` *[ 💬 ]* ${simiData.result}`;
    m.reply(hasil);
  } catch (e) {
    throw "Maaf, aku tidak mengerti";
  }
};

handler.help = ["simi", "chatbot"].map((a) => a + " *[question]*");
handler.tags = ["ai"];
handler.command = ["simi", "chatbot"];
handler.premium = false;

module.exports = handler;
