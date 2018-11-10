const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) =>{
    console.log(client.commandss)
    let helpchan = message.guild.channels.find('name','help')
          const embed = new Discord.RichEmbed()
            .setColor (config.blue)
            .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .addField(
                'Command List', '_help >> Displays the command list \n_avatar >> Displays your avatar \n_botbois >> Gives you the link to the botbois github org \n_botinfo >> Display the bot information \n_serverinfo >> Display the server information\n_userinfo <user> >> Displays information about a user (including you) \n_8ball <question> >> Get a random answer to a question \n_say <text> >> Have the bot say something \n_adminhelp >> Displays the admin command list');
          helpchan.send(embed)
}

module.exports.help = {
    name:'help'
    //desc: "Why are you viewing the help command using help"
}