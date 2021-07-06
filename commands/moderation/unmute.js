module.exports = ({
  name: "unmute",
  code: `$color[RANDOM]
$title[Start talking!]
$description[<@$mentioned[1]> has been unmuted by: $username]
$footer[Time mutes soon! | Version: $getVar[version]]
$takeRole[$mentioned[1];$findRole[Muted]]
$setUserVar[mute;0;$mentioned[1]]
$suppressErrors[:x: You have to mention someone!]
$onlyPerms[mutemembers;:x: You need \`mute_members\` permission to use this command!]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})