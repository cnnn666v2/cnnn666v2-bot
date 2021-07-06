module.exports = ({
  name: "anc",
  code: `$color[RANDOM]
$title[:loudspeaker: | $serverName announces:]
$description[$message]
$footer[Powered by Cnnn666v2 | Announced by: $username#$discriminator | Version: $getVar[version]]
$argsCheck[>1;:x: You need to say something!]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: Only admin can announce something!]
$deletecommand

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})