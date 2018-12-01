const Discord = require('discord.js');
const errors = require('../utilities/errors.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) =>{
  let embed = new Discord.RichEmbed()
    .setColor (config.orange)
    .setDescription ('ping')
  message.channel.send(embed)
}

module.exports.help = {
    name:'ping'
}
