const Discord = require('discord.js');
const config = require(rootDir + "config.json");
const errors = require(rootDir + "utilities/errors.js");
//const res = require(rootDir + "resources");


module.exports.run = async(client, message, args) =>{
  let chan = message.member.voiceChannel;
  if(!chan) return errors.genError(message, 'Not in a voice channel')
  let toPlay = args[0]
  switch(toPlay){
    case ('MEGALOVANIA'):
      chan.join().then(connection =>{const dispatcher = connection.playFile(rootDir + 'resources/MEGALOVANIA.mp3')}).catch(err => console.log(err));
      dispatcher.on("end", end => {voiceChannel.leave()});
      break;
  }
}

module.exports.help = {
    name:'play'
}
