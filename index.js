// Load up the discord.js library
const Discord = require("discord.js");
// const token = require("./token.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./package.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
 // client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
 //client.user.setActivity('Con Co. | -bc help', { type: 'PLAYING' });
 //client.user.setPresence({ activity: { name: 'Con Co. | Maintenance in Progress!' }, status: 'idle' });
 //client.user.setPresence({ activity: { name: 'Restarting Systems' }, status: 'dnd' });
// const request = require('request');

	
});	
	
	
// const options = {
//  url: 'https://api.brawlify.pro/maps/15000004',
//  method: 'GET',
//  headers: {
//   'User-Agent': 'request',
//   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJicmF3bGlmeS5jb20iLCJhdWQiOiJicmF3bGlmeS5jb20iLCJzdWIiOiI2NzI5MzAyNTA1NzcwMTg4OTkiLCJpYXQiOjE2MTI2NTM2NTMsImp0aSI6InpiRkFmUU9DemFCVFB3NTJ5M0Z2TVF4Y1REa3BwSDJmZk1MdGtybHVINko4dXZ0UDZsc0pqdnpOWVZoV2NJUGVkM0N0WkdoUjlTMlVabWthb3A0bVJVOEw5NG4xTkxiYWF3czc3RlMwWGwwZXhZR0M4d1hqRVFocEtUWjQ2MXI0WFNWS0JmM2tvNWREQk02eXlxb25VME4xdnpBZ0tNdWdXT3lyeGRuaVpzaXNpUUtmcVJzN1hrd2VVUENkY2kxMkU5YzBsWVZtd1Q5OHJqYnZ0MlRWTTdRSTRIOHFtYUhXSUNMYldneHJiUlJLNTVjTk9oZ1lFQUZ0SDlCRXFKNS0yNjgifQ.JsSEY7U3r3zpHreGRvdWVsCHhbj8khgBH9a_Wvcu6gMJPQ5jPjHW6v1gPgnvWhniGqOHfVmQ2UBBasI44mM4LQ'
//  }
//};

//request(options, function(error, response, body) {
//  let json = JSON.parse(body);
   //  Printing the error if occurred 
//    if(error) console.log(error) 
    
    // Printing status code 
 //   console.log(response.statusCode); 
      
    // Printing body 
//    console.log(body);
//});

//req('https://api.brawlify.pro/maps/15000004', rejectUnauthorized: false, function(err, res, body) {
//  if (!error && response.statusCode == 200) {
//    console.log(body);
   // var jsonArr = JSON.parse(body);
//   var jsonParsed = JSON.parse(body);
   // console.log("map:" + jsonParsed.imageURL);
//    }
//  else {
//        console.error(error);
//        console.log(request.body);
//     }
//});

// var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
// parse json
 
// access elements
//  const jsonOut = jsonParsed.map[1].imageUrl;

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
 // console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
//  client.user.setActivity(`Now in ${client.guilds.cache.size} servers | -bc help`);
}); 

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  // console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});  
 //  client.user.setActivity(`Now in - ${client.guilds.cache.size} servers | -bc help :(`);

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
	
	
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(!message.content.startsWith(config.prefix)) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

	

	
  // Let's go with a few common example commands! Feel free to delete or change those!
    
     if(command === "whoisepic") {
return message.reply("LOL tech boi duh");
}
	
	
     if(command === "restart") {
message.channel.send("Restarting Bot...");
}
     if(command === "invite") {
message.channel.send("https://dsc.lol/con-co");
}
   
	
if(command === "map") {

    const mapMessageCased = args.join(" ");

    mapMessage = mapMessageCased.toLowerCase();

    const mapWords = mapMessage.split(" ");

    for (let i = 0; i < mapWords.length; i++) {
      mapWords[i] = mapWords[i][0].toUpperCase() + mapWords[i].substr(1);
}
    mapMessageReturn = mapWords.join("-");

    if(mapMessageReturn === "Eye-Of-The-Storm") {

      mapMessageReturn = "Eye-of-the-Storm";
    }

    if(mapMessageReturn === "Nruhc-Nrevac") {

      mapMessageReturn = "nruhC-nrevaC";
    }

    // message.delete().catch(O_o=>{});  
    mapMessageReturn = 'https://cdn.brawlify.com/map/' + mapMessageReturn + '.png';
    message.channel.send(mapMessageReturn);
  }

    
	if(command === "st-dm") {
const user = message.mentions.users.first();
const dmContent = args.join(" ").slice(23);
user.send(dmContent);
message.channel.send("Sent. \n \n **Notice** \n if you did not mention a user, the message failed to send. Also, a valid user (not a bot, a user from outside my servers, or a role) is needed to complete.");
}
	
	if(command === "st-channel") {
const channel = message.mentions.channels.first();
const chContent = args.join(" ").slice(21);
channel.send(chContent);
message.channel.send("Sent. \n \n **Notice** \n if you did not tag a channel, the message failed to send. Also, a valid channel (not a bot, a user from outside my servers, a role, or a deleted channel) is needed to complete.");
}
	
	
     if(command === "help") {
const embed = new Discord.MessageEmbed()
  .setTitle("Commands")
  .setAuthor("BrawlCon", "https://static.wixstatic.com/media/4c553e_7fc05571deea44dc853c4a51b7b4545e~mv2.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xff0909)
  .setDescription("")
  .setFooter("Copyright Con Co. and BrawlCon | Contact @Techboy9#0001 for questions or concerns", "https://static.wixstatic.com/media/4c553e_7fc05571deea44dc853c4a51b7b4545e~mv2.png")
  .setImage("")
  .setThumbnail("https://static.wixstatic.com/media/4c553e_7fc05571deea44dc853c4a51b7b4545e~mv2.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setURL("")
  .addFields(
	{ name: 'Prefix', value: 'Our prefix is -bc', inline: true },
	{ name: 'help', value: 'Message with all the commands', inline: true },
	{ name: 'map <mapname>', value: 'shows the map you specified', inline: true },
        { name: '<brawler>', value: 'Shows the specified brawler stats', inline: true },
        { name: '<gamemode>', value: 'Shows details and stats about the specified gamemode', inline: true },
        { name: '<club>', value: 'Shows the specified club stats', inline: true },
        
  	)
  message.channel.send(embed);
}

  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Loading...");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
     if (message.author.id === '672930250577018899'){
     const member = message.mentions.members.first();
     member.kick();
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    const reason = args.join(" ").slice(23);
    message.reply ("User was kicked! Reason is below (if provided)")
    message.channel.send(reason)
  }
  }
  
 
if(command === "status") {
if (message.author.id === '672930250577018899') {
const newStatus = args.join(" ");
client.user.setActivity(newStatus);
message.channel.send("Status is set to " +  newStatus + ".");
}
}
	
	
	
	if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.cache.some(r=>["806921125132238918"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");
    
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
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.messages.fetch({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

//status commands!
	
	if(command === "online") {
const channel = client.channels.cache.get('798985952906575912');
channel.send('The bot is fully online and should be running smoothly!');
	}
	if(command === "idle") {
const channel = client.channels.cache.get('798985952906575912');
channel.send('The bot is currently in downtime we will be back up soon!');
	}
	if(command === "dnd") {
const channel = client.channels.cache.get('798985952906575912');
channel.send('The bot is currently undergoing maintenance!');
	}
	if(command === "offline") {
const channel = client.channels.cache.get('798985952906575912');
channel.send('The bot is offline. We are trying to debug and we will have it running again shortly!');
	}
	
if(command === "status") {
const icon = args[0];
const text = args[1];
const mode = args[2];
const www = args[3];
client.user.setPresence({
    status: icon,
    activity: {
        name: text,
        type: mode,
        url: www
    }
})
message.channel.send("Your status was set as " + icon + " for the icon, " + text + " for the status text, " + mode + " for the mode, " + " and " + www + " for stream url.");
}



});


client.login(process.env.DISCORD_TOKEN);
