const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");

module.exports.run = async(client, message, args) =>{
  let embed = new Discord.RichEmbed()
    .setColor (config.orange)
    .setDescription ('ping')
  message.channel.send(embed)
}

module.exports.help = {
    name:'ping'
}
