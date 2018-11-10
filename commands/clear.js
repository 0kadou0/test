const Discord = require('discord.js');
const errors = require('../utilities/errors.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) =>{
    let Permission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
    console.log(Permission)
    if(!Permission) return errors.noPerms(message, 'ADMINISTRATOR');
    if(!args[0]) return message.channel.send('oof')
    message.channel.bulkDelete(args[0]).then (() =>{
        const embed = new Discord.RichEmbed()
      .setDescription ("Clear Performed")
      .setColor (config.blue)
      .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
      .addField ('Cleared By', `${message.author} whose ID is ${message.author.id}`)
      .addField ('Amount Cleared', `${args[0]} message(s)`)
      .addField ('Cleared In', message.channel)
      .addField ('Cleared At', message.createdAt)
      message.delete().catch(console.error);
      message.channel.send(embed).then(msg => msg.delete(50000));
    })
}

module.exports.help = {
    name:'clear'
}