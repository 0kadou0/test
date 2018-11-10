const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{
    message.channel.send('ping');
}

module.exports.help = {
    name:'ping'
}