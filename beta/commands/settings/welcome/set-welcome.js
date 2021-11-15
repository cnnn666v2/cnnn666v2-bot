module.exports = ({
  name: "welcome-set",
  code: `$color[RANDOM]
$title[:wave: | Welcome $username!]
$description[Your welcome channel has been set to: <#$mentionedChannels[1]>]
$footer[All welcoming commands - $getServerVar[svpx6]help-welcome | Version: $getVar[version]]

$setServerVar[welcome_ch;$mentionedChannels[1]]
$setServerVar[welcomeSYS;1]

$onlyIf[$isMentioned[$mentionedChannels[1]]==true;:x: You have to mention channel!]
$onlyIf[$mentionedChannels[1]!=:x: You have to mention channel!]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: You need \`administartor\` permission to set the welcome channel!]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})

//$onlyIf[$isNumber[$message]==true;:x: You have to mention channel!]