const Discord = require('discord.js');
const errors = require('../utilities/errors.js');

module.exports.run = async(client, message, args) =>{
    let rolePermission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
    console.log(rolePermission)
    if(!rolePermission) return errors.noPerms(message, 'ADMINISTRATOR');
    let newMember = message.mentions.members.first()
    console.log(newMember)
    if(!newMember) return message.channel.send('Could not detect user, please try again')
    let toJoin = args.join(' ').slice(22);
    if(!toJoin) return message.channel.send('Could not detect role, please try again');
    let joiningRole = message.guild.roles.find('name', toJoin)
    if(!joiningRole) return message.channel.send('That role does not exist, please try again');

    if(!newMember.roles.has(joiningRole.id)) return message.channel.send('User does not have specified role');
    await(newMember.removeRole(joiningRole.id));
    
}

module.exports.help = {
    name:'removerole'
}