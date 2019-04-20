module.exports = {
    name: 'bier',
    description: 'Bierrrr!',
    execute(message, args) {

        giphy.search('gifs', {"q": "beer"})
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