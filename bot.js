// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./auth.json");
require('http').createServer().listen(3000)
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
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


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
    message.channel.send("command list:\n X:announce <msg> \n X:kick <user> <reason> \n X:ban <user> <reason> \n X:setrole <user> <d/p/o/b/x> \n" );
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
      if(!message.member.roles.some(r=>["Administrator", "Moderator","Alpha","Elder"].includes(r.name)) )
      return message.reply("Access denied!");
    // And we get the bot to say the thing: 
    message.channel.send("@everyone " + sayMessage);
  }
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    message.delete().catch(O_o=>{}); 
	if(!message.member.roles.some(r=>["Administrator", "Moderator","Alpha"].includes(r.name)) )
      return message.reply("Access denied!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    
  }
  
  if(command === "ban") {
	  message.delete().catch(O_o=>{}); 
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator","Alpha"].includes(r.name)) )
      return message.reply("Access denied!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
	  message.delete().catch(O_o=>{});
	  if(!message.member.roles.some(r=>["Administrator","Alpha","Elder"].includes(r.name)) )
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
  if(command === "setrole"){
      message.delete().catch(O_o=>{});
      if(!message.member.roles.some(r=>["Administrator","Alpha","Elder"].includes(r.name)) )
      return message.reply("Access denied!");
      let target = message.mentions.members.first();
      let srole = args.slice(1).join(' ');
      message.channel.send(srole);
      switch(srole) {
	  case d:
	    message.channel.send("entered case d");	      
	    target.addRole([message.guild.roles.find(role => role.name === Descendant)]).catch(error => message.reply(`Couldn't set role because of error: ${error}`));
            message.channel.send(target + ' your role has been changed to Descendant').catch(error => message.reply(`Couldn't delete messages because of: ${error}`));      
          break;
          case p:
	    message.channel.send("entered case p");
	    target.addRole([message.guild.roles.find(role => role.name === Pup)]).catch(error => message.reply(`Couldn't set role because of error: ${error}`));
            message.channel.send(target + ' your role has been changed to Pup').catch(error => message.reply(`Couldn't delete messages because of: ${error}`));   	      
          break;
	  case o:
	    message.channel.send("entered case o");
	    target.addRole([message.guild.roles.find(role => role.name === Omega)]).catch(error => message.reply(`Couldn't set role because of error: ${error}`));
            message.channel.send(target + ' your role has been changed to Omega').catch(error => message.reply(`Couldn't delete messages because of: ${error}`));         
          break;
	  case b:
            message.channel.send("entered case b");
	    target.addRole([message.guild.roles.find(role => role.name === Beta)]).catch(error => message.reply(`Couldn't set role because of error: ${error}`));
            message.channel.send(target + ' your role has been changed to Beta').catch(error => message.reply(`Couldn't delete messages because of: ${error}`));         
          break ;
	  case x:
	    message.channel.send("entered case x");
	    target.addRole([message.guild.roles.find(role => role.name === XtremeBeta)]).catch(error => message.reply(`Couldn't set role because of error: ${error}`));
            message.channel.send(target + ' your role has been changed to XtremeBeta').catch(error => message.reply(`Couldn't delete messages because of: ${error}`));         
          break;
	  default:
	    message.channel.send('sorry,something went wrong, please try again!');
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
