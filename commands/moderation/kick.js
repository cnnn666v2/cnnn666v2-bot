module.exports = ({
  name: "kick",
  code: `$title[You have been kicked from $serverName]
$description[You have been kicked for: $noMentionMessage by: $username#$discriminator]
$footer[Powered by: Cnnn666v2 | Version: $getVar[version]]
$color[RANDOM]
$suppressErrors[:x: You have to mention someone!]
$dm[$mentioned[1]]

$onlyIf[$getGlobalUserVar[blocked]==0;]`
})
module.exports = ({
  name: "kick",
  code: `$title[Kick shoe has been used]
$description[<@$mentioned[1]> has been kicked by: $username
Reason: $noMentionMessage]
$footer[Here is the 1st text | And there is version $getVar[version]]
$kick[$mentioned[1]]
$color[RANDOM]
$suppressErrors[:x: You have to mention someone!]
$onlyPerms[kick;:x: You need \`kick\` permission to use this command!]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})