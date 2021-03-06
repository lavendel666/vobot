module.exports = {
    name: 'poes',
    description: 'Laat een mooie poes zien',
    async execute(message, args) {

//        const fetch = require('node-fetch');
        // another option since it is file that comes from the api GET
        // const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

        const response = await fetch('https://aws.random.cat/meow');
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        // note that in body nu de hele JSON zit, als je een specific item wilt showen gebruik body.json_name
        const body = await response.json();

        message.channel.send(body);

    },
};
