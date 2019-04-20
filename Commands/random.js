module.exports = {
    name: 'random',
    description: 'Random GIF',
    execute(message, args) {

        giphy.random()
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() *10) + 1) % totalResponses;
                var responseFinal = response.data[responseIndex];

                message.channel.send('Tijd voor bier!', {
                    files: [responseFinal.images.fixed_height.url]
                });

            })

    },
};