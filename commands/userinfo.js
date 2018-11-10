const Discord = require('discord.js');
const config = require('../config.json');
const errors = require('../utilities/errors.js');


module.exports.run = async(client, message, args) =>{
    let user = message.mentions.members.first() ? message.mentions.members.first() : message.member;
    /*if(!user){
        let usericon = message.author.avatarURL
        const embed8 = new Discord.RichEmbed()
            .setColor (config.purple)
            .setThumbnail (usericon)
            .setDescription (`Information for ${message.author.username}`)
            .addField ('Your Name', `${message.author.username}`)
            .addField ('Your ID', `${message.author.id}`)
            .addField ('You Joined On', message.member.joinedAt)
        message.channel.send(embed8)    
    }
    else{*/
    
        let userIcon = user.avatarURL
        const embed = new Discord.RichEmbed()
            .setDescription (`Information for ${user}`)
            .setColor (config.purple)
            .setThumbnail (userIcon)
            .addField ('User Name', `${user.user.username}`)
            .addField ('User ID',  `${user.user.id}`)
            .addField ('User Joined On', `${user.guild.joinedAt}`)
        message.channel.send(embed)
    //}
}
module.exports.help = {
    name:'userinfo'
}