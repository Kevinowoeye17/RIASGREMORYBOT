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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUUrb2oxMXBMYXBwYURQdHcydXgvSndsSTRGb3NrVzJUZVl0SDJ5WGcwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkM5NWlrZmx4U2FseUpXaURhTFVPWG5hT0MvcVYvQ041Qk56citxWGt4QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQWRwYTZZNEhrVXBvZXFFbTFYYUpUYUNsZVY5TVNDeWsyeGJuczJlYkZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRDdKQ1ZFY1ZKd0NlT2Z4MER0M2FJTHFNQTBYZ1F6ejF1RzVRVEsxY2o4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPaHl2SHkvU25TWENGeS9JQ3k5Y1dNWVV5dmszbWZhNkQ2b2xUZTI0bmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNoamlVWHRuMjI4UlhaOWNNSEhPN3U2YWNVZGpsaUw0ejNDa2xsdi9mRlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUExb0FtVllFWlhLbVJTVk9yTldZV2t6RTMyUHV1MWdYOUJ1elppRi9IST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibm9tbXczdWJNU2NOSnNqaFAwVk85MEg1b2ZZMWROQ1lURURvcFFNUHBDWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg1S2FkTmxBNFlXeEVraFIxYmR4b3JRZDdkS1VOdHJGTFRnRWcxa3BCMGpSdC9qY0lDTDlwNDZHbWVncjZwWk1qYld0eGZHemp1WnZTQTQ5RjdHbEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJHR0t1QlgrSXZydG0zNVNycDRwV1MzQjBVQjZHU3M0YnBRMGJPck9NSnVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyeDhsNjE4MlNRTzk3T0JEMmpmdkpnIiwicGhvbmVJZCI6ImVjYzRkOWNiLWY2YTYtNDdjZS1hZTVkLWEyYjk1YzU1NWYxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Z2NDMjRlblRnbERiODF4cTQ0Q0Nkcnl1ekU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1NwMnRjUUNaV2J0RTRyUVl5V2VheEs1V0t3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdRRVhYWUM3IiwibWUiOnsiaWQiOiIyMzQ5MDY2MDA4NTE5OjExQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJN3VxVWtRa2FXNnVRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6Ujhkc1ZVWnNtK3F4UjNOZUpERTlDZjNucVY1ZkZVYVdIZm95dWhvUjFBPSIsImFjY291bnRTaWduYXR1cmUiOiJPLzdBRkFwUlZzVG5BQ0UwdGx6UkEyM1hoT2lWek94MHE0VnVPVlc2dk9Qc1NEbkJVQURieWtrQ1l2R1pNbVN6TXRxSHF2aWRhV3dNblJuMGhKaWlEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVWFwVnEwME9MdE9SMWxLNVdSTnJ4U1l3M0xXenpaaWtXM2dCK0dTRHh2QUozVnRqS0w3SFh0QitiRFFVTXFucjRYN1luOTFxeG95clp3YlV4eVlnQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDY2MDA4NTE5OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMwZkhiRlZHYkp2cXNVZHpYaVF4UFFuOTU2bGVYeFZHbGgzNk1yb2FFZFEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzExMDU0MzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTEovIn0="
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
