const Discord = require('discord.js');
const errors = require('../utilities/errors.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) =>{
    let ePermission = message.member.hasPermission('ADMINISTRATOR', require, true, true)
    console.log(ePermission)
    if(!ePermission) return errors.noPerms(message, 'ADMINISTRATOR');
    let exilechan = message.guild.channels.find('name','reports')
    if (!exilechan) return message.channel.send ("Please create a valid reports channel")
    let eUser = message.mentions.members.first()
    console.log(eUser)
    let ePermission2 = eUser.hasPermission('ADMINISTRATOR', require, true, true)
    console.log(ePermission2)
    if(ePermission2) return errors.hasPerms(message, 'ADMINISTRATOR')
    if(!eUser) return errors.noUser(message)
    let ereason = args.join(' ').slice(22)
    const embed7 = new Discord.RichEmbed()
      .setDescription ("Exile Performed")
      .setColor (config.red)
      .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
      .addField ('Exiled User', `${eUser} whose ID is ${eUser.id}`)
      .addField ('Reason Exiled', ereason)
      .addField ('Exiled By', `${message.author} whose ID is ${message.author.id}`)
      .addField ('Exiled In', message.channel)
      .addField ('Exiled At', message.createdAt)
      message.delete().catch(console.error);
      exilechan.send(embed7)
      eUser.ban(ereason)
}

module.exports.help = {
    name:'exile'
}