/*
‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭
╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯
┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║
╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝
╭┻╮╱╰╮╰━━╯╭╯╲┊   ║
╰┳┫▔╲╰┳━━┳╯╱▔┊   ║
┈┃╰━━╲▕╲╱▏╱━━━┬╨╮
┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯
❀Welcome to Cyber gost MD settings.js.

Cyber gost MD official owner Mr.Nadun  ( Nadunsl )

🪀WHATSAPP - 94781352903
💦SUPPORT GROUP - 



☙ SPECIAL INFORMATION ☙

❀Welcome to Cyber gost MD settings.js.

Information provided to you.
If you use true or false
true = if you want to do that task
false = return if you don't want to do the task.
When you change the ones inside the commas, change them correctly.
 
*/

const fs = require('fs')
const chalk = require('chalk')

/*
⚙ 𝘽𝙤𝙩 𝙨𝙚𝙩𝙩𝙞𝙣𝙜𝙨  ⚙
// ⬇️ if you need seen massage use " true " , 🙂මැසේජ් සීන් කරන්න ඔනි නම් true දාන්න ඔනි නැත්තම් false දාන්න😒
global.READ_MASSAGE = false
//⬇️ enable DISABLE Gost Voice Reply , Auto Voice Reply යවන්න ඔනි නම් true දාන්න 
global.VOICE_REPLY = false
// ⬇️ Do you want show time on your bio use "true" want DISABLE use "false" , ස්වයංක්‍රීය Bio එක ඔනි නම් true දාන්න
global.AUTO_BIO = false
//⬇️ Inbox massage block PM block , ඉන්බෝ ඇවිත් බොට්ව යූස් කරනවට කමතියි නම් true දාන්න
global.INBOX_BLOCK = false
//⬇️ Auto react  , ස්වයංක්‍රීය රියක්ට්
global.AUTO_REACT = false
//⬇️ Bad word Auto delete ( you must add bad words ) නරක වචන ඩිලීට් කිරීම , ඔබ විසින් වචන දැමිය යුතුය 
global.ANTI_BADWORD = false
//⬇️ Kick And Auto Delete Group link Senders ,වෙන ගෘප් වල ලින්ක් දාන අයව ඉවත් කරන්න ඕනි නම් true දාන්න
global.ANTI_G_LINK = false
//⬇️ Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = false
global.SEND_GOODBYE = false
//⬇️ Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//⬇️ Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = false
//⬇️ Put Bot Offline
global.BOT_OFFLINE = false
//⬇️ Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//⬇️ This uplaod youtube videos without limit ❗ if you use this you must have paid sever
global.UPLOAD_MAX = false
//⬇️ Desabale Bot inbox ඉන්බොක්ස් බ්ලොක් නොවී වැඩ නොකරන්නනම් 
global.DISABLE_INBOX = false 
//⬇️ DISABLE inbox message send ඉන්බොක්ස් වැඩනොකරන බවට මැසේජ් එක යැවිම true or false 
global.DISABLE_INBOX_MESSAGE_SEND = false
//⬇️ Only Inbox Use ( Only PM Work )ඉන්බො විතරක් වැඩකරීම.
global.INBOX_ONLY_WORK = false
//⬇️ Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = false
//⬇️ Bot On Privet ඔයාට විතරක් බොට් වැඩකරන්න ඕනි නම්.
global.PRIVET_BOT = false
//⬇️ DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//⬇️ DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false 
global.AUTO_SEEN_STATUS = false

❗අවවාදයයි ❗
ඔබ නොදන්නා කෝඩ් වෙනස් කිරීමෙන් වලකින්න.
(දන්නෙ නැති කෝඩ් වෙනස් කරල බොට් වැඩකරේ නැත්තම් අපි නෑ හොදේ)
/*
       🗡️ BOT INFO SETTINGS 🗡️
*/
// You Bots Owner Number ඔයාගෙ ෆෝන් නොම්බර් එක දාන්න
global.owner = ['94781352903'] 
// ⬇️Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚌𝚢𝚋𝚎𝚛 𝚐𝚘𝚜𝚝 ²⁰²³'
//⬇️ Your Bot Name
global.botname =  'Cyber gost MD' 
//⬇️ Your name 
global.ownernma =  '𝙈𝙧.𝙉𝙖𝙙𝙪𝙣' 
//⬇️ Sticker Author Name
global.packname =  '𝙼𝚁 𝙽𝚊𝚍𝚞𝚗 𝙾𝙵𝙲' 
//⬇️ Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//⬇️ Owner React Imoji
global.OWNER_REACT =  '🤟'
//⬇️ Song Download Massage 
global.SONG_DOWN = '```⬇️ 𝘋𝘰𝘸𝘯𝘭𝘰𝘥𝘪𝘯𝘨 𝘺𝘰𝘶𝘳 𝘴𝘰𝘯𝘨...```' 
//⬇️ Song Uplode massage 
global.SONG_UP = '```⬆️ 𝘜𝘱𝘭𝘰𝘥𝘪𝘯𝘨 𝘺𝘰𝘶𝘳 𝘴𝘰𝘯𝘨...```'
//⬇️ Menu imoji 
global.MENU_IMOJI = '📜'
//⬇️ Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//⬇️ Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//⬇️ Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
//⬇️ Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `🍃❣𝗛𝗲𝘆 𝗯𝗿𝗼 𝗶𝗺 𝗼𝗻𝗹𝗶𝗻𝗲💙💓`
//⬇️ Welcome Mesaage
global.WELCOME = process.env.WELCOME || `🎊🙂𝘄𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗠𝘆 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗴𝗿𝗼𝘂𝗽 🎉🎯ඔයාව ආදරෙන් පිලිගන්නව මගෙ ගෘප් එකට💞🍃`
//⬇️ welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//⬇️ Goodbye message 
global.GOODBYE = process.env.GOODBYE || `👋𝗚𝗼𝗼𝗱𝗕𝘆𝗲🍃 පරිස්සමින් ඉන්න😪 left උනාට තරහ නෑ🙂🍃💙 `
//⬇️ Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//⬇️ DISABLE PM Block numbers
global.NO_BLOCK = ["94715166712","94719574492"]
//⬇️ DISABLE download words
global.IMG_BLOCKER = ["xnxx","sex","xxx"]
//⬇️ Open ai API 
global.CHATGPT_API = ''
//⬇️ Your Bot Group Link ඔයාගෙ බොට් ගෘප් එකෙ ලින්ක් එක දාන්න
global.GROUP_LINK = 'https://chat.whatsapp.com/Ih1udrdBNvX5xSu5mUVdql'
/*

   🍃 OTHER 🍃

*/
global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    IMG_BLOCK : "This Word is Ban from image downloader",
    DISABLE_INBOX : "Inbox DISABLE By Bot Owner Please Only Use Groups",
    ONLY_SEX_GROUP : "Adult Video Download Only Allowed On This Group \n\n https://chat.whatsapp.com/JYAg2lMpRTF2bgkeFCxsvf",
    DISABLE_CMD : "🚫 Commands Are DISABLE by owner",
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['94781352903'] //Change  it , ඔයාට කැමති නම් වෙනස් කරන්න
global.premium = ['94781352903'] //Change it ඔයාට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Mr.Nadun' // Your name ඔයාගෙ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '👽'
global.weem = 'Nadun MD'

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11'
}

//global.alivelogo = `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
global.imgalive = fs.readFileSync('./Media/image/gost.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
