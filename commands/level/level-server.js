module.exports = ({
  name: "rank",
  code: `$color[1;$getGlobalUserVar[welcome_color]]
$thumbnail[1;$replaceText[$getGlobalUserVar[welcome_thumbnail];default;$userAvatar[$authorID]]]

$title[1;$username[$mentioned[1;yes]]'s level stats in $serverName]
$addField[1;$customEmoji[XP;881505355295772682] XP;$getUserVar[sXP2;$mentioned[1;yes]] | $getUserVar[sXPreq2;$mentioned[1;yes]];yes]
$addField[1;$customEmoji[Level;881505355295772682] Level;**Your Level is:** $getUserVar[SLevel2;$mentioned[1;yes]];yes]

$footer[1;Advanced levelling soon! | Version: $getVar[version]]

$onlyIf[$getServerVar[levelSYS]==0; ]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})