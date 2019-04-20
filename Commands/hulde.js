module.exports = {
    name: 'hulde',
    description: 'testing mentioning',
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Godsgruwelijke dikke hulde beste ${taggedUser.username}`);
    },
};