const Discord = require('discord.js')
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
  let chan = message.guild.channels.find('name', 'meeting-suggestions')
  if (!chan){}
      try{
          create = await message.guild.createChannel({
              name: 'meeting-suggestions'
              //permissions:[]
          })}
      catch(e){
          console.log(e.stack)
      }
  let embed = new Discord.RichEmbed()
    .setDescription ("Suggestion Submitted")
    .setColor (config.purple)
    .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .addField ('Submitted To', `${user} whose ID is ${user.id}`)
    .addField ('Submitted By', `${message.author} whose ID is ${message.author.id}`)
    .addField ('What was Submitted', reason)
    .addField ('Submitted In', message.channel)
    .addField ('Submitted At', message.createdAt)
  message.delete().catch(console.error);
  reportchan.send(embed5)

}


module.exports.help = {
    name:'suggestion'
}
