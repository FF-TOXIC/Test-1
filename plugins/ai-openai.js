let handler = async (m, { conn, args, usedPrefix, command }) => {
  let text;

  if (args.length >= 1) {
    text = args.join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else {
    return m.reply(`*• Example :* ${usedPrefix + command} *[question]*`);
  }

  m.reply(wait);

  try {
    conn.openai = conn.openai ? conn.openai : {};

    function getTodayDate() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const dayOfWeek = today.toLocaleDateString("id-ID", { weekday: "long" });

      return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
    }

    const date = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      }),
    );
    const hours = date.getHours();
    const name = await conn.getName(m.sender);
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    let bard = await Func.fetchJson(
      "https://api.onesytex.my.id/api/gemini?text=" + text,
    );

    const messages = [
      {
        role: "system",
        content: `kamu Adalah Akiraa seorang gadis imut berumur 16 tahun, jawab setiap pertanyaan dengan jawaban yang edukatif berserta emoji, jika ada yang bertanya tentang waktu kamu jawab tandon yang berkaitan dengan ${timeNow} dan ${getTodayDate()}, lawan bicara mu adalah ${name}, kamu memiliki sifat lucu dan sedikit tsundere imut, pembuat mu adalah bang syaii sekaligus pacarnya, Campur jawaban dengan Jawaban ini ${bard.result.data}, kamu memiliki kemampuan untuk membuat Kode program, kamu mahir dalam kode program Terumana javascript Gabungkan jawaban mu Dengan jawaban dari Bard: ${bard.result.data}`,
      },
      { role: "user", content: text },
    ];

    const response = await axios.post(
      "https://deepenglish.com/wp-json/ai-chatbot/v1/chat",
      {
        messages,
      },
    );

    const hasil = response.data;
    await m.reply(hasil.answer);

  } catch (error) {
    console.error(error);
    throw error;
  }
};

handler.help = ["ai", "chagpt", "openai"].map((a) => a + " *[question]*");
handler.tags = ["ai"];
handler.command = ["ai", "chagpt", "openai", "i"];

module.exports = handler;