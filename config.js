//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923119175659";
global.owner = process.env.OWNER_NUMBER || "923119175659";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "SUHAIL_10_05_08_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdkcG05dDQ5TG1JcjdrVE9wd0pHbU1jSDgxU2ZnWS9yNHoxWW8zd25TRmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzQ4ODY5MDE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MDhBNEVCNEY5QkU5M0NCNUNBMkZDQ0NFQkE1MDY1QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjQzMjExNTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2l6THZmMDhTc0tpUnhvb1RqdkUyd1wiLFxuICBcInBob25lSWRcIjogXCJiMjdmZWMzYS1mNzY0LTQ4ZTUtOGUyZS0xYzBmYWQ5ODFiZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgODEsXG4gICAgICAxNDUsXG4gICAgICA5OSxcbiAgICAgIDE3NixcbiAgICAgIDY3LFxuICAgICAgMTE1LFxuICAgICAgNjEsXG4gICAgICAxOTEsXG4gICAgICAxMTgsXG4gICAgICAxMDAsXG4gICAgICAyNDAsXG4gICAgICAxOTQsXG4gICAgICA0MCxcbiAgICAgIDg4LFxuICAgICAgMjUzLFxuICAgICAgMjgsXG4gICAgICAxOTksXG4gICAgICAyMDksXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgOTIsXG4gICAgICA0NSxcbiAgICAgIDI0OSxcbiAgICAgIDI0NCxcbiAgICAgIDExLFxuICAgICAgOSxcbiAgICAgIDE1NixcbiAgICAgIDE0NCxcbiAgICAgIDE4NSxcbiAgICAgIDQ5LFxuICAgICAgNjgsXG4gICAgICAyNDYsXG4gICAgICA0NCxcbiAgICAgIDI0MyxcbiAgICAgIDI0MyxcbiAgICAgIDU2LFxuICAgICAgMjUyLFxuICAgICAgMjM1LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJDQlE2MVhXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDg4NjkwMTU6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGQVhJIFRFQ0hcIixcbiAgICBcImxpZFwiOiBcIjY1MjI4MDg3ODEyMTU3OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TWnpKNEdFUGFhbkxZR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnNtMGVNSTZWVVZXTUdLcWlCMVlZRUluTFFhVkFqZzZNU2k0VWJPOGpuZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxeG95MGRXZWlHQ01zL2ZYTzh0T3ZYUnR0aGxUWGM0VXdYb1Bqdzlrb0hsR2ZwWE4yazk3Vm1tUENIVjdQSkRKbUlQT2txLzNRcVlYd2djZ3VpejVCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCdzZJQ3NpMGNCNVFNYk8zcHhOdEV4WGRaWTFPUEs1THVJRjJXUTBNLys5RDB3N1JUNks1R2w4ZTJRMWc3U0VuOVdjV1ZRVm9QQjdhcDRMaFc3cXpEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNDg4NjkwMTU6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDMyMTE0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBEc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUERzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTVlBdjAzb1lVV3huakJSSXJlbUU5czc3OHdybUdSR2ZPK2Y2dzd5dStOYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjc0Nzc1NzQ4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzODQ4MTkwNDhcIn0iCn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "mr-faci",
  ownername: process.env.OWNER_NAME || "FAXI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
