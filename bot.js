var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `vo`
    if (message.substring(0, 3) == 'vo ') {
        var args = message.substring(3).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;

            // test 
            case 'vo':
                bot.sendMessage({
                    to: channelID,
                    message: 'VO VOOR DE LEDEN, VO VOOR DE PRAESES!!!'
                });
                break;

            // user mention test
            case 'test':
                // grab the "first" mentioned user from the message
                // this will return a `User` object, just like `message.author`

                const taggedUser = message.mentions.users.first();
                //message.channel.send(`You wanted to kick: ${taggedUser.username}`);
                bot.sendMessage(
                    {
                        to: channelID,
                        message: "You wanted to kick:" + taggedUser.username
                    }
                );

                break;
        }
    }
});
