const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready')
});

// client.on('message', message => {
//     // logt elk getypt bericht in Discord naar de terminal in PHPStorm
//     console.log(message.content);
// })

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content.startsWith(`${prefix}kak`)) {
        message.channel.send("VO VOOR DE LEDEN")
    }
    // using the new `command` variable, this makes it easier to manage!
    // you can switch your other commands to this format as well
    else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }

});

client.login(token);
