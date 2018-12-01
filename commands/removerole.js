const Discord = require('discord.js');
const errors = require('../utilities/errors.js');

module.exports.run = async(client, message, args) =>{
    let rolePermission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
    console.log(rolePermission)
    if(!rolePermission) return errors.noPerms(message, 'ADMINISTRATOR');
    let newMember = message.mentions.members.first()
    console.log(newMember)
    if(!newMember) return errors.noUser(message)
    let toJoin = args.join(' ').slice(22);
    if(!toJoin) return errors.noRole(message);
    let joiningRole = message.guild.roles.find('name', toJoin)
    if(!joiningRole) return errors.noRole(message);

    if(!newMember.roles.has(joiningRole.id)) return message.channel.send('User does not have specified role');
    await(newMember.removeRole(joiningRole.id));

}

module.exports.help = {
    name:'removerole'
}
