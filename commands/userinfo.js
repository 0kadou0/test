const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");


module.exports.run = async(client, message, args) =>{
    let user = message.mentions.members.first() ? message.mentions.members.first() : message.member;
    if(!user) user = message.author
    let userIcon = user.avatarURL
    const embed = new Discord.RichEmbed()
        .setDescription (`Information for ${user}`)
        .setColor (config.purple)
        .setThumbnail (userIcon)
        .addField ('User Name', `${user.user.username}`)
        .addField ('User ID',  `${user.user.id}`)
        .addField ('User Joined On', `${user.guild.joinedAt}`)
        message.channel.send(embed)

}
module.exports.help = {
    name:'userinfo'
}
