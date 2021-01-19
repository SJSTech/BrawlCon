module.exports = client => {
  const channelId = '790348592085991504' //welcome channel
  
  client.on('guildMemberAdd', (member) => {
    console.log(member)
    
    const message = 'Welcome to the server <@${member.id}>! We hope you have fun and enjoy your stay!'
    
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  
  
  
  })
}
