const Discord = require('discord.js');
const errors = require('../utilities/errors.js');
const config = require('../config.json');
const ms = require('ms');


module.exports.run = async(client, message, args) =>{
    let tUser = message.mentions.members.first()
    let time = args[1];
    let reason = args[3];
    if(!time) return errors.noTime(message);


    setTimeout(function(){
      let embed = new Discord.RichEmbed()
        .setColor (config.orange)
        .addField ('Timer Performed' `${tUser.id}, The specified time (${time}) has passed. `)
        .addField ('Reason Timer Set', `${reason} was listed.`)
      message.channel.send(embed)
    }, ms(time))
}

module.exports.help = {
    name:'timerset'
}
