module.exports = {
    name: 'voor',
    description: 'Bravo voor',
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        message.channel.send(`DIKKE VO VOOR ${taggedUser.username}, BRAVO!`);
    },
};