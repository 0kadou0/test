const Discord = require('discord.js');
const errors = require('../utilities/errors.js');
const config = require('../config.json');
const ms = require('ms');


module.exports.run = async(client, message, args) =>{
    let tUser = message.mentions.members.first()
    let time = args[1];
    if(!time) return errors.noTime(message);


    setTimeout(function(){
    message.channel.send(`<@${tUser.id}>, The specified time (${time}) has passed. `)
    }, ms(time))
}
module.exports.help = {
    name:'timerset'
}