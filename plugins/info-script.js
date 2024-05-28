const handler = async (m, { conn }) => {
    conn.sendButton(m.chat,[["CHAT OWNER",".owner"]], m, {
footer : `*🏷️ SELL SCRIPT AKIRAA-BOT V19*
*• Price :* 50.000
*• Example Bot :* https://chat.whatsapp.com/DQYx0cW0XV33nJjobm7Sk9
*• Type :* plugins 
*• Total features :* 400+

*🏷️ Special Features && Systems :*
* *Ai ChatGpt Real Time*
* *Ai Bard [ Support Image ]*
* *Ai Gemini [ Support Image ]*
* *Ai VoiceVox [ Convert text to voice ANIME ]*
* *Anti Bot [ Populars Features ]*
* *Ulartangga Game*
* *Were Wolf*
* *Hangman Game*
* *Respon Cmd With Sticker*
* *Sudo Users [ New ]*
* *Ai Bing Chat*
* *Bing Image*
* *Payment Getaway [ Saweria ]*
* *Tiktok Downloader [ Support All ]*
* *Capcut Downloader*
* *Play Music [ With Button ]*
* *5 Type menu bot*
* *Support Prefix & no prefix*
 
_...and etc_

*🏷️ Benefit For buying :*
* *✅ Get Free Update LastTime*
* *✅ Get Privillage*
* *✅ Get Free hosting 1 Month*
* *✅ Get APIKEY vip*

*🏦 Payment Methode :*
* *Dana E wallet*
* *Ovo E walllet*
* *QRIS Payment*

*Get More Information Chat Developer Script :* [ '6283831945469', '6287869975929' ]`
})
};

handler.help = ["script", "sc"].map((a) => a + " *[get script]*");
handler.tags = ["info"];
handler.command = ["script", "sc"];
handler.owner = false;
module.exports = handler;