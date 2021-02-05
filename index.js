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

const activities_list = [ 
    "Brawl Ball | -bc help",
    "Solo SD | -bc help", 
    "Con Co. | -bc help",
    "Brawl Stars | -bc help"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'PLAYING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 300000); // Runs this every 5 minutes.
});

	
// var request = require('request');
// request({
//  url: 'https://api.starlist.pro/maps/15000004',
//  headers: {
//    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzdGFybGlzdC5wcm8iLCJhdWQiOiJzdGFybGlzdC5wcm8iLCJzdWIiOiI2NzI5MzAyNTA1NzcwMTg4OTkiLCJpYXQiOjE2MTE1MjYyMjAsImp0aSI6Imo5aTB4UmlmeDBjSW9XTUhSbU5wR21Zb3A5cXFzNE9MdGtZVGZaVFF5UUNlRU4wMVdKaVFmRlhYNnVkNDFQdVdlOFduTzRWM2dGemM3TUhlczRXQ1ZYWmZCTnVTREd3R1U5Zzgwd1NZQnlnc1pCMFFJdzhiRFh1TFpkSjVSUjVPdnRKazZ6ckFPdjc3S21ITlR6M2l1bEVBdlNvYVBNSWpxMzg2Smsxc2VFbWJVU3R4ZVV4VlprRDJ6YURBdDk2eWJLbmZVUm5Bb3lkM2FFSGdrcmJhbnBiTHBGTDJMaENRN29KUEVNbE9kM3ZBbEQ1c25ySU5TaDJQaWNHVXJ2NC0yNjQifQ.m-oyq2cbDSJrCgizmFk0i56FUDZgGx-m3sV6vaJtRENothoEba2buvF6JJi5dalWshp2sLHBPyB3ARgzpkQqDg'
//  },
//  rejectUnauthorized: false
// }, function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//    var jsonArr = JSON.parse(body);
//    console.log(jsonArr);
//    console.log("map:" + jsonArr.imageURL);
//    }
//  else {
//        console.error(error);
//        console.log(request.body);
//      }
// });
// json data
// var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
// parse json
// var jsonParsed = JSON.parse(jsonData);
 
// access elements
 // const jsonOut = jsonParsed.map[0].imageUrl;
  const jsonOut = "Command coming soon!";

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
  

	
if(command === "showdown") {
    // 
    // 
    message.channel.send(jsonOut);
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
  .setFooter("Copyright Con Co. and BrawlCon", "https://static.wixstatic.com/media/4c553e_7fc05571deea44dc853c4a51b7b4545e~mv2.png")
  .setImage("")
  .setThumbnail("https://static.wixstatic.com/media/4c553e_7fc05571deea44dc853c4a51b7b4545e~mv2.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("")
  .addFields(
	{ name: 'Prefix', value: 'Our prefix is -bc', inline: true },
	{ name: 'help', value: 'Message with all the commands', inline: true },
	{ name: '<map>', value: 'show the map you specified', inline: true },
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
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.cache.some(r=>["Admin", "672930250577018899"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");
    
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
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.cache.some(r=>["Administrator"].includes(r.name)))
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
});

client.login(process.env.DISCORD_TOKEN);
