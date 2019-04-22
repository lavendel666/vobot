module.exports = {
    name: 'poes',
    description: 'Laat een random poes foto zien',
    execute(message, args) {
        // const {body} = await fetch('https://aws.random.cat/meow').then(response => response.json());
        // message.channel.send(body.file);
        const fetch = require('node-fetch');

        async function fetchCat() {
            const {body} = await fetch('https://aws.random.cat/meow')
                .then(response => {
                    return response.json();
                });
            return body.file;
        }

        try {
            var poez = fetchCat();
        } catch (e) {
            console.log('kut');
        }

        message.channel.send(poez);
    },
};


module.exports = {
    name: 'poes',
    description: 'Laat een random poes foto zien',
    async execute(message, args) {

            const fetch = require('node-fetch');
            const {body} = await fetch('https://aws.random.cat/meow').then(response => response.json());

            message.channel.send(body.file);

    },
};
