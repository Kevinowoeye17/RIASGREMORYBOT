//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kevinowoeye17@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Kevinowoeye17/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/F4VEfG5kf0nCAMB4qDA65S";
global.website = process.env.GURL || "https://chat.whatsapp.com/F4VEfG5kf0nCAMB4qDA65S";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349125096374";
global.sudo = process.env.SUDO || "2349125096374";
global.owner = process.env.OWNER_NUMBER || "2349125096374";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9OUGZIVU1EdFlHYUk0a2RKbTlsbkVxZjNGZ01HWEtIREVyYmdQa3drZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0t4SEZha2J4UkcyUDZzWVRkQUlnN1RsZVNrNnpnN1RoT3JIRnNrVURFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTmxHWlcrYkZxeS95YklTZGFtZXRuOGZEWXdzcGxFS0MzaTVwaUtBS2wwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZVE5CcVh3czFzZ3VpQ3FxS2lqbWFsaWNaWmRTVEtaRGJWQW1pT0M3bzFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRENGc5ZFJHbXplc0twMzhBWGNNK2pXRlVaS1R4ZWF1V1FmWWUxbWVaMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNanR6d3A1M2xnWjVHNWV2VVRocFRTRTk0MTRyMzNxekpQS3pnYkZ6dzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVBVUNPRDI4UEtVb1hZSXVRbnZkL3NUVVRMTjkxcFpDWndWRUl4RUdWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3lXUEF3ODRFWmNiRkcvYUhYeFpvUW04WWxFYXRUR1d5VGlTQktEYzZ5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNRcUZRclJHTEtoZTZ4VWp4TFMyNDFwQ0ZOU2hqcGkzYmdTa3lxVE4zU0VLZUI4aXk5VHNyZGRIRHNBd0ZuZUR0c0Vkc3YvQ3dXRFd3azYvaTh1aGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6ImZZWDRtdEQ1UjlQQzk1RVNjV1RiZDFvQ0xoM1BBL1ZXRFhoOC81Uk1aRmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhQNHdOSnRzVDQtV3J2dDZkNmRGc0EiLCJwaG9uZUlkIjoiNmQ4OTA5MjEtMGE5OC00ZDNjLTgxMjQtYWZhYjY3YjQ3YmM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIN2trbXNPZVJPTURRUDdPNGN3Q2hkaEtoYz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFSbk8xcUI2VDZRMVZsQ2FyUG9WMnplRFprPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2VkNkxNQkVNR2F0N2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZmZuQnNsSCtkMy9Pcnl6Z2tGNzB3c0d0UmMyUmRMdG5RQ1B4ejNFcUozdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieVBhLzVMblB4eTVPU21lUThlSytlMTNCME0yZkZub29jd2NhdTFtZEYxZnlIbXhoWWhXNzZFTkQ3ZXJlZlpld3FxMWcrQk5qMzN2a3dEMHNxYU5oQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkVzS1ZyUkxDd3FibFVFYkprZ29wT2xIbE0xK2g2cmFRRys0N0ZEM00yNG9LOTZUTy9KeXQ4aVp6eEJVNzltQlNDV0NYTTduV0dRQ0E1ZnRzYVA5NGh3PT0ifSwibWUiOnsiaWQiOiIyMzQ5MTI1MDk2Mzc0OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR3JlYXQgRGVhbHMiLCJsaWQiOiIxMjM3NTU2OTA5OTE4NDQ6NEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyNTA5NjM3NDo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlgzNXdiSlIvbmQvenE4czRKQmU5TUxCclVYTmtYUzdaMEFqOGM5eEtpZDgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTA1NDkyNywibGFzdFByb3BIYXNoIjoiM0E4ckZnIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEVnAifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 GREAT DEALS",
  author: process.env.PACK_AUTHER || "Great Deals",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "GREAT DEALS",
  ownername: process.env.OWNER_NAME || "Great Deals",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "kevinowoeye17",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
