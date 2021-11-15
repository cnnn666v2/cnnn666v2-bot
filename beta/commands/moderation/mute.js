module.exports = ({
  name: "mute",
  code: `$color[RANDOM]
$title[Shhh...]
$description[<@$mentioned[1]> has been muted by: $username
Reason: $noMentionMessage]
$footer[Time mutes soon! | Version: $getVar[version]]
$giveRole[$mentioned[1];$findRole[Muted]]
$setUserVar[mute;1;$mentioned[1]]
$suppressErrors[:x: You have to mention someone!]
$onlyPerms[mutemembers;:x: You need \`mute_members\` permission to use this command!]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})