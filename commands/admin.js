const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");

module.exports.run = async(client, message, args) =>{
  let user = message.mentions.members.first()
  if(!user) return errors.noUser(message)
  console.log(user)
  let permission = user.hasPermission('ADMINISTRATOR', require, true, true)
  console.log(permission)
  if(!permission) return errors.noAdmin(message)
  let reason = args.join(' ').slice(22)
  let chan = message.guild.channels.find('name','requests')
  if (!chan){}
      try{
          create = await message.guild.createChannel({
              name: 'requests'
            })}
      catch(e){
          console.log(e.stack)
      }
  let embed = new Discord.RichEmbed()
    .setDescription ("Admin Help Submitted")
    .setColor (config.purple)
    .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .addField ('Admin Requested', `${user} whose ID is ${user.id}`)
    .addField ('Requested By', `${message.author} whose ID is ${message.author.id}`)
    .addField ('Reason Requested', reason)
    .addField ('Requested In', message.channel)
    .addField ('Requested At', message.createdAt)
    chan.send(embed)
    message.delete().catch(console.error);
}


module.exports.help = {
    name:'request'
}
