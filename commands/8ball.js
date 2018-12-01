const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");

module.exports.run = async(client, message, args) =>{
    if(!args[1]) return message.channel.send('Please disclose a full question');
    let replies = ['Yes', 'No', 'It is certain', 'Ask again later', 'Probably', 'Probably Not', 'It is impossible'];
    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
      .setDescription ("8ball Performed")
      .setColor (config.orange)
      .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
      .addField ('BallUser', `${message.author} whose ID is ${message.author.id}`)
      .addField ('Answer ', replies[result])
      .addField (' In', message.channel)
      .addField ('At', message.createdAt);
      message.channel.send(embed)
}

module.exports.help = {
    name:'8ball'
}
