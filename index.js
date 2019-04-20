const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready')
})

// client.on('message', message => {
//     // logt elk getypt bericht in Discord naar de terminal in PHPStorm
//     console.log(message.content);
// })

client.on('message', message => {
    if(message.content.startsWith(`${prefix}test`)){
        message.channel.send("TESTEST")
    }
})

client.login(token);