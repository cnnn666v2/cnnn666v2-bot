module.exports = ({
  name: "bot",
  aliases: ['stats', 'statistics'],
  code: `$color[$random[0000;999999]]
  $title[Bot Stats:]
$addField[Packages:;Aoi.JS: $packageVersion
Node.JS: $nodeVersion;yes]
$addField[Hosting provider:;**Sweplox Hosting**
[Discord server](https://discord.gg/beRhE87qp2)
[Website](https://sweplox.se/?language=english&currency=);yes]
$addField[Back-end:;CPU: $cpu%
RAM: $rammb
Ping: $pingms;yes]
$addField[Channels:;Text: $allChannelsCount[text]
Voice: $allChannelsCount[voice]
Announcement: $allChannelsCount[news]
Categories: $allChannelsCount[category];yes]
$addField[Shards:;Shard Count: 0
Shard ID (this server): $shardID;yes]
$addField[Basic:;Users: $allMembersCount
Servers: $serverCount;yes]

$footer[Version: $getVar[version] | Wanna support bot? Donate me $getServerVar[svpx6]support]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})