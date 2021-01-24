// Load up the discord.js library
const Discord = require("discord.js");
// const token = require("./token.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./package.json");
const welcome = require ('./welcome');
// config.token contains the bot's token
// config.prefix contains the message prefix.

const activities_list = [ 
    "Brawl Ball | -bc help",
    "Solo SD | -bc help", 
    "Con Co. | -bc help",
    "Brawl Stars | -bc help",
    "Virus 8-bit | -bc help",
    "Update Hype! | -bc help"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'PLAYING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 300000); // Runs this every 5 minutes.



   
	welcome(client);
});

var request = require('request');
request({
  url: 'https://api.starlist.pro/maps/15000004',
  headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzdGFybGlzdC5wcm8iLCJhdWQiOiJzdGFybGlzdC5wcm8iLCJzdWIiOiI2NzI5MzAyNTA1NzcwMTg4OTkiLCJpYXQiOjE2MTE1MjYyMjAsImp0aSI6Imo5aTB4UmlmeDBjSW9XTUhSbU5wR21Zb3A5cXFzNE9MdGtZVGZaVFF5UUNlRU4wMVdKaVFmRlhYNnVkNDFQdVdlOFduTzRWM2dGemM3TUhlczRXQ1ZYWmZCTnVTREd3R1U5Zzgwd1NZQnlnc1pCMFFJdzhiRFh1TFpkSjVSUjVPdnRKazZ6ckFPdjc3S21ITlR6M2l1bEVBdlNvYVBNSWpxMzg2Smsxc2VFbWJVU3R4ZVV4VlprRDJ6YURBdDk2eWJLbmZVUm5Bb3lkM2FFSGdrcmJhbnBiTHBGTDJMaENRN29KUEVNbE9kM3ZBbEQ1c25ySU5TaDJQaWNHVXJ2NC0yNjQifQ.m-oyq2cbDSJrCgizmFk0i56FUDZgGx-m3sV6vaJtRENothoEba2buvF6JJi5dalWshp2sLHBPyB3ARgzpkQqDg'
  },
  rejectUnauthorized: false
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
    var jsonArr = JSON.parse(body);
    console.log(jsonArr);
    console.log("group id:" + jsonArr[0].id);
    }
  else {
        console.error(error);
    //    console.log(request.body);
      }
 });
// json data
// var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
 
{"status":"ok","map":{"id":15000004,"new":false,"disabled":false,"name":"Snake Prairie","hash":"Snake-Prairie","version":5,"link":"https://www.starlist.pro/maps/detail/Snake-Prairie","imageUrl":"https://cdn.starlist.pro/map/Snake-Prairie.png?v=5","credit":null,"environment":{"id":39,"name":"Default","hash":"event_canyon_banner","path":"Canyon","version":1,"imageUrl":"https://cdn.starlist.pro/environment/Canyon.png?v=1"},"gameMode":{"id":1,"name":"Bounty","hash":"Bounty","version":1,"color":"#10b2b7","link":"https://www.starlist.pro/gamemodes/detail/Bounty","imageUrl":"https://cdn.starlist.pro/gamemode/Bounty.png?v=1"},"lastActive":1610892000,"dataUpdated":1611280218,"stats":[{"brawler":16000036,"winRate":71.0816,"useRate":1.93202,"starRate":2.03244},{"brawler":16000017,"winRate":68.9072,"useRate":10.1419,"starRate":15.0317},{"brawler":16000042,"winRate":67.9348,"useRate":0.220506,"starRate":0.199096},{"brawler":16000031,"winRate":67.7187,"useRate":1.45023,"starRate":1.4393},{"brawler":16000015,"winRate":65.5827,"useRate":2.22027,"starRate":2.62558},{"brawler":16000014,"winRate":63.2785,"useRate":18.7023,"starRate":21.4567},{"brawler":16000030,"winRate":61.8309,"useRate":1.8394,"starRate":3.09428},{"brawler":16000013,"winRate":58.2722,"useRate":1.8553,"starRate":1.8126},{"brawler":16000027,"winRate":57.5499,"useRate":0.503225,"starRate":0.489444},{"brawler":16000003,"winRate":56.9536,"useRate":1.41981,"starRate":0.7632},{"brawler":16000022,"winRate":55.8011,"useRate":0.762441,"starRate":0.327678},{"brawler":16000028,"winRate":55.2326,"useRate":0.714745,"starRate":0.82127},{"brawler":16000019,"winRate":54.067,"useRate":1.25184,"starRate":0.966444},{"brawler":16000012,"winRate":53.4539,"useRate":1.75645,"starRate":0.485296},{"brawler":16000007,"winRate":53.2199,"useRate":2.47257,"starRate":2.30204},{"brawler":16000040,"winRate":52.3585,"useRate":0.293778,"starRate":0.136878},{"brawler":16000011,"winRate":52.3356,"useRate":1.31889,"starRate":0.808827},{"brawler":16000000,"winRate":52.331,"useRate":16.9769,"starRate":19.0551},{"brawler":16000039,"winRate":52.1951,"useRate":0.568893,"starRate":0.460409},{"brawler":16000008,"winRate":52.1874,"useRate":3.34907,"starRate":3.04036},{"brawler":16000034,"winRate":51.2953,"useRate":1.56912,"starRate":2.28545},{"brawler":16000016,"winRate":50.6641,"useRate":0.805989,"starRate":0.842009},{"brawler":16000004,"winRate":49.5575,"useRate":0.866127,"starRate":0.638766},{"brawler":16000002,"winRate":49.3507,"useRate":4.39838,"starRate":4.10635},{"brawler":16000005,"winRate":49.1525,"useRate":1.59331,"starRate":1.09503},{"brawler":16000037,"winRate":48.951,"useRate":0.210138,"starRate":0.0871044},{"brawler":16000001,"winRate":48.4921,"useRate":3.78939,"starRate":2.43892},{"brawler":16000038,"winRate":48.3421,"useRate":1.70737,"starRate":0.937409},{"brawler":16000021,"winRate":48.1928,"useRate":0.35599,"starRate":0.141026},{"brawler":16000035,"winRate":47.3485,"useRate":0.779722,"starRate":0.323531},{"brawler":16000043,"winRate":46.5798,"useRate":1.84216,"starRate":1.6301},{"brawler":16000006,"winRate":46.1806,"useRate":0.399538,"starRate":0.0497739},{"brawler":16000024,"winRate":45.8382,"useRate":2.47327,"starRate":2.78319},{"brawler":16000029,"winRate":45.7604,"useRate":1.06313,"starRate":0.497739},{"brawler":16000009,"winRate":44.9821,"useRate":0.818431,"starRate":0.331826},{"brawler":16000020,"winRate":44.2308,"useRate":0.767971,"starRate":0.958148},{"brawler":16000032,"winRate":44.0729,"useRate":0.507372,"starRate":0.128583},{"brawler":16000023,"winRate":43.3598,"useRate":1.40322,"starRate":0.700983},{"brawler":16000018,"winRate":42.8931,"useRate":1.12258,"starRate":0.696835},{"brawler":16000010,"winRate":42.293,"useRate":2.42211,"starRate":1.63839},{"brawler":16000041,"winRate":41.5225,"useRate":0.37811,"starRate":0.0165913},{"brawler":16000025,"winRate":41.2121,"useRate":0.221889,"starRate":0.0705131},{"brawler":16000026,"winRate":39.4737,"useRate":0.754146,"starRate":0.261313}]}}

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
    if(!message.member.roles.cache.some(r=>["Admin", "785964776903016479"].includes(r.name)))
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

// client.login(token);
// client.login(config.token);
client.login(process.env.DISCORD_TOKEN);
