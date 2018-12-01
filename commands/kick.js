const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");

module.exports.run = async(client, message, args) =>{
    let kPermission = message.member.hasPermission('KICK_MEMBERS', require, true, false)
    console.log(kPermission)
    if(!kPermission) return errors.noPerms(message, 'ADMINISTRATOR');
    let kickchan = message.guild.channels.find('name','reports')
    if (!reportchan){}
        try{
            reportcreate = await message.guild.createChannel({
                name: 'reports'//,
                //permissions:[]
            })}
        catch(e){
            console.log(e.stack)
        }
    let kreason = args.join(' ').slice(22)
    console.log(kreason)
    let kUser = message.mentions.members.first()
    console.log(kUser)
    if(!kUser) return errors.noUser(message)
    let kPermission2 = kUser.hasPermission('KICK_MEMBERS', require, true, true)
    console.log(kPermission2)
    if(kPermission2) return errors.hasPerms(message, 'KICK_MEMBERS')

    const embed6 = new Discord.RichEmbed()
      .setDescription ("Kick Performed")
      .setColor (config.red)
      .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
      .addField ('Kicked User', `${kUser} whose ID is ${kUser.id}`)
      .addField ('Reason Kicked', kreason)
      .addField ('Kicked By', `${message.author} whose ID is ${message.author.id}`)
      .addField ('Kicked In', message.channel)
      .addField ('Kicked At', message.createdAt)
      message.delete().catch(console.error);
      kickchan.send(embed6)
      kUser.kick(kreason)
}

module.exports.help = {
    name:'kick'
}
