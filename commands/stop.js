const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");
//const res = require(rootDir + "resources");


module.exports.run = async(client, message, args) =>{
  let chan = message.member.voiceChannel;
  if(!chan) return errors.genError(message, 'Not in a voice channel')
  chan.leave()
}


module.exports.help = {
    name:'stop'
}
