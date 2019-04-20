const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Een lijst met commands waartoe de glorieuze VObot allemaal toe in staat is',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Hier is een lijst met alle commands waartoe ik, de Prominent Lid VObot, allemaal toe in staat is. VO!');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

//            return message.author.send(data, { split: true })
             return message.channel.send(data, { split: true })
//                 .then(() => {
//                     if (message.channel.type === 'dm') return;
//                     message.reply('Beste Feut, ik heb je maar even een notie gestuurd want het schijnt dat je er weer niks van bakt. Schaam je. Heel snel hobbelen!');
//                 })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you!');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
    },
};