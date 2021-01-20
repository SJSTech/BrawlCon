module.exports = (client) => {
  const channelId = '790348592085991504' // welcome channel
  const targetChannelId = '782022655402311700' // rules and info

  client.on('guildMemberAdd', (member) => {
    const message = `Welcome <@${
      member.id
    }> to the server! Please check out ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()}`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}
