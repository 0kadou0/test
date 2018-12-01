const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");
const ms = require('ms');

module.exports.run = async(client, message, args) =>{
    let rPermission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
    console.log(rPermission)
    if(!rPermission) return errors.noPerms(message, 'ADMINISTRATOR');
    let tomute = message.mentions.members.first()
    let mutechan = message.guild.channels.find('name','reports')
    if (!reportchan){}
    try{
        reportcreate = await message.guild.createChannel({
            name: 'reports',
            permissions:[]
        })}
    catch(e){
        console.log(e.stack)
    }
    if (!tomute) return errors.noUser(message);
    let tPermission = tomute.hasPermission('KICK_MEMBERS', require, true, true)
    if (tPermission) return errors.hasPerms(message, 'KICK_MEMBERS')
    let muterole = message.guild.roles.find('name', 'muted');

    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: 'muted',
                color:'0x000',
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) =>{
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                })
            })
        }catch(e){
            console.log(e.stack)
        }
    }

    let mutetime = args[1];
    if(!mutetime) return errors.noTime(message);
    await(tomute.addRole(muterole.id))

    const embed9 = new Discord.RichEmbed()
      .setDescription ("Tempmute Performed")
      .setColor (config.red)
      .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
      .addField ('Muted User', `${tomute} whose ID is ${tomute.id}`)
      .addField ('Time Muted', `${ms(ms(mutetime))}`)
      .addField ('Muted By', `${message.author} whose ID is ${message.author.id}`)
      .addField ('Muted In', message.channel)
      .addField ('Muted At', message.createdAt)
      message.delete().catch(console.error);
      mutechan.send(embed9);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        mutechan.send(`<@${tomute.id}> has been unmuted`)
    }, ms(mutetime))

}

module.exports.help = {
    name:'tempmute'
}
