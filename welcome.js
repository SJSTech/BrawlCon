module.exports = (client) => {
  const channelId = '790348592085991504' //welcome channel
  const targetChannelId = '782022655402311700' //rules channel
  
  client.on('guildMemberAdd', (member) => {
    console.log(member)
    
    const message = 'Welcome to the server <@${
      member.id
  }>! We hope you have fun and enjoy your stay! Please check out ${member.guild.channels.cache
    .get(targetChannelId)
    .toString()}'
    
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}
