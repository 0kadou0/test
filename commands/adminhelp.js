const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");

module.exports.run = async(client, message, args) =>{
    let testhelpchan = message.guild.channels.find('name','help')
    const embed2 = new Discord.RichEmbed()
      .setColor (config.blue)
      .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
      .addField('Admin Command List', '_adminhelp >> Displays the admin command list \n_ping >> Test the message sending \n_newmem >> Test the welcome message \n_report <@user> <reason> >> Report a user to the reports chat \n_kick <@user> <reason> >> Kick somebody from the server \n_exile <@user> <reason> >> Ban someone from the server \n_addchannel <channel name> >> Add a channel to the server \n_addrole <user> <role> >> Add a role to a user \n_clear <number up to 100> >> Clear messages from a channel \n_removerole <user> <role> >> Remove a role from a user \n_tempmute <user> <time> >> Temporarily mute someone from sending messages');
    testhelpchan.send(embed2)
}

module.exports.help = {
    name:'adminhelp'
}
