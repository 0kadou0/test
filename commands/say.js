const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) =>{
    let Permission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
    console.log(Permission)
    if(!Permission) return message.channel.send ("You do not have permission to perform this command")
    const oofembed = new Discord.RichEmbed()
        .setColor (config.black)
        .addField ('OOF', 'oof')
    if(!args[0]) return message.channel.send(oofembed)
    let botmsg = args.join(' ');message.delete().catch();
    const embed = new Discord.RichEmbed()
      .setColor (config.orange)
      .setDescription (botmsg);
    message.delete().catch(console.error);
    message.channel.send(embed)
}

module.exports.help = {
    name:'say'
}