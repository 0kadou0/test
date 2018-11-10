const Discord = require('discord.js');
const errors = require('../utilities/errors.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) =>{
    let rPermission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
    console.log(rPermission)
    if(!rPermission) return errors.noPerms(message, 'ADMINISTRATOR');
    let reportchan = message.guild.channels.find('name','reports')
    if (!reportchan){}
        try{
            reportcreate = await message.guild.createChannel({
                name: 'reports'//,
                //permissions:[]
            })}
        catch(e){
            console.log(e.stack)
        }
        
    let rUser = message.mentions.members.first()
    if(!rUser) return errors.noUser(message)
    console.log(rUser)
    let kPermission2 = rUser.hasPermission('KICK_MEMBERS', require, true, true)
    console.log(kPermission2)
    if(kPermission2) return errors.hasPerms(message, 'KICK_MEMBERS')
    if (rUser.user.bot) return message.channel.send ('You cannot report bots. Try again')
    let reason = args.join(' ').slice(22)
    const embed5 = new Discord.RichEmbed()
      .setDescription ("Report Submitted")
      .setColor (config.red)
      .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
      .addField ('Reported User', `${rUser} whose ID is ${rUser.id}`)
      .addField ('Reason Reported', reason)
      .addField ('Reported By', `${message.author} whose ID is ${message.author.id}`)
      .addField ('Reported In', message.channel)
      .addField ('Reported At', message.createdAt)
      message.delete().catch(console.error);
      reportchan.send(embed5)
}

module.exports.help = {
    name:'report'
}