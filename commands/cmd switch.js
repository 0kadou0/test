const Discord = require('discord.js');


module.exports.run = async(client, message, args) =>{
    switch(cmd){
        case('avatar'):
          message.channel.send(message.author.avatarURL);
          break;
        case('ping'):
          message.channel.send('ping');
          break;
        case('hello'):
          message.channel.send({
            files: [{
              attachment: 'C:/Users/morga/Desktop/js/test/giphy.gif',
              name: 'giphy.gif'
            }]
          })
          break;
        case('botbois'):
            message.channel.send('https://github.com/botbois');
            break;
        case('help'):
          let helpchan = message.guild.channels.find('name','help')
          const embed = new Discord.RichEmbed()
            .setColor (0x98005c)
            .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .addField('Command List', '_help >> Displays the command list\n_hello >> HELLO THERE \n_avatar >> Displays your avatar \n_botbois >> Gives you the link to the botbois github org \n_botinfo >> Display the bot information \n_serverinfo >> Display the server information\n_userinfo >> Displays information about you, the user \n_adminhelp >> displays the admin command list');
          helpchan.send(embed)
          break;
        case('newmem'):
          client.emit('guildMemberAdd', message.member);
          break;
        case('adminhelp'):
          let testhelpchan = message.guild.channels.find('name','help')
          const embed2 = new Discord.RichEmbed()
            .setColor (0x00d4fe)
            .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .addField('Admin Command List', '_adminhelp >> Displays the admin command list \n_ping >> Test the message sending \n_newmem >> Test the welcome message \n_report <@user> <reason> >> Report a user to the reports chat \n_kick <@user> <reason> >> Kick somebody from the server \n_exile <@user> <reason> >> Ban someone from the server');
          testhelpchan.send(embed2)
          break;
        case('botinfo'):
          let boticon = client.user.displayAvatarURL
          const embed3 = new Discord.RichEmbed()
            .setColor (0x00d4e)
            .setThumbnail (boticon)
            .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .setDescription (`Information for this bot, ${client.user.tag}`)
            .addField ('Bot Name', client.user.username)
            .addField ('Bot Version', config.version)
            .addField ('Created On', client.user.createdAt)
            .addField ('Command Prefix', '_') 
            message.channel.send(embed3)
            break;
        case('serverinfo'):
          let servicon = message.guild.iconURL
          const embed4 = new Discord.RichEmbed()
            .setColor (0x00d4e)
            .setThumbnail (servicon)
            .setDescription ('Information for the server, Miluk Bois'   )
            .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .addField ('Server Name', message.guild.name)
            .addField ('Created On', message.guild.createdAt)
            .addField ('You Joined On', message.member.joinedAt)
            .addField ('Total Members', message.guild.memberCount)
            message.channel.send(embed4)
          break;
        case('report'):
          let rPermission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
          console.log(rPermission)
          if(!rPermission) return message.channel.send ("You do not have permission to perform this command")
          let reportchan = message.guild.channels.find('name','reports')
          if (!reportchan) return message.channel.send ("Please create a valid reports channel")
          let rUser = message.mentions.members.first()
          if(!rUser) return message.channel.send('Could not detect user, please try again')
          console.log(rUser)
          if (rUser.user.bot) return message.channel.send ('You cannot report bots. Try again')
          let reason = args.join(' ').slice(22)
          const embed5 = new Discord.RichEmbed()
            .setDescription ("Report Submitted")
            .setColor (0xdd0b00)
            .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .addField ('Reported User', `${rUser} whose ID is ${rUser.id}`)
            .addField ('Reason Reported', reason)
            .addField ('Reported By', `${message.author} whose ID is ${message.author.id}`)
            .addField ('Reported In', message.channel)
            .addField ('Reported At', message.createdAt)
            message.delete().catch(console.error);
            reportchan.send(embed5)
          break;
        case('kick'):
          let kPermission = message.member.hasPermission('KICK_MEMBERS', require, true, false)
          console.log(kPermission)
          if(!kPermission) return message.channel.send ("You do not have permission to perform this command")
          let kickchan = message.guild.channels.find('name','reports')
          if (!kickchan) return message.channel.send ("Please create a valid reports channel")
          let kUser = message.mentions.members.first()
          console.log(kUser)
          let kPermission2 = kUser.hasPermission('KICK_MEMBERS', require, true, true)
          console.log(kPermission2)
          if(kPermission2) return message.channel.send ("You do not have permission to kick this person")
          if(!kUser) return message.channel.send('Could not detect user, please try again')
          let kreason = args.join(' ').slice(22)
          const embed6 = new Discord.RichEmbed()
            .setDescription ("Kick Performed")
            .setColor (0xdd0b00)
            .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .addField ('Kicked User', `${kUser} whose ID is ${kUser.id}`)
            .addField ('Reason Kicked', kreason)
            .addField ('Kicked By', `${message.author} whose ID is ${message.author.id}`)
            .addField ('Kicked In', message.channel)
            .addField ('Kicked At', message.createdAt)
            message.delete().catch(console.error);
            kickchan.send(embed6)
            kUser.kick(kreason)
          break;
        case('exile'):
          let ePermission = message.member.hasPermission('ADMINISTRATOR', require, true, false)
          console.log(ePermission)
          if(!ePermission) return message.channel.send ("You do not have permission to perform this command")
          let exilechan = message.guild.channels.find('name','reports')
          if (!exilechan) return message.channel.send ("Please create a valid reports channel")
          let eUser = message.mentions.members.first()
          console.log(eUser)
          let ePermission2 = eUser.hasPermission('KICK_MEMBERS', require, true, true)
          console.log(ePermission2)
          if(ePermission2) return message.channel.send ("You do not have permission to exile this person")
          if(!eUser) return message.channel.send('Could not detect user, please try again')
          let ereason = args.join(' ').slice(22)
          const embed7 = new Discord.RichEmbed()
            .setDescription ("Exile Performed")
            .setColor (0xdd0b00)
            .setAuthor (`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .addField ('Exiled User', `${eUser} whose ID is ${eUser.id}`)
            .addField ('Reason Exiled', ereason)
            .addField ('Exiled By', `${message.author} whose ID is ${message.author.id}`)
            .addField ('Exiled In', message.channel)
            .addField ('Exiled At', message.createdAt)
            message.delete().catch(console.error);
            exilechan.send(embed7)
            eUser.ban(ereason)
          break;
        case('userinfo'):
          let usericon = message.author.avatarURL
          const embed8 = new Discord.RichEmbed()
            .setColor (0x00d4e)
            .setThumbnail (usericon)
            .setDescription ('Information for you')
            .addField ('Your Name', `${message.author.username}`)
            .addField ('Your ID', `${message.author.id}`)
            .addField ('You Joined On', message.member.joinedAt)
            message.channel.send(embed8)
          break;
          
        }
}

module.exports.help = {
    name:'cmd'
}
