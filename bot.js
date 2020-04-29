// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const guildID = '509509779761397798';
// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./auth.json");
require('http').createServer().listen(3000);
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving X3MIS`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});
client.on("channelDelete", channel => {
 if(channel.guild.id !== guildID) return;
let channelStat = client.channels.get("561042915011592222");  
let testChannel = client.channels.get("697069936501063760");
let channelCount = channel.guild.channels.size;
channelStat.setName(`Channels: ${channelCount}`);
//testChannel.channel.send(channelStat); 
});
client.on("channelCreate", channel => {
  if(channel.guild.id !== guildID) return;
let channelStat = client.channels.get("561042915011592222");  
let testChannel = client.channels.get("697069936501063760");
let channelCount = channel.guild.channels.size;
channelStat.setName(`Channels: ${channelCount}`);
//testChannel.channel.send(channelStat);
});
client.on("guildMemberAdd", member => {
 if(member.guild.id !== guildID) return;
let memberStat = client.channels.get("561044806919520256");
let testChannel = client.channels.get("697069936501063760");
let memberCount = member.guild.members.filter(member => !member.user.bot).size;
memberStat.setName(`Users: ${memberCount}`);
//testChannel.channel.send(memberStat); 
});
client.on("guildMemberRemove", member => {
 if(member.guild.id !== guildID) return;
let memberStat = client.channels.get("561044806919520256");
let testChannel = client.channels.get("697069936501063760");
let memberCount = member.guild.members.filter(member => !member.user.bot).size;
memberStat.setName(`Users: ${memberCount}`);
//testChannel.channel.send(memberStat); 
});
client.on("roleDelete", role => {
if(role.guild.id !== guildID) return;
let roleStat = client.channels.get("561042914302754838");
let testChannel = client.channels.get("697069936501063760");
let roleCount = role.guild.roles.size;
roleStat.setName(`Roles: ${roleCount}`);
//testChannel.channel.send(roleStat); 
});
client.on("roleCreate", role => {
 if(role.guild.id !== guildID) return;
let roleStat = client.channels.get("561042914302754838");
let testChannel = client.channels.get("697069936501063760");
let roleCount = role.guild.roles.size;
roleStat.setName(`Roles: ${roleCount}`);
//testChannel.channel.send(roleStat); 
});

/*function updateChannelStat(){
if(channel.guild.id !== guildID) return;
let channelStat = client.channels.get("561042915011592222");  
let testChannel = client.channels.get("697069936501063760");
let channelCount = channel.guild.channels.size;
channelStat.setName(`Channels: ${channelCount}`);
//testChannel.channel.send(channelStat);
}
function updateMemberStat(){
if(member.guild.id !== guildID) return;
let memberStat = client.channels.get("561044806919520256");
let testChannel = client.channels.get("697069936501063760");
let memberCount = member.guild.members.filter(member => !member.user.bot).size;
memberStat.setName(`Channels: test`);
//testChannel.channel.send(memberStat);
}
function updateRoleStat(){
if(role.guild.id !== guildID) return;
let roleStat = client.channels.get("561042914302754838");
let testChannel = client.channels.get("697069936501063760");
let roleCount = role.guild.roles.size;
roleStat.setName(`Channels: ${roleCount}`);
//testChannel.channel.send(roleStat);
}*/
client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 /* if(command === "stats"){
message.delete().catch(O_o=>{});
let channelStat = client.channels.get("561042915011592222");
let memberStat = client.channels.get("561044806919520256");
let roleStat = client.channels.get("561042914302754838");
let channelCount = message.guild.channels.size;
let memberCount = message.guild.members.filter(member => !member.user.bot).size;
let roleCount = message.guild.roles.size;
memberStat.setName(`Channels: ${memberCount}`);
roleStat.setName(`Channels: ${roleCount}`);
channelStat.setName(`Channels: ${channelCount}`);
message.channel.send("updated stats!");
}*/
  // Let's go with a few common example commands! Feel free to delete or change those.
  if(command === "list") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send("command list:\n X:list (commands) \n X:say <msg> \n X:hug <target> \n X:snuggle <target> \n X:cuddle <target> \n X:wave <target> \n X:cheer <target> \n X:laugh <target> \n X:elist list elder commands (elder) \n" );
  }
  if(command === "elist") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send("command list:\n X:announce <msg> \n X:event <msg> \n X:strike <user> <strike number> \n" );
  }
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  message.channel.send(message.author + " *says* \"" + sayMessage + "\"");
  }
   if(command === "hug") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  message.channel.send(message.author + " *hugs* " + args[0]);
  }
     if(command === "snuggle") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  message.channel.send(message.author + " *snuggles* " + args[0]);
  }
     if(command === "cuddle") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  message.channel.send(message.author + " *cuddles* " + args[0]);
  }
     if(command === "wave") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  message.channel.send(message.author + " *waves to* " + args[0]);
  }
     if(command === "cheer") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  message.channel.send(message.author + " *cheers at* " + args[0]);
  }
       if(command === "laugh") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  message.channel.send(message.author + " *laughs at* " + args[0]);
  }
  if(command === "announce") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
      if(!message.member.roles.some(r=>["Alpha","Elder"].includes(r.name)) )
      return message.reply("Access denied!");
    // And we get the bot to say the thing: 	  
    message.channel.send(`<@&${message.guild.roles.find(role => role.name === "Notifications").id}> ` + '**' + sayMessage + '**');
  }
  if(command === "event") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayEmessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
      if(!message.member.roles.some(r=>["Alpha","Elder"].includes(r.name)) )
      return message.reply("Access denied!");
    // And we get the bot to say the thing: 	  
    message.channel.send(`<@&${message.guild.roles.find(role => role.name === "Events").id}> ` + '**' + sayEmessage + '**');
  }	
  
  if(command === "purge") {
	  message.delete().catch(O_o=>{});
	  if(!message.member.roles.some(r=>["Alpha","Elder"].includes(r.name)) )
      return message.reply("Access denied!");
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
	
 if(command === "strike"){
      message.delete().catch(O_o=>{});
      if(message.member.roles.some(r=>["Administrator","Alpha","Elder"].includes(r.name))){
      var target = message.mentions.members.first() || message.guild.members.get(args[0]);
      //let target=args[o];
      let strike = args[1];
      	switch(strike) {
      		case '1':
      			let role = message.guild.roles.find('name', 'X');
      			//message.channel.send("hi");
      			//message.channel.send(target + ' ' + srole + ' ' + role + ' ' + reason);  
     		 	target.setRoles([role.id])
	      		.then(message.channel.send(target + ' you have been given your first strike!'))
	      		.catch(console.error);
    		break;
   		case '2':
      			let role2 = message.guild.roles.find('name', 'X X');
      			//message.channel.send("hi");
     		 	//message.channel.send(target + ' ' + srole + ' ' + role + ' ' + reason);  
      			target.setRoles([role2.id])
	      		.then(message.channel.send(target + ' you have been given your second strike!'))
	      		.catch(console.error);
    		break;
    		case '3':
      			let role3 = message.guild.roles.find('name', 'X X X');
      			//message.channel.send("hi");
      			//message.channel.send(target + ' ' + srole + ' ' + role + ' ' + reason);  
      			target.setRoles([role3.id])
	      		.then(message.channel.send(target + ' you have been given your third strike!'))
	      		.catch(console.error);
			await target.ban()
      			.catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    			message.reply(`${target.user.tag} has been banned because they gained 3 strikes!`);
    		break;
  		default:
    			return false;
      	}	
      }
      else{
	message.reply("Access Denied!");      
      }
  }
  if(command === "reboot"){
	  message.delete().catch(O_o=>{});
	  if(!message.member.roles.some(r=>["Administrator","Alpha"].includes(r.name)) )
      return message.reply("Access denied!");
	  resetBot(message.channel);
  }
  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Rebooting...')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
}
});
client.login(process.env.BOT_TOKEN);
