const fs = require('fs');
const fetch = require('node-fetch');
//require('es6-promise').polyfill();
//require('isomorphic-fetch');
const Discord = require('discord.js');
const {prefix, token, giphyToken} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

var GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(giphyToken);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

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

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }

    }
);

client.login(token);
