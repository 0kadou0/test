const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{
    let rolePermission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
    console.log(rolePermission)
    if(!rolePermission) return message.channel.send ("You do not have permission to perform this command")
    let newMember = message.mentions.members.first()
    console.log(newMember)
    if(!newMember) return message.channel.send('Could not detect user, please try again')
    let toJoin = args.join(' ').slice(22);
    if(!toJoin) return message.channel.send('Could not detect role, please try again');
    let joiningRole = message.guild.roles.find('name', toJoin)
    if(!joiningRole) return message.channel.send('That role does not exist, please try again');

    if(newMember.roles.has(joiningRole.id));
    await(newMember.addRole(joiningRole.id));

    
}


module.exports.help = {
    name:'addrole'
}