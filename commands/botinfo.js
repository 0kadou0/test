const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) =>{
    let boticon = client.user.displayAvatarURL
          const embed3 = new Discord.RichEmbed()
            .setColor (config.purple)
            .setThumbnail (boticon)
            .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .setDescription (`Information for this bot, ${client.user.tag}`)
            .addField ('Bot Name', client.user.username)
            .addField ('Bot Version', config.version)
            .addField ('Created On', client.user.createdAt)
            .addField ('Command Prefix', '_') 
            message.channel.send(embed3)
}

module.exports.help = {
    name:'botinfo'
}