module.exports = {
    name: 'hond',
    description: 'Laat een verse hond zien',
    async execute(message, args) {

//        const fetch = require('node-fetch');
        // another option since it is file that comes from the api GET
        // const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        // note that in body nu de hele JSON zit, als je een specific item wilt showen gebruik body.json_name
        const body = await response.json();

        message.channel.send(body.message);

    },
};
