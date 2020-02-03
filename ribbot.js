// require the discord.js module
const Discord = require('discord.js');
/* destructuring to extract prefix variables */
const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();
// login to Discord with your app's token
client.login(token);

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
        console.log('Ready!');
});

client.on('message', message => {
        if (message.content.startsWith(`${prefix}hello`) || message.content.startsWith(`${prefix}hi`)) {
                message.channel.send('hi!!');
        } else if (message.content.startsWith(`${prefix}bye`) || message.content.startsWith(`${prefix}goodbye`)) {
                message.channel.send('bye bye');
        }
});
