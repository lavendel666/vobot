module.exports = {
    name: 'ronswanson',
    description: 'Spreuken van de enige Lid waardige Amerikaan',
    async execute(message, args) {

        const response = await fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        // note that in body nu de hele JSON zit, als je een specific item wilt showen gebruik body.json_name
        const body = await response.json();

        message.channel.send(body);

    },
};
