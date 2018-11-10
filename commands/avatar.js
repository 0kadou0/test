const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{
    message.channel.send(message.author.avatarURL);
}

module.exports.help = {
    name:'avatar'
}