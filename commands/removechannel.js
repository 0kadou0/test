const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");

module.exports.run = async(client, message, args) =>{
    let Permission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
    console.log(Permission)
    if(!Permission) return errors.noPerms(message, 'ADMINISTRATOR');
    console.log(args)
    let toRemove = args[0]
    console.log(toRemove)
    if(!toRemove) return message.channel.send('Could not detect channel name, please try again');
    let removingChannel = message.guild.channels.find('name', toRemove)
    if(!removingChannel) return message.channel.send('That channel does not exist, please try again');
    message.guild.channels.find('name', toRemove).delete
}


module.exports.help = {
    name:'removechannel'
}
