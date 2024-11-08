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
global.sudo = process.env.SUDO || "2349066008519";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlhT0I1WDRtM3B1aVF3NjUyZDdUcDdHRGNYZzB2amhOQm4zaFVrbnVsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0tSQXlST3lkcXRCUVo0RjMzeVRUdmdUT2pnQ2VPZWxsVHA5dnlTWlRYST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDUHhVaGFJbUkyK2h0angxTWQ2ZEFOakpNYktBUUFOK3N4WEE5WXdZS1ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBbGNpb0w4YjdWY3YzOHdUSjhva2k5byttSDVkRVdiT3JpdjlBYUE4T1JvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ETjdmLzJQTXlIU3hTaU1ORnFBdHNmU2hQbUdSbmlSeCtPTUUyS0xEbUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1YUTE2THg0RVVmWTZqTXRObFRwLzZaSFRNZzhCOFFBMXFqMk40Q2hWRnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0tOQ3FPZVRORGRvSlNJa3gzYk53Q1Z2b0tnaFVMMW94cU83ZU1Gb1RXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGVGRkJVUWpYVzdmb0wybVZWajJBQUxZSzFnNmRRbkFxNnREU2g4Z2lVbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpMUU9ZNGlsUlBUdVNmQ0txWWRnRkxBTFFTWXdRVjRTdjdzUVUvckwyZGkvS1hTTWVMWE9XMjNpckRjU0FOelp6dmxRZ1l6QWNzRnhDVi9VOGlBcEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJrWnVCMHhRMTJKc21WekxON3FUaGxxWGRWdWNya0ZmUjJmQkZoQ0lidEJvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjYwMDg1MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzE4NjQzQTlBMzg3NkRDQUZBMjc5NDdCOEE1MTY5QkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTEwODcxMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiS1NCTkFHT21SdktlTTZIT01MTWJZUSIsInBob25lSWQiOiIwODA1NDZjMy01OGVlLTRmY2YtYWY5ZS02YWY4ZjlkNjMxMzkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVo1aW03VitrTTIrNHo5S0R2cmhkRitPcjY0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitZczRKb2c0dXpQTEVQYkgwbWxrNzJTSzJRdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0NktNS1Q0MSIsIm1lIjp7ImlkIjoiMjM0OTA2NjAwODUxOToxMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLinaTigI3wn6m5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJL3VxVWtRMTc2NnVRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6Ujhkc1ZVWnNtK3F4UjNOZUpERTlDZjNucVY1ZkZVYVdIZm95dWhvUjFBPSIsImFjY291bnRTaWduYXR1cmUiOiJZUCtrdnFlTk9ISGRRb2s5N1BNdUVuVkhHUWUzZ3VpZzNPVXZBaktUMG5STDVWbWdBSzdjNG1ncTUrMnlkRkFDelJBeFcrVFVLM1FVU1JnM25RcnhEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZUdwek5xdUtJdng0WUVQa3V4UE01TDM4RjJORlVUZUJzMWFzOFJRV2tZRms3Sll3bVVzR0dmYllTcHRDZHlpdlhuVmluUlBYSXc4eThxSzNuSjFuREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDY2MDA4NTE5OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMwZkhiRlZHYkp2cXNVZHpYaVF4UFFuOTU2bGVYeFZHbGgzNk1yb2FFZFEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzExMDg3MDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTEtBIn0="
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
