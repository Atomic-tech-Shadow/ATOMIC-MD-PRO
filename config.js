const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG:process.env .ALIVE_IMG ||""
    ALIVE_MSG:process.env .ALIVE_MSG ||"〠𝙚𝙝 𝙗𝙧𝙤 𝙟'𝙨𝙪𝙞𝙨 𝙥𝙖𝙨 𝙚𝙣𝙘𝙤𝙧𝙚 𝙘𝙧𝙚𝙫𝙚𝙧 🥸💁〠"
};
