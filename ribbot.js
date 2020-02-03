// require the discord.js module
const Discord = require('discord.js');
/*destructuring to extract prefix variables*/
const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login(token);

client.on('message', message => {
    if(message.content ==='wassap')
    message.channel.send('not much');
	console.log(message.content);
});