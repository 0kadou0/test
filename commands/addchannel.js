const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{
    let Permission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
    console.log(Permission)
    if(!Permission) return message.channel.send ("You do not have permission to perform this command")
    console.log(args)
    let toCreate = args[0]  
    console.log(toCreate)
    if(!toCreate) return message.channel.send('Could not detect channel name, please try again');
    let joiningChannel = message.guild.channels.find('name', toCreate)
    if(joiningChannel) return message.channel.send('That channel already exists, please try again');
    message.guild.createChannel(toCreate, 'text')
}


module.exports.help = {
    name:'addchannel'
}