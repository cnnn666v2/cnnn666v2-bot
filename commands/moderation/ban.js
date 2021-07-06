module.exports = ({
  name: "ban",
  code: `$title[You have been banned from $serverName]
$description[You have been banned for: $noMentionMessage by: $username#$discriminator]
$footer[Powered by: Cnnn666v2 | Version: $getVar[version]]
$dm[$mentioned[1]]
$onlyPerms[ban;]
$suppressErrors[:x: You have to menton someone!]
$color[RANDOM]

$onlyIf[$getGlobalUserVar[blocked]==0;]`
})
module.exports = ({
  name: "ban",
  code: `$title[Ban hammer has been used]
$description[<@$mentioned[1]> has been banned by: $username
Reason: $noMentionMessage]
$footer[Total bans: $banCount | Version: $getVar[version]]
$ban[$mentioned[1]]
$onlyPerms[ban;:x: You need \`ban\` permission to use this command!]
$suppressErrors[:x: You have to menton someone!]
$color[RANDOM]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})