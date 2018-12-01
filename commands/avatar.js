const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");

module.exports.run = async(client, message, args) =>{
    message.channel.send(message.author.avatarURL);
}

module.exports.help = {
    name:'avatar'
}
