module.exports = {
    name: 'surf',
    description: 'surfing forecast',
    async execute(message, args) {

        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasatoken}`);
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        // note that in body nu de hele JSON zit, als je een specific item wilt showen gebruik body.json_name
        const body = await response.json();

        message.channel.send(body.url);

    },
};