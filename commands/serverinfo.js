const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) =>{
    let servicon = message.guild.iconURL
    const embed4 = new Discord.RichEmbed()
      .setColor (config.purple)
      .setThumbnail (servicon)
      .setDescription ('Information for the server, Kiri Kiri Basara'   )
      .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
      .addField ('Server Name', message.guild.name)
      .addField ('Created On', message.guild.createdAt)
      .addField ('You Joined On', message.member.joinedAt)
      .addField ('Total Members', message.guild.memberCount)
      message.channel.send(embed4)
}

module.exports.help = {
    name:'serverinfo'
}