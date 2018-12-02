const Discord = require('discord.js');
const fs = require ('fs');
const config = require('../config.json');

//When missing permissions
module.exports.noPerms = (message, perm) =>{
    let embed = new Discord.RichEmbed()
      .setDescription ("No Perms")
      .setColor (config.blue)
      .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
      .addField ('User', `${message.author} whose ID is ${message.author.id}`)
      .addField ('Inscufficient Permissions', perm)
      .addField ('At', message.createdAt)
      message.channel.send(embed).then (m =>m.delete(50000))
}

//When specified user has permissions
module.exports.hasPerms = (message, perm) =>{
    let embed = new Discord.RichEmbed()
    .setDescription ("Cannot Perform Action")
    .setColor (config.blue)
    .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .addField ('User', `${message.mentions.members.first()} whose ID is ${message.mentions.members.first().id} has ${perm} permissions`)
    .addField ('At', message.createdAt)
    message.channel.send(embed).then (m => m.delete(50000))
}

//When no user is listed
module.exports.noUser = (message) => {
    let embed = new Discord.RichEmbed()
    .setDescription ("No User Detected")
    .setColor (config.blue)
    .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .addField ('User', `${message.author} whose ID is ${message.author.id}`)
    .addField ('User Syntax Left Blank', 'Please specify a valid user')
    .addField ('At', message.createdAt)
    message.channel.send(embed).then (m => m.delete(50000))
}

//When no time is specified
module.exports.noTime = (message) => {
    let embed = new Discord.RichEmbed()
    .setDescription ("No Time Detected")
    .setColor (config.blue)
    .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .addField ('User', `${message.author} whose ID is ${message.author.id}`)
    .addField ('Time Syntax Left Blank', 'Please specify a valid time')
    .addField ('At', message.createdAt)
    message.channel.send(embed).then (m => m.delete(50000))
}

//When role is not listed or already has role
module.exports.noRole = (message) => {
    let embed = new Discord.RichEmbed()
    .setDescription ("Role Error")
    .setColor (config.blue)
    .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .addField ('User', `${message.author} whose ID is ${message.author.id}`)
    .addField ('Role Syntax Eror', 'Role does not exist or user already has it')
    .addField ('At', message.createdAt)
    message.channel.send(embed).then (m => m.delete(50000))
}

//No admin specified
module.exports.noAdmin = (message) => {
  let embed = new Discord.RichEmbed()
    .setDescription ('Admin  not specified')
    .setColor (config.blue)
    .setAuthor ('User', `${message.author} whose ID is ${message.author.id}`)
    .addField ('Admin was not specified',`In message "${message}"`)
    .addField ('At', message.createdAt)
    message.channel.send(embed).then (m => m.delete(50000))
}

//When an error is needed for one specific command
module.exports.genError = (message, error) => {
  let embed = new Discord.RichEmbed()
    .setDescription ('Error Identified')
    .setColor (config.blue)
    .setAuthor('User', `${message.author} whose ID id ${message.author.id}`)
    .addField ('Error', error)
    .addField ('At', message.createdAt)
    message.channel.send(embed).then (m => m.delete(50000))
}


/*To go in cmd
errors.noUser(message);
errors.noPerms(message, perm);
errors.hasPerms(message,perm);
errors.noTime(message);
errors.noRole(message);
errors.noAdmin(message);
errors.genError(message, error);
*/
